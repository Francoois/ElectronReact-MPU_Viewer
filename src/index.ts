import { app, BrowserWindow} from 'electron';
import * as path from "path";

import MainController from "./main-process/MainController";

app.on('ready', () => {
    console.log('App is ready');

    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });

    const indexHTML = path.join(__dirname + '/index.html');
    mainWindow.loadFile(indexHTML).then(() => {
        // IMPLEMENT FANCY STUFF HERE
    });

    MainController(mainWindow);
});

// TS Electron Basis :
// https://dev.to/batajus/electron-quick-start-with-typescript-48h8