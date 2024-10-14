const path = require('path');

const {app, BrowserWindow} = require('electron');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Поздравительные Карточки',
        width: 500,
        height: 800,
    });

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(()=>{
    createMainWindow();
});