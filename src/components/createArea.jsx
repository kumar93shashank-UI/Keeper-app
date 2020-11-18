import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import "./styles.css"

function CreateArea(props){
  const {addNote}=props;
  const [ note,setNote ]=useState({
    title:"",
    content:""
  });
  const [isExpanded,setExpanded]=useState(false);

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
  setExpanded(false)
}
const onExpand = () => {
  setExpanded(true)
}
  return(
    <div>
    <form className="create-note">
      { isExpanded && <input 
        name="title" 
        value={note.title}
        placeholder="Title"
        onChange={(e)=>valueChange(e)}
      />
      }
      <textarea
        name="content" 
        value={ note.content}
        placeholder="Take a note ..." 
        rows={ isExpanded ? 3 : 1 }
        onClick={onExpand}
        onChange={(e)=>valueChange(e)}
      />
      <Zoom in={isExpanded}>
        <Fab onClick={(e)=>submitNote(e)}><AddIcon/></Fab>
      </Zoom>
    </form>
    </div>
  )
}

export default CreateArea;