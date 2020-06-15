import React, {useEffect, useState} from "react"
import api from "../../services/api"
import {Link, useHistory} from "react-router-dom"
import "./style.css"

const Perfil = () => {
    const history = useHistory()
    const [user, setUser] = useState("")
    const token = localStorage.getItem("LojaVirtual")

    useEffect(() => {
        api.get(`user/profile`, {headers: {autorizacao: token}})
        .then(response => {
            if(response.data.error){
                alert(response.data.error)
                localStorage.removeItem("LojaVirtual")
                history.push("/")
            }
            const { nome } = response.data.user[0]
            setUser(nome)
        }).catch(() => {
            history.push("/")
        })
    })

    function handleQuit(){
        localStorage.setItem("LojaVirtual", "null")
    }
    
    
    return (
        <>
        <main id="PerfilUser">
            <div id="infosPerfil">
                <section id="user"> <h2>Olá, {user}, o que deseja fazer?</h2></section>
               <ul id="navUser">
                    <Link to="/user/dados" className="link">Meu dados</Link>
                    <Link to="/user/compras" className="link">Minhas compras</Link>
                    <Link to="/user/ultimasVendas" className="link">Últimas vendas</Link>
                    <Link to="/user/produtos" className="link">Meus produtos</Link>
                    <Link to="/user/chat" className="link">Chat</Link>
                    <Link to="/" onClick={handleQuit} className="link">Sair</Link>
                </ul> 
            </div>
        </main>
        </>
    )
}

export default Perfil
