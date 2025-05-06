import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import MainLayout from "../layout"
import Home from "../pages/Home"
import Category from "../pages/Category"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
        </Route>
    )
)