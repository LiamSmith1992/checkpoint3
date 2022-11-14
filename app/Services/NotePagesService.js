import { appState } from "../AppState.js"
import { NotePagesController } from "../Controllers/NotePagesControler.js"
import { Notes } from "../Models/NotePages.js"
import { saveState } from "../Utils/Store.js"





class NotePagesService {


  createNewNote(noteData) {
    const newNote = new Notes(noteData)
    appState.notes = [...appState.notes, newNote]
    appState.activeNote = newNote
    saveState('notes', appState.notes)
  }

  setActive(id) {
    const activeNote = appState.notes.find(n => n.id == id)
    appState.activeNote = activeNote
  }

  saveNotes(newNotes) {
    let activeNote = appState.activeNote
    activeNote.entry = newNotes
    activeNote.dateUpdated = new Date
    //update the updated at
    appState.emit('activeNote')
    saveState('notes', appState.notes)
    appState.total = appState.total
  }

  deleteNotes(notesId) {

    let newArr = appState.notes.filter(n => n.id != notesId)
    appState.notes = newArr
    appState.notes = appState.notes
    console.log('array', appState.notes)
    saveState('notes', appState.notes)
  }

}










export const notePagesService = new NotePagesService()