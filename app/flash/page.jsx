import React from 'react'
import { getAllFlashes } from '@/server/BL/flash.service'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default function AllFlash() {
  connectToMongo()
const flashes = getAllFlashes()

  return (
    <div>
      {Object.keys(flashes).map(flash => 
      <div className='text-red-200'>
        {flash.title}
        </div>)}
    </div>
  )
}
