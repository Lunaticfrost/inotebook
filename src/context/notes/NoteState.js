import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "64c2411c0362cf547ce415760",
          "user": "64c123c15b44fc63f67a106f",
          "title": "My Title",
          "description": "Do your work",
          "tag": "personal",
          "date": "2023-07-27T10:04:12.131Z",
          "__v": 0
        },
        {
          "_id": "64c282c6d7f7a538dfa7eeedc",
          "user": "64c123c15b44fc63f67a106f",
          "title": "My Title",
          "description": "Do your work",
          "tag": "personal",
          "date": "2023-07-27T14:44:22.797Z",
          "__v": 0
        },
        {
          "_id": "64c282c7d7f7a538df7eeeede",
          "user": "64c123c15b44fc63f67a106f",
          "title": "My Title",
          "description": "Do your work",
          "tag": "personal",
          "date": "2023-07-27T14:44:23.842Z",
          "__v": 0
        }
      ]

      const[notes,setNotes] = useState(notesInitial);
 
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;