
import AuthLayout from "./layouts/Auth.jsx"
import AdminLayout from "./layouts/Admin.jsx";
import ChartsPage from "./views/ChartsPage.jsx";
import Content from "./views/examples/Content.jsx";

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
    },
    {
        path: '/charts',
        name: 'charts',
        component: ChartsPage,
        layout: '/admin'
    },
    {
        path: '/content',
        name: 'content',
        component: Content,
        layout: '/admin'
    }
];

export default routes

