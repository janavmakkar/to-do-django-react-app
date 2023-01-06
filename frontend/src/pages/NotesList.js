import React,{useState,useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

export default function NotesList() {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes();
    }, [])

    let getNotes = async () => {

        const res = await fetch('/api/notes/')
        const data = await res.json()
        // console.log('Data: ', data)
        setNotes(data)
    }

    return (
        <div className='notes'>
            <div className="notes-header">
                <h2 className='notes-title'>&#9872; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className='note-list'>
                {notes.map((note, index) => { 
                   return <ListItem note={note} key={index } />
                })}
            </div>
            <AddButton />
        </div>

        )
}