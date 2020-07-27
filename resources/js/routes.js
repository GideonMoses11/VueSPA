import AllPosts from './components/AllPosts.vue'
import AddPost from './components/AddPost.vue'
import EditPost from './components/EditPost.vue'
import App from './components/App.vue'
import About from './components/About.vue'


export const routes = [{
        name: 'home',
        path: '/',
        component: AllPosts
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    },
    {
        name: 'add',
        path: '/add',
        component: AddPost
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'main-app',
        path: '/main-app',
        component: App
    },
];