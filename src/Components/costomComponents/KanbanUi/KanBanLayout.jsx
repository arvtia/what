import { useEffect, useState } from "react";
import KanBanBoard from "./KanBanBoard";

const KanBanUILayout =()=>{

   const [KanBanData, setKanBanData] = useState([]);
   const[CreatePost, setCreatePost] = useState([]);
   const[isActive, setIsActive]= useState(false);
   const [postText, setPostText] = useState('');
   const [postStatus, setPostStatus] = useState('toDo');
   
   const handleCreatePost = (e) => {
      
      e.preventDefault();
      const newPost = {
         id: Date.now().toString(),
         text: postText,
         status: postStatus
      };

      const updatedPosts = [...KanBanData, newPost];
      setKanBanData(updatedPosts);
      localStorage.setItem('kanban-posts', JSON.stringify(updatedPosts));
      setIsActive(false);
      

      // Reset form and close modal
      setPostText('');
      setPostStatus('toDo');
      setIsActive(false);

   };

   useEffect(() => {
      const savedPosts = localStorage.getItem('kanban-posts');
      if (savedPosts) {
         setCreatePost(JSON.parse(savedPosts));
      }
   }, []);

   useEffect(() => {
   const savedData = JSON.parse(localStorage.getItem('kanban-posts'));
   if (!savedData) {
      console.log('data not found')
   } else {
      setKanBanData(savedData)
   }
   }, []);


   return(
      <>
         <div className="w-full bg-neutral-100 p-2 rounded-md">
            <div className="w-full py-3 px-2 bg-neutral-100">
               <h1 className="py-1 font-mono text-neutral-800 ">Create A Post</h1>
              <button
                  onClick={() => setIsActive(true)}
                  className="text-white px-2 py-1 rounded shadow-md bg-neutral-700"
                  >
                  Create Post
               </button>

            </div>
            {/* layout for kanban */}
            <KanBanBoard KanBanData={KanBanData} setKanBanData={setKanBanData} />

            {isActive && (
               <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="w-[300px] p-4 bg-white rounded shadow-lg">
                     <form onSubmit={handleCreatePost} className="flex flex-col gap-3">
                     <input
                        type="text"
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        className="px-2 py-1 rounded-md bg-neutral-100"
                        placeholder="Enter task"
                     />
                     <select
                        value={postStatus}
                        onChange={(e) => setPostStatus(e.target.value)}
                        className="w-full rounded-md bg-neutral-100"
                     >
                        <option value="toDo">To Do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="Done">Done</option>
                     </select>
                     <button
                        type="submit"
                        className="px-2 py-1 rounded-md bg-neutral-700 text-white"
                     >
                        Create Post
                     </button>
                     <button
                        type="button"
                        onClick={() => setIsActive(false)}
                        className="text-sm text-neutral-500 hover:text-neutral-800"
                     >
                        Cancel
                     </button>
                     </form>
                  </div>
               </div>
               )}

         </div>
      </>
   )
}

export default KanBanUILayout;