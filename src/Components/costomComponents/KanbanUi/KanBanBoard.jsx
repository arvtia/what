import { useState, useEffect } from "react";

   const KanBanBoard = ({ KanBanData, setKanBanData }) => {
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

  return (
    <div className="w-full p-2 bg-neutral-100 h-screen">
      <div className="grid grid-cols-3 gap-2">
        {/* To Do Column */}
        <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
          <p className="text-start px-2 py-1 bg-neutral-100 rounded-sm w-full font-mono">
            To Do
          </p>
          <div
            className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "toDo")}
          >
            {todoCards.map((item) => (
              <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  className="w-full items-center flex justify-between gap-2  px-2 py-1 hover:bg-white bg-neutral-50 rounded-md shadow-sm cursor-move"
               >
                  <p>{item.text}</p>
                  <i className="bi bi-trash px-2 py-1 hover:bg-red-50 rounded-md cursor-pointer" onClick={()=>handleDeleteItem(item.id)}></i>
               </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
          <p className="text-start font-mono px-2 py-1 bg-neutral-100 rounded-sm w-full">
            In Progress
          </p>
          <div
            className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "inProgress")}
          >
            {
               inProgressCards.map((item) => (
                  <div
                     key={item.id}
                     draggable
                     onDragStart={(e) => handleDragStart(e, item.id)}
                     className="w-full items-center flex justify-between gap-2  px-2 py-1 hover:bg-white bg-neutral-50 rounded-md shadow-sm cursor-move"
                  >
                     <p>{item.text}</p>
                     <i className="bi bi-trash px-2 py-1 hover:bg-red-50 rounded-md cursor-pointer" onClick={()=>handleDeleteItem(item.id)}></i>
                  </div>
               ))
            }
          </div>
        </div>

        {/* Done Column */}
        <div className="w-full rounded-md bg-white h-full p-2 space-y-2">
          <p className="text-start font-mono px-2 py-1 bg-neutral-100 rounded-sm w-full">
            Done
          </p>
          <div
            className="space-y-2 px-1 py-2 mt-2 h-96 bg-neutral-100"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "Done")}
          >
            {doneCards.map((item) => (
              <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  className="w-full items-center flex justify-between gap-2  px-2 py-1 hover:bg-white bg-neutral-50 rounded-md shadow-sm cursor-move"
               >
                  <p>{item.text}</p>
                  <i className="bi bi-trash px-2 py-1 hover:bg-red-50 rounded-md cursor-pointer" onClick={()=>handleDeleteItem(item.id)}></i>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanBanBoard;