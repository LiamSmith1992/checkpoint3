import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";





export class Notes {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.dateCreated = data.dateCreated || new Date
    this.dateUpdated = data.dateUpdated || new Date
    this.entry = data.entry || 'Type here'
    this.color = data.color
    this.total = data.total
  }


  static StartingTemplate() {
    return /*html*/`
  
   
    <section class="row">
      <div class="  text-primary col-2">Total Notes = ${appState.total}</div>
      <div class="col-3"></div>
      <div class="col-md-6 col-12 d-flex justify-content-">
  
        <img class=" img-fluid rounded"
          src="https://i.pinimg.com/originals/3d/1d/47/3d1d47ee900972638296b3bc79f4c894.png" alt="">
      </div>
      <div class="col-2"></div>
    </section>
  </div>
  `
  }

  get NotesFolder() {
    return/*html*/`
     
    <div class="d-flex">
          <p class="selectable" onclick="app.notePagesController.setActive('${this.id}')">${this.title}</p><i class="mdi mdi-circle" style="color:${this.color}"></i>
     </div>
      
    `
  }

  get NoteTemplate() {
    return /*html*/`
    <div class="col-md-3 card bg-warning mt-2 ms-2">
    <button class="btn-danger btn mdi mdi-delete-circle-outline" title="delete Note"
    onclick="app.notePagesController.deleteNotes('${this.id}')"></button>
    <h1 class="p-1">${this.title}<i class="mdi mdi-circle" style="color:${this.color}"></i></h1>
    <h5 class="p-2">${this.dateCreated.toLocaleString()}</h5>
    <h5 class="p-2">${this.dateUpdated.toLocaleString()}</h5>
  </div>
  <div class="col-md-8 mt-2">
    <textarea class="saver rounded" name="" id="" cols="70" rows="50">${this.entry}</textarea>
  </div>
`
  }

  get theDate() {
    return this.dateCreated.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
  }




  get ActiveTemplate() {
    return `
  
  `
  }







}

