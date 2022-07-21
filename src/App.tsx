import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import CreateNotes from './components/CreateNotes/CreateNotes';
import Noteslist from './components/Noteslist/Noteslist';
import {INotes} from './Models/Notes.model';

function App() {
  const[notes, setNotes] = useState<INotes[]>([{
    id: (new Date).toString(),
    title: 'Meetings',
    text: 'Schedule meeting with UI',
    color: '#dfdfdf',
    date: (new Date).toString()
  }])
  return (
    <>
      <Container>
        <Row>
          <div className='md-3'><CreateNotes note={notes} setNotes={setNotes}/></div> 
            <Noteslist note={notes} setNotes={setNotes}/>
        </Row>
      </Container>
    </>
  );
}

export default App;
