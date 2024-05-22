import { NextResponse } from 'next/server';
import { createArticleService } from '@/server/BL/article.service';
import { connectToMongo } from '@/server/DL/connectToMongo';

export const POST = async (req) => {
  const fd = new URLSearchParams(await req.text());
  const articleData = Object.fromEntries(fd.entries());

  try {
    await connectToMongo();
    const newArticleFromDb = await createArticleService(articleData);
    return NextResponse.redirect(`/article/${newArticleFromDb._id}`);
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ message: 'Error creating article' }, { status: 500 });
  }
};