const Create = () =>{
    return(
        <div className="py-12 px-28">
         <div className="flex items-center justify-center gap-6">
           <input className="border border-black p-2 rounded-md w-full" type="text" placeholder="Add title" />
           <input  className="border border-black p-2 rounded-md w-full" type="number" placeholder="Price"/>
         </div>
         <div className="w-full px-5 py-10 bg-slate-400 mt-6">

         </div>
         <div className="w-full px-5 py-28 border mt-6">
    <input type="file" />
</div>
<button className="text-xl border py-2 px-12 rounded-md w-full mt-6">Upload</button>
        </div>
    )
}
export default Create;