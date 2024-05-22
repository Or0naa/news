"use client"

import { updateCommentAction } from "@/server/actions/article.action";
import { useState } from "react";

export default function AddComment({ articleId }) {
    const [commentData, setCommentData] = useState({
        author: '',
        content: '',
        articleId: articleId
    });

    const handleChange = (e) => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
    }
    console.log({articleId});

    return (
        <div className="flex gap-4" >
            <div>
                Add a new comment:
            </div>
            <form action={updateCommentAction} className="flex flex-col bg-theme-bg gap-2" >
                <input type="text" readOnly value={articleId} hidden name='pid' />
                <input type="text" placeholder="שם" name="author" className="w-40" />
                <textarea placeholder="תוכן התגובה" name="content" className="w-52 resize-none " />
                <button type="submit" >שליחה</button>
            </form>
        </div>
    )
}