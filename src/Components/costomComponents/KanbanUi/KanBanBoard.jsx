import { useEffect, useState } from "react";



const KanBanBoard =({KanBanData})=>{


   

   const todoCards = KanBanData.filter(card => card.status === 'toDo');
   const inProgressCards = KanBanData.filter(card => card.status === 'inProgress');
   const doneCards = KanBanData.filter(card => card.status === 'Done');

   

   
   return(
      <>
         <div className="w-full p-2 bg-neutral-100 h-screen">
            <div className="grid grid-cols-3 gap-2">
               <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
                  <p className="text-start px-2 py-1 bg-neutral-100 rounded-sm w-full font-mono">
                     To do List
                  </p>
                  <div className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100">
                     {
                        todoCards.map((item, idx)=>(
                           <div draggable="true" key={idx} className="w-full px-2 py-1 hover:bg-white bg-neutral-50 rounded-md">
                              <p>{item.text}</p>
                           </div>
                        ))
                     }
                  </div>

               </div>

               <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
                  <p className="text-start font-mono px-2 py-1 bg-neutral-100 rounded-sm w-full">
                     In Progress
                  </p>

                  <div className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100">
                     {
                        
                     }
                  </div>

               </div>

               <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
                  <p className="text-start font-mono px-2 py-1 bg-neutral-100 rounded-sm w-full">
                     Completed
                  </p>

                  <div className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100">
                     {
                        
                     }
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default KanBanBoard;