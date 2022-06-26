import { Suspense } from "react"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

import logo from '../logo.svg'

const Navigation = () => {
    return (
        <Suspense>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React Logo" />
                        <ul>
                            {
                            routes.map( route => (
                                <li key={route.name}>
                                    <NavLink to={route.to} >{route.name}</NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map( route => (
                                <Route key={route.to} path={route.path} element={<route.Component/>} />
                            ))
                        }
                        <Route path="/*" element={<Navigate to='/lazyload' />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default Navigation