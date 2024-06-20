'use client'
import { useState } from "react";

export default function LoginForm({ onSubmit } : any) {
    const [user_id, setId] = useState('');
    const [password, setPw] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({ user_id, password});
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>id</label>
                <input type="text" value={user_id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>password</label>
                <input type="text"value={password} onChange={(e) => setPw(e.target.value)} />
            </div>
            <button type="submit">Log in</button>
        </form>
    )
}