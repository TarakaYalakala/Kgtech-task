import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { ErrorPage } from "./Lazy"
import { NewsPage } from "./Lazy";

export const HomePageRoutes = [
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorPage />
            </Suspense>
        )
    },
    {
        path: '/news',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <NewsPage />
            </Suspense>
        )
    }
]
