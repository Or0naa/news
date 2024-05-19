import { connectToMongo } from '@/server/DL/connectToMongo'
import React from 'react'

export default async function AllFlash() {
 await connectToMongo()

  return (
    <div>page</div>
  )
}
