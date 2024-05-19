

import { getAllFlashes } from '@/server/BL/flash.service';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function FlashNav() {

  await connectToMongo()
  const flashes = await getAllFlashes()

  return (
    <div className="flex">
    <div className="flex-1 mr-2">
      {flashes.map((flash) => (
        <div key={flash.id} className="mb-4">
          {flash.title}
        </div>
      ))}
    </div>
  </div>
);
}