import { getArticles } from '@/server/BL/article.service'
import { searchArticles } from '@/server/DL/controllers/article.controller'
import React from 'react'

export default async function page({searchParams}) {
    const results = await getArticles({ $text: { $search: searchParams.query } });
    return (
    <div>
            {JSON.stringify(results)}
    </div>
  )
}
