import { getAllArticles } from '@/server/BL/article.service';
import { connectToMongo } from '@/server/DL/connectToMongo';
import Link from 'next/link';
import React from 'react'

export default async function AllArticles() {
  await connectToMongo()

const articles = await getAllArticles()

  return (
    <div className="bg-theme-bg py-8">
      <div className="max-w-5xl flex gap-4 mx-auto">
        {articles.map((article) => (
          <div dir="auto" key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
            <img src={article.image} alt="article" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.subtitle} / {article.editor}</p>
              <p className="text-gray-400 mb-4">{new Date(article.date).toDateString()}</p>
              <p className="text-gray-800 mb-4">{article.quote}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 py-1 px-2 rounded-md text-sm text-gray-600 cursor-pointer hover:bg-primary-100">{tag}</span>
                ))}
              </div>
              <Link href={`/articles/${article.id}`} className="text-blue-500 mt-4 block">
                קרא עוד <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block -mt-1 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.707 4.293a1 1 0 0 1 1.414 1.414L4.414 10l2.707 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3zm8 0a1 1 0 0 1 1.414 1.414L12.414 10l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
