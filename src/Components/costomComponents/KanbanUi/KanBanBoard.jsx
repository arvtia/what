import { useState, useEffect } from "react";

const KanBanBoard = ({ KanBanData, setKanBanData }) => {
   const [isActiveUpdateForm, setIsActiveUpdateForm] = useState(false);
   const [editId, setEditId] = useState(null);
   const [editText, setEditText] = useState("");
   const [editContext, setEditContext] = useState("");


   // --- Drag Handlers ---
   const handleDragStart = (e, cardId) => {
      e.dataTransfer.setData("cardId", cardId);
   };
   const handleDragOver = (e) => {
      e.preventDefault(); // allow drop
   };

   const handleDrop = (e, newStatus) => {
      e.preventDefault();
      const cardId = e.dataTransfer.getData("cardId");

      const updated = KanBanData.map((card) =>
         card.id === cardId ? { ...card, status: newStatus } : card
      );

      setKanBanData(updated);
      localStorage.setItem("kanban-posts", JSON.stringify(updated));
   };

   // --- Filter cards by status ---
   const todoCards = KanBanData.filter((card) => card.status === "toDo");
   const inProgressCards = KanBanData.filter(
      (card) => card.status === "inProgress"
   );
   const doneCards = KanBanData.filter((card) => card.status === "Done");

   const handleDeleteItem = (id) => {
      const saved = JSON.parse(localStorage.getItem("kanban-posts")) || [];
      const updated = saved.filter((card) => card.id !== id);
      localStorage.setItem("kanban-posts", JSON.stringify(updated));
      setKanBanData(updated);
   };


   const handleUpdateItem = (e) => {
      e.preventDefault();
      const saved = JSON.parse(localStorage.getItem("kanban-posts")) || [];
      const updated = saved.map((card) =>
         card.id === editId ? { ...card, text: editText, context: editContext } : card
      );
      localStorage.setItem("kanban-posts", JSON.stringify(updated));
      setKanBanData(updated);
      // reset form
      setIsActiveUpdateForm(false);
      setEditId(null);
      setEditText("");
      setEditContext("");
   };


   return (
    <div className="w-full p-2 h-screen relative">

      <div className="grid grid-cols-3 gap-2">
      {/* To Do Column */}
         <div className="w-full rounded-md bg-white h-screen p-2 space-y-2">
            <p className="text-start px-2 py-1 rounded-sm w-full font-mono">To Do</p>
            <div
               className="space-y-2 px-1 py-2 mt-2 h-96 bg-white"
               onDragOver={handleDragOver}
               onDrop={(e) => handleDrop(e, "toDo")}
            >
               {todoCards.map((item) => (
               <div
                  key={item.id}
                  className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-lg shadow-sm rounded-b-lg"
               >
                  <div
                     draggable
                     onDragStart={(e) => handleDragStart(e, item.id)}
                     className="w-full items-center flex justify-between gap-2 px-2 py-2 rounded-t-lg cursor-move"
                  >
                     <p>{item.text}</p>
                     <div className="flex gap-1">
                     <i
                        className="bi bi-trash px-2 py-1 rounded-md cursor-pointer text-red-300 hover:text-red-500"
                        onClick={() => handleDeleteItem(item.id)}
                     ></i>
                     <i
                     className="bi bi-pencil-square px-2 py-1  rounded-md cursor-pointer text-indigo-300 hover:text-indigo-500"
                     onClick={() => {
                        setEditId(item.id);
                        setEditText(item.text);
                        setEditContext(item.context || "");
                        setIsActiveUpdateForm(true);
                     }}
                     ></i>

                     </div>
                  </div>
                  {item.context && (
                     <div className="p-2">
                     <p className="text-sm text-neutral-600 font-mono">{item.context}</p>  
                     </div>
                  )}
               </div>
               ))}
            </div>
         </div>

         {/* In Progress Column */}
         <div className="w-full rounded-md bg-white h-screen p-2 space-y-2">
            <p className="text-start px-2 py-1 rounded-sm w-full font-mono">In Progress</p>
            <div
               className="space-y-2 px-1 py-2 mt-2 h-96 bg-white"
               onDragOver={handleDragOver}
               onDrop={(e) => handleDrop(e, "inProgress")}
            >
               {inProgressCards.map((item) => (
               <div
                  key={item.id}
                  className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100 rounded-t-lg shadow-sm rounded-b-lg"
               >
                  <div
                     draggable
                     onDragStart={(e) => handleDragStart(e, item.id)}
                     className="w-full items-center flex justify-between gap-2 px-2 py-2 rounded-t-lg cursor-move"
                  >
                     <p>{item.text}</p>
                     <div className="flex gap-1">
                     <i
                        className="bi bi-trash px-2 py-1 rounded-md cursor-pointer text-red-300 hover:text-red-500"
                        onClick={() => handleDeleteItem(item.id)}
                     ></i>
                     <i
                        className="bi bi-pencil-square px-2 py-1 rounded-md cursor-pointer text-indigo-300 hover:text-indigo-500"
                        onClick={() => {
                           setEditId(item.id);
                           setEditText(item.text);
                           setEditContext(item.context || "");
                           setIsActiveUpdateForm(true);
                        }}
                     ></i>
                     </div>
                  </div>
                  {item.context && (
                     <div className="p-2">
                     <p className="text-sm text-neutral-600 font-mono">{item.context}</p>
                     </div>
                  )}
               </div>
               ))}
            </div>
         </div>

         {/* Done Column */}
         <div className="w-full rounded-md bg-white h-screen p-2 space-y-2">
            <p className="text-start px-2 py-1 rounded-sm w-full font-mono">Done</p>
            <div
               className="space-y-2 px-1 py-2 mt-2 h-96 bg-white"
               onDragOver={handleDragOver}
               onDrop={(e) => handleDrop(e, "Done")}
            >
               {doneCards.map((item) => (
               <div
                  key={item.id}
                  className="bg-gradient-to-br from-green-300 via-green-200 to-green-100 rounded-t-lg shadow-sm rounded-b-lg"
               >
                  <div
                     draggable
                     onDragStart={(e) => handleDragStart(e, item.id)}
                     className="w-full items-center flex justify-between gap-2 px-2 py-2 rounded-t-lg cursor-move"
                  >
                     <p>{item.text}</p>
                     <div className="flex gap-1">
                     <i
                        className="bi bi-trash px-2 py-1 rounded-md cursor-pointer text-red-300 hover:text-red-500"
                        onClick={() => handleDeleteItem(item.id)}
                     ></i>
                     <i
                        className="bi bi-pencil-square px-2 py-1  rounded-md cursor-pointer text-indigo-300 hover:text-indigo-500"
                        onClick={() => {
                           setEditId(item.id);
                           setEditText(item.text);
                           setEditContext(item.context || "");
                           setIsActiveUpdateForm(true);
                        }}
                     ></i>
                     </div>
                  </div>
                  {item.context && (
                     <div className="p-2">
                     <p className="text-sm text-neutral-600 font-mono">{item.context}</p>
                     </div>
                  )}
               </div>
               ))}
            </div>
         </div>
      </div>   

         {isActiveUpdateForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
               <div className="w-[350px] rounded-lg ring-neutral-400 ring-1 bg-white shadow-2xl">
                  <form onSubmit={handleUpdateItem} className="p-3 space-y-3">
                  <input
                     type="text"
                     className="px-2 py-2 w-full border rounded"
                     value={editText}
                     onChange={(e) => setEditText(e.target.value)}
                  />
                  <textarea
                     className="px-2 py-2 h-64 bg-neutral-100 shadow-inner w-full border rounded"
                     value={editContext}
                     onChange={(e) => setEditContext(e.target.value)}
                     placeholder="Add context..."
                  />
                  <div className="flex justify-end gap-2">
                     <button
                        type="button"
                        onClick={() => setIsActiveUpdateForm(false)}
                        className="px-3 py-1 rounded bg-neutral-200 hover:bg-neutral-300"
                     >
                        Cancel
                     </button>
                     <button
                        type="submit"
                        className="px-3 py-1 rounded bg-neutral-600 text-white hover:bg-neutral-700"
                     >
                        Update
                     </button>
                  </div>
                  </form>
               </div>
            </div>
            )}


    </div>
  );
};

export default KanBanBoard;