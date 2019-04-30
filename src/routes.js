
import AuthLayout from "./layouts/Auth.jsx"
import Signup from "./layouts/Signup.jsx"
import AdminLayout from "./layouts/Admin.jsx";
import ChartsPage from "./views/ChartsPage.jsx";
import FormsPage from "./views/FormsPage.jsx";
import CardsPage from "./views/CardsPage.jsx";
import StatsPage from "./views/StatsPage.jsx";
import BlankPage from "./views/BlankPage.jsx";
import TablesPage from "./views/TablesPage.jsx";
import Content from "./views/Content.jsx";

var routes = [
    {
        path: '/login',
        name: 'auth',
        component: AuthLayout,
        layout: '/auth'
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
        layout: '/signup'
    },
    {
        path: '/home',
        name: 'Home',
        component: AdminLayout,
        layout: '/admin'
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
    },
    {
        path: '/forms',
        name: 'forms',
        component: FormsPage,
        layout: '/admin'
    },
    {
        path: '/cards',
        name: 'cards',
        component: CardsPage,
        layout: '/admin'
    },
    {
        path: '/tables',
        name: 'tables',
        component: TablesPage,
        layout: '/admin'
    },
    {
        path: '/stats',
        name: 'stats',
        component: StatsPage,
        layout: '/admin'
    },
    {
        path: '/blank',
        name: 'blank',
        component: BlankPage,
        layout: '/admin'
    }
];

export default routes

