import { Suspense } from "react"
import { LoginPage } from "../routes/Lazy"

export const AuthRoutes = [
    {
        path: '/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
            </Suspense>
        )
    }
]