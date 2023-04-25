import React, { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [bookmarks, setBookmarks] = useState([]);

  return (
    <DataContext.Provider value={{ bookmarks, setBookmarks}}>
      {props.children}
    </DataContext.Provider>
  );
};
