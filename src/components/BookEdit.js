import { useState, useContext } from "react";
import BooksContext from "../context/books";


function BookEdit ({bookData, showEditHandler}) {
    const [title, setTitle] = useState(bookData.title);
    const  {editBookById} = useContext(BooksContext);
    const handleTitleChange =(event) => {
        setTitle(event.target.value);
        

    }
     const submitEditHandler = (event) =>{
        event.preventDefault();
        editBookById(bookData.id, title);
        showEditHandler(false);
     }
   
    return (
      <form onSubmit={submitEditHandler}> 
        <label>Title</label>
        <input onChange= {handleTitleChange} name= "book_title" value= {title} />
        <button>Update</button>
      </form>
    );
    
}

export default BookEdit;
