import React from "react"
import {Route, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Categoria from './pages/Categoria'
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import Perfil from "./pages/PerfilUser"


const Routes = () => {
    return (
        <BrowserRouter>
         <Route component={Home} path="/" exact/>
         <Route component={Categoria} path="/categoria/:nome" />
         <Route component={Cadastro} path="/cadastro"/>
         <Route component={Login} path="/login"/>
         <Route component={Perfil} path="/perfil"/>
         </BrowserRouter>   
    )
}

export default Routes
