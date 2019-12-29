import Index from './Component/Index.jsx';
import Login from './Component/Admin/Login';
import Signup from './Component/Admin/Signup';
import IndexAdmin from './Component/Admin/Index';

export const Routes = [
    {
        path: "/",
        component: Index,
    },            
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Signup
    },
    {
        path: '/admin/:email',
        component: IndexAdmin
    },
];
