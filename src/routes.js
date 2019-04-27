
import AuthLayout from "./layouts/Auth.jsx"
import AdminLayout from "./layouts/Admin.jsx";

var routes = [
    {
        path: '/home',
        name: 'Home',
        component: AdminLayout,
        layout: '/admin'
    },
    {
        path: '/login',
        name: 'auth',
        component: AuthLayout,
        layout: '/auth'
    }
];

export default routes

