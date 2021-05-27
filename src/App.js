import React, {useEffect, useState} from 'react'
import Note from "./components/Node";
import axios from "axios";
import CarSwiper from "./components/Swiper";
import $http from "./Utils";

import 'antd/dist/antd.css';
import './css/layout.css'
import {Layout} from 'antd'

const {Header, Footer, Sider, Content} = Layout


const App = () => {
    const [images, setImages] = useState([])
    let result = [];

    useEffect(() => {
        $http.get('/api/car/1')
            .then(res => {
                res['images'].forEach(img =>
                    result.push('http://localhost:4567/' + img)
                );
                setImages(result)
            })

    }, [])

    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider width={document.documentElement.clientWidth/2}><CarSwiper test={result} /> </Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default App


// const App = () => {
//     const [notes, setNotes] = useState([])
//     const [newNote, setNewNote] = useState(
//         'a new note...'
//     )
//     const [showAll, setShowAll] = useState(true)
//
//     useEffect(() => {
//         console.log('effect')
//         axios
//             .get('http://localhost:3001/notes')
//             .then(res => {
//                 console.log('promise fulfilled')
//                 setNotes(res.data)
//             })
//     }, [])
//     console.log('render', notes.length, 'notes')
//
//     const addNote = (event) => {
//         event.preventDefault()
//         const noteObject = {
//             content: newNote,
//             date: new Date().toString(),
//             important: Math.random() < 0.5,
//             id: notes.length + 1,
//         }
//         setNotes(notes.concat(noteObject))
//         setNewNote('')
//     }
//     const handleNoteChange = (event) => {
//         console.log(event.target.value)
//         setNewNote(event.target.value)
//     }
//     const notesToShow = showAll
//         ? notes
//         : notes.filter(note => note.important)
//
//     return (
//         <div>
//             <h1>Notes</h1>
//             <div>
//                 <button onClick={() => setShowAll(!showAll)}>
//                     show {showAll ? 'important' : 'all' }
//                 </button>
//             </div>
//             <ul>
//                 {notesToShow.map(note =>
//                     <Note key={note.id} note={note}/>
//                 )}
//             </ul>
//             <form onSubmit={addNote}>
//                 <input
//                     value={newNote}
//                     onChange={handleNoteChange}/>
//                 <button type={"submit"}>save</button>
//             </form>
//         </div>
//     )
// }
//
// export default App
