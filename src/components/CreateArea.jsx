import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

export default function CreateArea({ onAdd }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return { ...prevNote, [name]: value };
        });
    }
    function submitNote(event) {
        event.preventDefault();
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    }
    function expand() {
        setIsExpanded(true);
    }
    return (
        <>
            <form className="create-note">
                {isExpanded && (
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        placeholder="Title"
                        onChange={handleChange}
                    />
                )}
                <textarea
                    onChange={handleChange}
                    onClick={expand}
                    name="content"
                    value={note.content}
                    rows={isExpanded ? 3 : 1}
                    placeholder="Take a note ..."
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </>
    );
}
