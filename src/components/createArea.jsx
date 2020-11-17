import React,{useState} from "react";
import "./styles.css"

function CreateArea(props){
  const {addNote}=props;
  const [ note,setNote ]=useState({
    title:"",
    content:""
  });
const valueChange=(e)=>{
  const {name,value}=e.target;
  setNote(prevNote=>{
    return{
      ...prevNote,
      [name]:value
    }   
  })
}
const submitNote=(e)=>{
  e.preventDefault();
  addNote(note)
  setNote({
    title:"",
    content:""
  })

}
  return(
    <div>
    <form>
      <input 
        name="title" 
        value={note.title}
        placeholder="Title"
        onChange={(e)=>valueChange(e)}
      />

      <textarea
        name="content" 
        value={note.content}
        placeholder="Take a note ..." 
        rows={3}
        onChange={(e)=>valueChange(e)}
      />
      <button onClick={(e)=>submitNote(e)}>Add</button>
    </form>
    </div>
  )
}

export default CreateArea;