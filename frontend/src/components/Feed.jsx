import { useEffect, useState } from "react"
import { api } from "../api/api"
import MessageCard from "./MessageCard"
import { useMessageSore } from "../store/useMessageStore"

const Feed = ({title = "Сообщения"}) => {
    const {messages, getMessages} = useMessageSore()
    useEffect(() => {
            getMessages()
    }, [])

    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages.map((el, i) => (
                            <MessageCard key={i} {...el} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed