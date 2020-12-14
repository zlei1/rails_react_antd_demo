const tokens = {
  "admin-123456": "admin-token",
}

const users = {
  "admin-token": {
    name: "张三",
    avatar: "https://avatars2.githubusercontent.com/u/17946081"
  }
}

export default {
  login: (config) => {
    const { username, password } = JSON.parse(config.body);
    const token = tokens[`${username}-${password}`];
    if (!token) {
      return {
        code: 1,
        message: '用户名或密码错误'
      }
    } else {
      return {
        code: 0,
        message: 'success',
        data: { ...users[token], token }
      }
    }
  },
  getInfo: (config) => {
    return {
      code: 0,
      message: 'success',
      data: users["admin-token"]
    }
  }
}
