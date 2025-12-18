
// Lazy Loading using Lazy and suspensee....//

import React from "react";


export const HomePage = React.lazy(() => import('../pages/Home'));
export const ErrorPage = React.lazy(() => import('../pages/Errorpage'));
export const LoginPage = React.lazy(() => import('../pages/auth/Login'));
export const NewsPage = React.lazy(() => import('../pages/News'));