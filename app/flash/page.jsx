import React from 'react'
import { getAllFlashes } from '@/server/BL/flash.service'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default function AllFlash() {
  connectToMongo()
const flashes = getAllFlashes()

  return (
    <div>
      {flashes.map((flash) => (
        <div key={flash.id}>
          <h1>{flash.title}</h1>
          <p>{flash.subtitle}</p>
          <p>{flash.content}</p>
          <p>{flash.editor}</p>
          <p>{new Date(flash.date).toDateString()}</p>
        </div>
      ))}
    </div>
  )
}
