import React from 'react'
import { INotes } from '../../Models/Notes.model';
import {Card, Button}   from 'react-bootstrap';

interface INotesprop {
    note: INotes,
    handleDelete: (id:string) => void
}

const Notes:React.FC<INotesprop> = ({note, handleDelete}) => {

  return (
    <>
    <h2>Notes</h2>
    <div className="mb-3">
        <Card style={{backgroundColor: note.color }}>
        <Card.Body>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>
            {note.text}
            </Card.Text>
            <Card.Subtitle className="text-mutated">{note.date}</Card.Subtitle>
            <Button className="mt-3" variant="danger" onClick={()=>{handleDelete(note.id)}}>Delete</Button>
        </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Notes