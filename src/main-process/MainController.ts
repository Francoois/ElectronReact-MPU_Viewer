import {BrowserWindow} from "electron";

export default function(mainWindow:BrowserWindow):any {

    let instance:MainController;

    class MainController {
        private mainWindow: BrowserWindow;

        constructor(mainWindow:BrowserWindow) {
            //init Context
            this.mainWindow = mainWindow;
            console.log("Created MainController");
        }
    }

    function getInstance(mainWindow:BrowserWindow) {
        if(instance === null){
            instance = new MainController(mainWindow);
        }
        return instance;
    }

    return getInstance(mainWindow);
}