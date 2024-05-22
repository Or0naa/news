"use client"

import { updateCommentAction } from "@/server/actions/article.action";

export default function AddComment() {

    // const submit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const author = formData.get("author");
    //     const content = formData.get("content");
    //     const articleId = formData.get("articleId");
    //     const date = new Date().toISOString();
    //     const comment = {
    //         author,
    //         content,
    //         articleId,
    //         date
    //     };
    //     await fetch("/api/comments", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(comment)
    //     });
    //     window.location.reload();
    // }
    return (
        <div className="flex gap-4" >
            <div>
                הוספת תגובה חדשה:
            </div>
            <form action={updateCommentAction}  className="flex flex-col bg-theme-bg gap-2" >
                <input type="text" placeholder="שם" name="author" className="w-40" />
                <textarea placeholder="תוכן התגובה" name="content" className="w-52 resize-none " />
                <button type="submit" >שליחה</button>
            </form></div>
    )
}
