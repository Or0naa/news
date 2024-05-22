"use client"
import React from 'react'

export default function FlashNavContent({ flashes }) {
  return (
    <>
     <div id="flash-container" key={flashes.id}
    className="text-theme-accent min-h-36 flex flex-col gap-1 p-2 items-center bg-theme-light rounded-lg border-2 border-theme-dark">
     {flashes.slice(0, 4).map((flash) => (
       <div key={flash.id} className="flash-item w-full flex flex-col items-center gap-1">
         {flash.title}
       </div>
     ))}
   </div>
   <style jsx>{`
     @keyframes fadeInUp {
       from {
         opacity: 0;
         transform: translateY(20px);
       }
       to {
         opacity: 1;
         transform: translateY(0);
       }
     }

     .fade-in-up {
       animation: fadeInUp 0.5s ease-in-out;
     }
   `}</style>
   <script
     dangerouslySetInnerHTML={{
       __html: `
   (function() {
     const flashes = ${JSON.stringify(flashes)};
     let index = 0;
     const intervalId = setInterval(() => {
       const flashContainer = document.getElementById('flash-container');
       if (flashContainer) {
         index += 1;
         if (index >= flashes.length) {
           index = 0;
         }
         const newFlashes = flashes.slice(index, index + 4);
         flashContainer.innerHTML = newFlashes.map(flash => \`
           <div key=\${flash.id}
            class="flash-item fade_in_up w-full flex flex-col items-center gap-1">
             \${flash.title}
           </div>
         \`).join('');
       }
     }, 3000);
   })();
 `,
     }}
   />
 </>
  )
}
