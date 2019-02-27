import DashboardIndex from './Dashboard/Index.js';
import UserIndex from './Users/Index.js';

const users = [{Name: 'Laasi' , Age: 5, Emailid: 'laasi@abc.com'}];
export const routes = [
  {
    label: 'Dashboard',
    pageTitle: 'Dashboard',
    path: '/Dashboard',
    component: DashboardIndex
  },
  {
    label: 'Users',
    pageTitle: 'Users',
    path: '/Users',
    component: UserIndex,
  }
];