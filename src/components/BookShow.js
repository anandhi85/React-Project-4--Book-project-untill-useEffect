import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow ({ bookData}) {
const { deleteBookById } = useContext(BooksContext)
  
const [showEdit, setShowEdit] = useState (false);



  const bookDeleteHandler = () => {
    deleteBookById(bookData.id);
  }

  const bookEditHandler = () =>{
    setShowEdit(!showEdit);
  }
 
   const showEditHandler = (status) => {
    setShowEdit (status);
   }

  let content = <h5 className="card-title"> {bookData.title}</h5>;

  if (showEdit) {
    content = <BookEdit bookData= {bookData} showEditHandler= {showEditHandler}/>
  }
    return (
        
        <div className="container">
        <div className="row">
        <div className="col">
        <div className="card" style= {{width: "18rem"}}> 
        <div className="d-flex flex-row-reverse">
        <button onClick={bookDeleteHandler} type="button" className="btn-close" aria-label="Close"></button>
        <button onClick={bookEditHandler} type="button" className="btn-edit bi-pencil" aria-label="Edit"></button>
</div>
       
<img src= "https://picsum.photos/300/200" className="card-img-top" alt={bookData.title} />
<div className="card-body">
  {content}
  

</div>
</div>
        </div>
        
        </div>
        </div>
    );
    
}

export default BookShow;
