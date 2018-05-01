const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file:///'+__dirname+'/index.html');
    let url = __dirname+'/src/index.html';
    console.log(url);
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
})
