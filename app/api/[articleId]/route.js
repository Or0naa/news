import { NextResponse } from 'next/server';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { createArticle, updateArticle } from '@/server/BL/article.service';

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

// You may want to also implement a GET handler for fetching the article by ID
export const GET = async (req, { params }) => {
  try {
    await connectToMongo();
    const { articleId } = params;
    const article = await getArticleById(articleId);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, article });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Error fetching article' }, { status: 500 });
  }
};
