
import AuthLayout from "./layouts/Auth.jsx"
import AdminLayout from "./layouts/Admin.jsx";
import ChartsPage from "./views/ChartsPage.jsx";
import Content from "./views/examples/Content.jsx";

var routes = [
    {
        path: '/dolphin-admin/home',
        name: 'Home',
        component: AdminLayout,
        layout: '/admin'
    },
    {
        path: '/dolphin-admin/login',
        name: 'auth',
        component: AuthLayout,
        layout: '/auth'
    },
    {
        path: '/dolphin-admin/charts',
        name: 'charts',
        component: ChartsPage,
        layout: '/admin'
    },
    {
        path: '/dolphin-admin/content',
        name: 'content',
        component: Content,
        layout: '/admin'
    }
];

export default routes

