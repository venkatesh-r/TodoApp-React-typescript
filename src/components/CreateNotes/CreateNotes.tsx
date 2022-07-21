import * as React from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { INotes } from '../../Models/Notes.model';

interface ICreateNotesProps {
  note: INotes[],
  setNotes: React.Dispatch<React.SetStateAction<INotes[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({note, setNotes}) => {
 
 const [error, setError] = React.useState<string>('');
 const titleRef = React.useRef<HTMLInputElement | null>(null);
 const textRef = React.useRef<HTMLTextAreaElement | null>(null);
 const colorRef = React.useRef<HTMLInputElement | null>(null);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    if(titleRef.current?.value === '' || textRef.current?.value === '') {
        return setError("Please fill the fields");
    }
    setError("");
    setNotes([...note   , {
        id: (new Date).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date).toString()
    }]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value ="";
 }

  return (
    <>
     <h2>Create Notes</h2>
     {error ? <Alert variant="danger">
         {error}
     </Alert> : ""}
     <Form className='mt-3 mb-3' onSubmit={(e)=>{handleSubmit(e)}}>
        <Form.Group className='mb-3' controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder='Enter title for note' ref={titleRef}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formBasicText">
            <Form.Label>Text</Form.Label>
            <Form.Control as="textarea" placeholder='Enter your notes' ref={textRef}></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3'>
            <Form.Label htmlFor="colorInput">Text</Form.Label>
            <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" ref={colorRef} placeholder='Enter your color'></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
     </Form>
    </>
  );
};

export default CreateNotes;
