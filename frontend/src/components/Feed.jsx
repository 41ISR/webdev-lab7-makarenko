const Feed =({title = "Сообщения"}) =>{
    return(
        <>
            <div className="messages-sections">
                <div className="containter">
                    <h2 className="section-title">{title}</h2>
                    <div className="message-grig"></div>
                </div>
            </div>
        </>
    )
}

export default Feed