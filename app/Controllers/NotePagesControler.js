import { appState } from "../AppState.js";
import { Notes } from "../Models/NotePages.js";
import { notePagesService } from "../Services/NotePagesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";




function _drawStartPage() {
  // console.log("Starting Template:", Notes.StartingTemplates/())
  appState.total = appState.notes.length
  setHTML('start-page', Notes.StartingTemplate())
}





function _drawNotes() {
  let notes = appState.notes
  let template = ''
  console.log('drawing folder', notes);
  notes.forEach(n => template += n.NotesFolder)
  console.log('controller', template);
  setHTML('notes-folder', template)
}


function _drawActiveNote() {
  let activeNote = appState.activeNote
  setHTML('start-page', activeNote.NoteTemplate)
}

// function _drawTotal() {
//   let total = appState.total
//   let notesArr = appState.notes
//   total += notesArr.length + 1
// }






export class NotePagesController {


  constructor() {
    // appState.on('notes', _drawTotal)
    // _drawTotal
    _drawNotes()
    _drawStartPage()
    // _drawNotes()

    appState.on('activeNote', _drawActiveNote)
    appState.on('activeNote', _drawNotes)
    appState.on('notes', _drawNotes)
    appState.on('notes', _drawStartPage)
  }



  // drawNotes() {
  //   let template = ''
  //   appState.notes.forEach(n => template += n.NoteTemplate)
  //   console.log('controller', template);
  //   setHTML('start-page', template)
  // }

  createNewNote() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData)
    notePagesService.createNewNote(formData)

    form.reset()

  }

  setActive(id) {
    notePagesService.setActive(id)
  }

  saveNotes() {
    let newNotes = document.querySelector('.saver')
    console.log(newNotes.value);
    notePagesService.saveNotes(newNotes.value)
  }

  async deleteNotes(notesId) {
    if (await Pop.confirm('Delete this note?')) {
      notePagesService.deleteNotes(notesId)
      console.log('lookingforid', notesId)
    }
  }
}