import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function SendMessages() {
    const [message, setMessage] = useState("");
    function sendMessage(event) {
        event.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMessage("");
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input type="text"
                        placeholder="input a message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        style={{ width: "100%", height: "10em", borderTop: "1px solid grey" }} />
                </div>
            </form>
        </div>
    )
}

export default SendMessages