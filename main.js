const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

app.setName("Stopwatch-Timer");


const template = [
  {
    label: app.name,
    submenu: [
      {
        label: "Set Time",
        click: () => {
          // Add the functionality for the "Open" menu item here
        },
      },
      {
        type: "separator",
      },
      {
        label: "Exit",
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Settings",
    submenu: [
      {
        label: "Cut",
        role: "cut",
      },
      {
        label: "Copy",
        role: "copy",
      },
      {
        label: "Paste",
        role: "paste",
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About",
        click: () => {
          // Add the functionality for the "About" menu item here
        },
      },
    ],
  },
];



function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    title: "Stopwatch Timer",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      // preload: path.join(__dirname, "preload.js"),
    },
  });

  // win.webContents.openDevTools();

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  const startUrl = url.format({
    pathname: path.join(__dirname, "./app/build/index.html"),
    protocol: "file",
  });

  win.loadURL("http://localhost:3000");
}


app.whenReady().then(createWindow);
