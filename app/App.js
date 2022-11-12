import { NotePagesController } from "./Controllers/NotePagesControler.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  notePagesController = new NotePagesController
}

window["app"] = new App();
