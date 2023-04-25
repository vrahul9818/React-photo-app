import React from "react";
import { DataContext } from "./context";
import { useContext } from "react";
import "./front.css"

const Bookmark = () =>{
    const { bookmarks, setBookmarks } = useContext(DataContext);
    console.log(bookmarks);


  


    return(<>
    <h1>BookMarked Image</h1>
    <div className="image-grid">
    {
        bookmarks.map((photo) => (
          <div key={photo.id}>
            <div id="imContain">
         
            <img
              className="image-item"
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={photo.title}
            />
            </div>
          </div>
        ))}

    </div>
    
      
   
    </>)

}

export default Bookmark
