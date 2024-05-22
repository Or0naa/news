import React from 'react'
import { getNotYetPublishedArticles, getAllArticles } from '@/server/BL/article.service'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default async function Admin() {
  await connectToMongo()
  const articles = await getNotYetPublishedArticles()
  console.log("articles", articles)


  return (
    <div dir="auto" className='bg-theme-bg text-theme-accent p-4 flex gap-4 sticky top-0 left-0 w-full z-10'>
      {articles ? <div className='flex gap-4'>
        {articles.map(article => (
          <div key={article._id} className='flex flex-col border-2 border-x-theme-light p-2 rounded-lg shadow-xl'>
            <h2 className='font-bold'>כותרת:</h2>
            <p>{article.title}</p>
            <p className='font-semibold'>כותרת משנה:</p>
            <p>{article.subtitle}</p>
            <p className='font-semibold'>מאת:</p>
            <p>{article.editor}</p>
            <p className='font-semibold'>תאריך:</p>

            <p>{new Date(article.date).toLocaleDateString()}</p>
            <details>
              <summary className='font-semibold'>תוכן</summary>
              {article.content}
            </details>
            <p className='font-semibold'>תמונה:</p>

            <img src={article.image} alt={article.title} />
            <p>{article.quote}</p>
            <div className='flex gap-4'>

              <form action="">
                < button > אישור</button>
              </form>
              <form action="">
                < button> מחיקה</button>
              </form>
            </div>

          </div>)

        )}

      </div> : <p>No articles yet</p>
      }

    </div >
  )
}
