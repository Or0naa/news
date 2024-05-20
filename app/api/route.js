// app/api/articles/route.js
import { NextResponse } from 'next/server';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { createArticle } from '@/server/BL/article.service';

export const GET = async() => {
   return NextResponse.json({success: true})
}


export async function POST(req) {
  try {
    const body = await req.json();
    await connectToMongo();
    const article = await createArticle(body);
    return NextResponse.json({ success: true, article }, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Error creating article' }, { status: 500 });
  }
}
