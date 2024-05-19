import React from 'react'
import { getAllFlashes } from '@/server/BL/flash.service'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default async function AllFlash() {
 await connectToMongo()
const flashes = await getAllFlashes()


  return (
    <div className="flex flex-wrap flex-col" dir='auto'>
    {flashes.map((flash) => (
      <div key={flash.id} className="bg-gray-200 rounded-lg p-4 m-2">
        <h1 className="text-lg font-semibold mb-2">{flash.title}</h1>
        <p className="text-gray-900 mb-2">{new Date(flash.date).toLocaleDateString()}</p>
        <p className="text-gray-700 mb-2">{flash.subtitle}</p>
        <p className="text-gray-800">{flash.content}</p>
        <p className="text-gray-600">Editor: {flash.editor}</p>
      </div>
    ))}
  </div>
  )
}