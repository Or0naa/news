import React from 'react'
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getArticleById } from '@/server/BL/article.service';


export default async function Article({ params }) {

  await connectToMongo()
  const article = await getArticleById(params.articleId)
  

  return (
    <div>
      {article ? (
        <div dir="auto" className="container max-w-96 mx-auto px-4">
          <article>
            <header>
              <h1 className="text-2xl font-bold text-gray-800">{article.title}</h1>
              <p className="text-lg text-gray-600">{article.subtitle}</p>
              <img src={article.image} alt={article.title} />
              <p>{article.quote}</p>
              <p>כתב/ה {article.editor} בתאריך {new Date(article.date).toLocaleDateString()}</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
            <footer>
              <ul className="flex flex-wrap">
                {article.tags.map(tag => (
                  <li key={tag} className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-full">{tag}</li>
                ))}
              </ul>
              {article.comments.map(comment => (
                <div key={comment.date} className="border-t border-gray-300 pt-4 mt-4">
                  <p><strong>{comment.author}</strong> - {new Date(comment.date).toLocaleString()}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </footer>
          </article>
        </div>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
}