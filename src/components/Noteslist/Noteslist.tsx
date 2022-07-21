import { copyFileSync } from 'fs';
import React from 'react';
import { INotes } from '../../Models/Notes.model';
import Notes from '../Notes/Notes';


interface INotelist {
  note: INotes[],
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
}

const Noteslist:React.FC<INotelist> = ({note, setNotes}) => {

 const handleDelete =(id:string)=>{
    setNotes(note.filter((val)=> val.id !== id))
 }
  
  const notesRender = ():JSX.Element[] => {
    return note.map((val)=>{
        return <Notes key={val.id} note={val} handleDelete={handleDelete}/>
    })
  }
  
  return (
    <>
     <div>{notesRender()}</div>
    </>
  )
}

export default Noteslist;