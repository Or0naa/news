import { connectToMongo } from '@/server/DL/connectToMongo'
import React from 'react'
import { getAllAds } from '@/server/BL/ad.service'
import Link from 'next/link'

export default async function Ad() {

  await connectToMongo()  
  const ads = await getAllAds()

return (

  <div className="overflow-x-auto p-4 flex flex-nowrap gap-2 " dir="rtl"  >
  {ads.map((ad) => (
    <div key={ad.id} dir="auto" className="bg-gray-200 rounded-lg p-6 flex-shrink-0">
      <Link href={ad.link} target='_blank' className="text-l font-semibold mb-2 hover:underline">{ad.title}</Link>
      <img className='h-10 w-10 object-contain' src={ad.image} alt="ad" />
      <div className="text-gray-800 mb-2">
        {ad.content.map((paragraph, index) => (
          <p key={index} className="mb-2 text-s">{paragraph}</p>
        ))}
      </div>
    </div>
  ))}
</div>
)
}
