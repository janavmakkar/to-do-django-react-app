import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { useNavigate } from 'react-router-dom';

export default function NotesPage() {

    let history =useNavigate()
    let { id } = useParams();
    let [note, setNote] = useState(null)
    useEffect(() => { getNote() }, [id])

    let getNote = async () => {
        let res = await fetch(`/api/notes/${id}`)
        let data = await res.json()
        setNote(data)
    }
    
    let createNote = async () => {
        fetch(`/api/notes/create`, {
            method: "POST",
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let saveNote = async () => {
        if (id==='new') return
        fetch(`/api/notes/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let saveHandle = () => {
        if (id !== 'new' && !note.body) {
            deleteHandle()
        } else if (id !== 'new') {
            saveNote() 
        } else if (id === 'new') {
            createNote()
        }
        history("/")
        // <Redirect to='/profile' />
    }

    let deleteHandle = () => {
        console.log('deleteHandle');
        fetch(`/api/notes/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-type':'application/json'
            }
        })
        history('/')
    }

    return (
        <div className='note'>
            <div className="note-header">
                <h3>
                    <ArrowLeft onClick={saveHandle} />
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteHandle}>Delete</button>
                ) : (
                    <button onClick={saveHandle}>Done</button>
                )}
            </div>
            <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    );
}

