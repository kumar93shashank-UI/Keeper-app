import React from "react";
import DeleteIcon from '@material-ui/icons/DeleteForever';
import Fab from '@material-ui/core/Fab';
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
      <Fab onClick={DeleteNote}><DeleteIcon/></Fab>
    </div>
  )
}
export default Notes;