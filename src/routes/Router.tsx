import { createBrowserRouter } from "react-router-dom";
import { HomePageRoutes } from "./Homepageroutes";
import { AuthRoutes } from "./Authroutes";

export const router = createBrowserRouter([...HomePageRoutes, ...AuthRoutes])