import {createRouter,createWebHashHistory} from 'vue-router'

const routes=[
    {
        path:'/',
        component:()=>import('../views/Main.vue'),
        redirect:"/home",
        children:
        [
            {
                path:'/home',
                name:'home',
                component:()=>import('../views/home/Home.vue')
            },
            {
                path:'/user',
                name:'user',
                component:()=>import('../views/User/User.vue')
            },
            {
                path:'/page1',
                name:'page1',
                component:()=>import('../views/page1.vue')
            },
            {
                path:'/page2',
                name:'page2',
                component:()=>import('../views/page2.vue')
            },
            {
                path:'/tabel',
                name:'tabel',
                component:()=>import('../views/basetab.vue')
            },
            {
                path:'/tabxx',
                name:'tabxx',
                component:()=>import('../views/tabs.vue')
            },
            {
                path:'/iconuser',
                name:'iconuser',
                component:()=>import('../views/icon.vue')
            },
            {
                path:'/page5',
                name:'page5',
                component:()=>import('../views/page5.vue')
            },
            {
                path:'/permiss',
                name:'permiss',
                component:()=>import('../views/permiss.vue')
            },
        ]
        
        
            
        
}
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
