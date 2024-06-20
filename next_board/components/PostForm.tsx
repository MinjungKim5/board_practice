'use client'
import { useState } from "react";

export default function PostForm({ onSubmit } : any) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({ title, content});
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>제목</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>내용</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button type="submit">Publish</button>
        </form>
    )
}