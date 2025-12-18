import { Suspense } from "react"
import { LoginPage, SignupPage } from "../routes/Lazy"

export const AuthRoutes = [
    {
        path: '/login',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <LoginPage />
            </Suspense>
        )
    },
    {
        path: '/signup',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <SignupPage />
            </Suspense>
        )
    }
]