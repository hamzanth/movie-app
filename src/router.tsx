import {
    createRootRoute,
    createRoute,
    createRouter,
} from '@tanstack/react-router'
import { RootLayout } from './RootLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'

const rootRoute = createRootRoute({
    component: RootLayout
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

export const router = createRouter({ routeTree })

// Optional: expose types globally for Typescript
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}