import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import { db, auth } from '../firebase';
import SendMessages from './SendMessages';

function Chat() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
            .orderBy("createdAt")
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
    }, [])

    return (
        <div>
            {console.log(messages)}
            <SignOut />
            <div className="msgs">
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${
                            uid === auth.currentUser.uid ? "sent" : "recieved"
                        }`}>
                            <img src={photoURL} alt="" className='icon-img' />
                            <p className='msg-text'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages />
        </div>
    )
}

export default Chat