import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";


type JSXComponet = () => JSX.Element

interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponet> | JSXComponet
    name: string
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Array<Route> = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayot'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'no-lazy'
    },
]