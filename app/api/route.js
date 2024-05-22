import { NextResponse } from "next/server"
import { connectToMongo } from '@/server/DL/connectToMongo';
import { createArticle, updateArticle } from '@/server/BL/article.service';

export const GET = async() => {
   return NextResponse.json({success: true})
}

// export const POST = async (req) => {
//    const body = await req.json()
//    return NextResponse.json({success: true, body})
// }

export const POST = async (req, { params }) => {
   try {
     const body = await req.json();
     const { articleId } = params;
 
     await connectToMongo();
 
     let article;
     if (articleId) {
       // Update existing article
       article = await updateArticle(articleId, body);
     } else {
       // Create new article
       article = await createArticle(body);
        }
     return NextResponse.json({ success: true, article }, { status: 201 });
   } catch (error) {
     console.error('Error handling article:', error);
     return NextResponse.json({ error: 'Error handling article' }, { status: 500 });
   }
 };
 