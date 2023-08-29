import { Route,Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { AllNewsPage } from "../pages/AllNewsPage"
import { SinglePage } from "../pages/SinglePage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { EditPostPage } from "../pages/EditPostPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const RoutesMain = ()=>{
    return(
        <Routes>

            <Route element={<PublicRoutes/>}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/news' element={<AllNewsPage/>}/>
                <Route path='/news:id' element={<SinglePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
            </Route>
            
            <Route element={<PrivateRoutes/>}>
                <Route path='/dashboard' element={<DashboardPage/>}/>
                <Route path='/edit:id' element={<EditPostPage/>}/>
            </Route>
            
        </Routes>
    )
}