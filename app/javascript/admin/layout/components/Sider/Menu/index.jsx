import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addTag } from "@admin/store/actions";
import { getMenuFromList } from "@admin/utils";
import siderMenu from "@admin/config/sider_menu";
import "./index.less";
const SubMenu = Menu.SubMenu;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const SiderMenu = (props) => {
  const { addTag, history } = props;
  const path = history.location.pathname;

  const [menuTreeNode, setMenuTreeNode] = useState([]);
  const [openKey, setOpenKey] = useState([]);

  const filterMenuItem = (item) => {
    // filterMenuItem用来根据配置信息筛选可以显示的菜单项
    return true;
  };

  const getMenuNodes = (siderMenu) => {
    return siderMenu.reduce((pre, item) => {
      if (filterMenuItem(item)) {
        if (!item.children) {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        } else {
          const cItem = item.children.find(
            (cItem) => path.indexOf(cItem.path) === 0
          );

          if (cItem) {
            setOpenKey([...openKey, item.path])
          }

          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  <span>{item.title}</span>
                </span>
              }
            >
              {getMenuNodes(item.children)}
            </SubMenu>
          );
        }
      }

      return pre;
    }, []);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const _items = reorder(
      menuTreeNode,
      result.source.index,
      result.destination.index
    );

    setMenuTreeNode(_items);
  };

  const handleMenuSelect = ({ key = "/dashboard" }) => {
    let menuItem = getMenuFromList(siderMenu, "path", key);
    addTag(menuItem);
  };

  useEffect(() => {
    const nodes = getMenuNodes(siderMenu);
    setMenuTreeNode(nodes)
    handleMenuSelect(openKey);
  }, []);

  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {menuTreeNode.map((item, index) => (
                  <Draggable
                    key={item.key}
                    draggableId={item.key}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Menu
                          mode="inline"
                          theme="dark"
                          onSelect={handleMenuSelect}
                          selectedKeys={[path]}
                          defaultOpenKeys={openKey}
                        >
                          {item}
                        </Menu>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Scrollbars>
    </div>
  );
}

export default connect(null, { addTag })(withRouter(SiderMenu));
