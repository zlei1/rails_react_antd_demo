import Loadable from 'react-loadable';
import Loading from '@admin/components/Loading'

const Dashboard = Loadable({
  loader: () => import("@admin/views/dashboard"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("@admin/views/about"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("@admin/views/404"),
  loading: Loading
});

export default [
  { path: "/dashboard", component: Dashboard },
  { path: "/about", component: About },
  { path: "/404", component: NotFound },
]
