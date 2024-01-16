import "./styles.css";
import { useState } from "react";
export default function App() {
    const [newItem, setNewItem] = useState("");
    const [toDos, setToDos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        setToDos([
            ...toDos,
            { id: crypto.randomUUID(), title: newItem, completed: false },
        ]);
    }

    console.log(toDos);
    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="formRow">
                    <label htmlFor="item">NewItem</label>
                    <input
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        type="text"
                        id="item"
                    />
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">Todo List</h1>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-danger">Delete</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
        </>
    );
}
