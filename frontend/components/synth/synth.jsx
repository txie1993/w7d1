import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component{
  constructor(props){
    super(props);
    this.notes = this.noteArray();
    // this.noteKeys = this.noteKeyArray();
  }

  noteArray(){
    return NOTE_NAMES.map((key) => new Note(TONES[key], key));
  }

  // noteKeyArray(){
  //   return NOTE_NAMES.map((key) => new NoteKey(key, false));
  // }


  render() {
    this.playNotes();
    return(
      <ul>
        {this.notes.map((note, idx) => {
          return (<NoteKey note={note.key} pressed={((this.props.notes.includes(note.key)) ? true : false)} key={idx}/>
      )}
    )}
      </ul>
    );
    }

  onKeyDown(e) {
    // console.log("down");
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    // console.log("up");
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    // console.log("mount");
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes(){
    this.notes.forEach(note => {
      if (this.props.notes.includes(note.key))
      {note.start();}
      else { note.stop();}

  });}
}
export default Synth;
