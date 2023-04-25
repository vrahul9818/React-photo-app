import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/front.css";
import { useContext } from "react";
import { DataContext } from "./context";

const Loadimages = (props) => {
  const [state, setState] = useState([]);
  const { bookmarks, setBookmarks } = useContext(DataContext);
  console.log(bookmarks,"n");



  useEffect(() => {
    const searchImages = async () => {
      try {
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7b92fcc43d088cd8077e13950e4cd874&per_page=10&format=json&nojsoncallback=1`;
        if (props.query) {
          url += `&text=${props.query}`;
          const { data } = await axios.get(url);
          setState(data.photos.photo);
        } else {
          setState([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchImages();
  }, [props.query]);

  const handelbookmark =(photo)=>{
    console.log(photo)
    setBookmarks([...bookmarks,photo])
    console.log(bookmarks);
    alert("your image is bookmarked")

  }

  return (
    <div className="image-grid">
      {props.query &&
        state.map((photo) => (
          <div key={photo.id}>
            <div id="imageContainer">
              <div>click on image to book mark</div>
            <img
            onClick={()=>{handelbookmark(photo)}}
              className="image-item"
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={photo.title}
            />
            </div>
          </div>
        ))}
    </div>
  );
  
};

export default Loadimages;
