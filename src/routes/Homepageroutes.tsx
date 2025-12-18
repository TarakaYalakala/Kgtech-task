import { Suspense } from "react"
import { HomePage } from "./Lazy"
import { ErrorPage } from "./Lazy"
import { NewsPage } from "./Lazy";

export const HomePageRoutes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
            </Suspense>
        )
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
