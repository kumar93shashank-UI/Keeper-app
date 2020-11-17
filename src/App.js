import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNotes from './components/CreateNotes';
import Notes from "./notes"

function App() {
  
  return (
    <>
    <Header/>
    {
      Notes.map((item)=>{
        return(
          <CreateNotes 
          key={item.key}
          title={item.title}
          content={item.content}
          />
        )
      })
    }
    
    <Footer/>
    </>
  );
}

export default App;
