import { connectToMongo } from '@/server/DL/connectToMongo'
import React from 'react'
import { getRandomAd } from '@/server/BL/ad.service'
import Link from 'next/link'

export default async function Ad() {
  await connectToMongo();
  const randomAd = await getRandomAd();

  return (
    <Link href={randomAd.link} target='_blank'>
      <div dir="auto" className="flex gap-2 items-center justify-center p-2 rounded-xl ">
        <img className='h-20 max-w-96 object-cover rounded-lg' src={randomAd.image} alt="randomAd" />
        <div className="text-gray-800 flex flex-col">
          <div className="text-l font-bold text-center mb-2">{randomAd.title}</div>
          {randomAd.content.map((paragraph, index) => (
            <p key={index} className="mb-2 text-lg text-center">{paragraph}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}