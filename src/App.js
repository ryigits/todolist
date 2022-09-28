import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
    const [notes, setNotes] = useState([]);

    return (
        <div className="App">
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
    function addNote(newNote) {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    }
    function deleteNote(id) {
        setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
    }
}

export default App;
