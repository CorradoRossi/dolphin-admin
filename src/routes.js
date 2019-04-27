import Index from "./views/Index.jsx";
import AuthLayout from "./layouts/Auth.jsx"
import AdminLayout from "./layouts/Admin.jsx";

var routes = [
    {
        path: '/test',
        name: 'test',
        component: Index,
        layout: '/admin'
    },
    {
        path: '/home',
        name: 'Home',
        component: AdminLayout,
        layout: '/admin'
    },
    {
        path: '/auth',
        name: 'auth',
        component: AuthLayout,
        layout: '/auth'
    }
];

export default routes

