import { createRouter, createWebHistory} from 'vue-router'

//Lazy loading
const Contratos = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Contratos.vue')
const Dashboard = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/Dashboard.vue')
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/DashboardRodape.vue')
const Home = () => import(  '@/views/Home.vue')
const Indicadores = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Indicadores.vue')
const Lead = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Lead.vue')
const Leads = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Leads.vue')
const Login = () => import('@/views/Login.vue')
const Opcoes = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Opcoes.vue')
const PaginaNaoEncontrada = () => import( '@/views/PaginaNaoEncontrada.vue')
const Servico = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servico.vue')
const Servicos = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servicos.vue')
const Site = () => import('@/views/Site.vue')
const Vendas = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Vendas.vue')
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasPadrao.vue')

const routes = [
    {
        path: '/', //localhost:8000
        component: Site
    },
    {
        path: '/home', //localhost:8000/home
        alias: '/app',
        component: Home,
        children: [
            {
               path: 'vendas', //localhost:8000/home/vendas
               component: Vendas,
               children: [
                    {
                        path: 'leads', //localhost:8000/home/vendas/leads
                        component: Leads,
                        name: 'leads'
                    },
                    {
                        path: 'leads/:id', //localhost:8000/home/vendas/leads/5
                        component: Lead,
                        name: 'lead'
                    },
                    {
                        path: 'contratos', //localhost:8000/home/vendas/contratos
                        component: Contratos,
                        name: 'contratos'
                    },
                    {
                        path: '', //localhost:8000/home/vendas
                        component: VendasPadrao
                    }
               ]
            },
            {
                path: 'servicos', //localhost:8000/home/servicos
                component: Servicos,
                name: 'servicos', //localhost:8000/home/vendas
                children: [{
                    path: ':id', 
                    props: {
                        default: true,
                        indicadores: true,
                        opcoes: true
                    },
                    alias: '/s/:id',
                    components: {
                        default: Servico,
                        opcoes: Opcoes,
                        indicadores: Indicadores 
                    }, 
                    name: 'servico'
                }]
            },
            {
                path: 'dashboard', //localhost:8000/home
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            }
        ]
    },
    {
        path: '/login', //localhost:8000/login
        component: Login
    },
    {
        path: '/redireciomento-1', redirect: '/home/servicos'
    },
    {
        path: '/redireciomento-2', redirect: { name: 'leads' },
    },
    {
        path: '/redireciomento-3', redirect: '/home/vendas' ,
    },
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
]

const router = createRouter({
    history: createWebHistory() ,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        }

        if(to.hash) {
            return { el: to.hash }
        }

        return  { left: 0, top: 0 }
    },
    routes
})

export default router


