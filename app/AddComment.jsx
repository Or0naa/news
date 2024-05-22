"use client"

import { updateCommentAction } from "@/server/actions/article.action";
import { useState } from "react";

export default function AddComment({ articleId }) {
    const [commentData, setCommentData] = useState({
        author: '',
        content: '',
    });

    const handleChange = (e) => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value });
    }

    return (
        <div className="flex gap-4" >
            <div>
                Add a new comment:
            </div>
            <form action={updateCommentAction} className="flex flex-col bg-theme-bg gap-2" >
                <input type="hidden" name="articleId" value={articleId} />
                <input type="text" placeholder="Name" name="author" value={commentData.author} onChange={handleChange} className="w-40" />
                <textarea placeholder="Comment content" name="content" value={commentData.content} onChange={handleChange} className="w-52 resize-none " />
                <button className="bg-theme-dark border-theme-light border-2 hover:text-theme-bg w-16 rounded-lg" type="submit" >Submit</button>
            </form>
        </div>
    )
}