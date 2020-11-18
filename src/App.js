import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes"
import CreateArea from "./components/createArea";

function App() {
  const [notes,setNotes]=useState([]);
  const AddNote=(note)=>{
    setNotes(prevNote=>{
      return[
        ...prevNote,
        note
      ]
    })
  }
  const DeleteNote=(id)=>{
    setNotes(prevNotes=>{
      return prevNotes.filter((item,index)=>{
        return index!==id
      })
    })
  }
  return (
    <>
    <Header/>
    <CreateArea addNote={AddNote}/>
    {
      notes.length>0?
      notes.map((item,index)=>{
        return(
        <Notes deleteNote={DeleteNote} key={index} id={index} title={item.title} content={item.content}/>
        )
      }):<p>No notes to display</p>}
    <Footer/>
    </>
  );
}

export default App;
