import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import MainLayout from "../layout"
import Home from "../pages/Home"
import Category from "../pages/Category"
import LayoutProvider from "../context/LayoutContext"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={
            <LayoutProvider>
                <MainLayout />
            </LayoutProvider>
        }
        >
            <Route index element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
        </Route>
    )
)