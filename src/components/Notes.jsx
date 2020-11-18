import React from "react";
import "./styles.css"

function Notes(props){
  const { title,content,id,deleteNote } =  props;
  const DeleteNote = ()=>{
      deleteNote(id)
  }
  return(
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={DeleteNote}>DELETE</button>
    </div>
  )
}
export default Notes;