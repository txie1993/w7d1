import React from 'react';

const NoteKey = ({note, pressed}) => {
  let status = (pressed ? "pressed" : "unpressed");
  return (
    <li className={status}>{note}</li>
  );
};


export default NoteKey;
