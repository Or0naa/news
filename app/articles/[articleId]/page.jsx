import React from 'react'
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getArticleById } from '@/server/BL/article.service';
import AddComment from '@/components/AddComment';
import style from './style.module.css';

export default async function Article({ params }) {
  await connectToMongo();
  const article = await getArticleById(params.articleId);
  console.log("articleid", article._id);

  return (
    <div>
      {article ? (

        <div dir="auto" className="flex flex-col md:flex-row-reverse bg-theme-bg p-8">
          <div className='flex flex-col md:w-1/3 md:mt-0 md:ml-8'>
            <img src={article.image} className='object-contain rounded-md h-64 md:h-auto order-first md:order-none' alt={article.title} />
            <div className='text-theme-dark'>{article.quote}</div>
          </div>
          <div className='flex flex-col bg-theme-bg text-theme-accent md:w-2/3 md:mr-8'>
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p className="text-lg text-theme-dark">{article.subtitle}</p>
            <div className='text-sm'>מאת {article.editor} בתאריך {new Date(article.date).toLocaleDateString()}</div>
            <div>
              <div className={`${style.articleStyle} ml-16 mt-4 mb-4`} dangerouslySetInnerHTML={{ __html: article.content }} />
              <div>
                <ul className="flex flex-wrap">
                  {article.tags.map(tag => (
                    <li key={tag} className="mr-2 mb-2 px-2 py-1 rounded-full bg-theme-dark text-theme-bg">{tag}</li>
                  ))}
                </ul>
                {article.comments.map(comment => (
                  <div key={comment.date} className="border-t pt-4 mt-4 border-theme-dark">
                    <p><strong>{comment.author}</strong> - {new Date(comment.date).toLocaleString()}</p>
                    <p>{comment.content}</p>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4 border-theme-dark">
                  <AddComment articleId={article._id.toString()}/></div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
}