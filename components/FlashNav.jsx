import { getAllFlashes } from '@/server/BL/flash.service';
import { connectToMongo } from '@/server/DL/connectToMongo';
import FlashNavContent from './FlashNavContent';

export default async function FlashNav() {
  await connectToMongo();

  const flashes = await getAllFlashes();

  if (!flashes || flashes.length === 0) {
    return <div>No flashes available</div>;
  }

  return (
   <FlashNavContent flashes={flashes} />
  );
}
