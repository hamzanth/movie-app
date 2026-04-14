import {
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'
import { RootLayout } from './RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Admin from './pages/Admin'
import MovieDetail from './pages/MovieDetail'
import Action from './pages/Action'
import Horror from './pages/Horror'
import Nollywood from './pages/nollywood'
import Thriller from './pages/Thriller'
import Drama from './pages/Drama'
import Romance from './pages/Romance'
import Comedy from './pages/Comedy'
import Adventure from './pages/adventure'
import Movies from './pages/Movies'

const rootRoute = createRootRoute({
    component: RootLayout
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})

const movieDetailRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/movie/$id',
    component: MovieDetail
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About
})

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/admin',
    component: Admin
})

const ActionRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/action',
    component: Action
})

const HorrorRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/horror',
    component: Horror
})

const NollywoodRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/nollywood',
    component: Nollywood
})

const ThrillerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/thriller',
    component: Thriller
})

const DramaRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/drama',
    component: Drama
})

const RomanceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/romance',
    component: Romance
})

const ComedyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/comedy',
    component: Comedy
})

const AdventureRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/adventure',
    component: Adventure
})

const MoviesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/movies',
    component: Movies
})

const routeTree = rootRoute.addChildren([
    homeRoute, 
    aboutRoute, 
    adminRoute, 
    movieDetailRoute, 
    ActionRoute,
    HorrorRoute,
    NollywoodRoute,
    ThrillerRoute,
    DramaRoute,
    RomanceRoute,
    ComedyRoute,
    AdventureRoute,
    MoviesRoute,
])

export const router = createRouter({ routeTree })

// Optional: expose types globally for Typescript
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}