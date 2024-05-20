import React from 'react'
import { getAllFlashes } from '@/server/BL/flash.service'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default async function AllFlash() {
  await connectToMongo()
  const flashes = await getAllFlashes()


  return (
    <div className="flex flex-wrap gap-6 p-6 bg-theme-accent" dir='auto'>
      {flashes.map((flash) => (
        <div key={flash.id} className=" bg-theme-dark rounded-lg p-4 w-72">
          <h1 className="text-lg font-semibold mb-2 text-theme-light  justify-center flex">{flash.title}</h1>
          <p className="text-theme-bg mb-2  text-center ">{flash.subtitle}</p>
          <p className="text-theme-accent mb-2 justify-center flex">{new Date(flash.date).toLocaleDateString()}</p>

          <p className="text-theme-bg text-center">{flash.content}</p>
          <p className="text-theme-accent justify-center flex">מאת: {flash.editor}</p>
        </div>
      ))}
    </div>
  )
}