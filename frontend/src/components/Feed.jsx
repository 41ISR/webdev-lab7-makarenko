import { useEffect, useState } from "react"
import { api } from "../api/api"
import MessageCard from "./MessageCard"

const Feed =({title = "Сообщения"}) =>{
    const [message, setMessage]= useState([])

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await api.getMessages()
                setMessage(data)
            } catch (error){
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return(
        <>
            <div className="messages-sections">
                <div className="containter">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {message.map((el)=>(
                        <MessageCard {...el} /> ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed