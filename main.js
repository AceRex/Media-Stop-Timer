const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const url = require("url");
const path = require("path");

app.setName("Stopwatch-Timer");

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: "Stopwatch Timer",
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      // preload: path.join(__dirname, "preload.js"),
    },
  });

  // win.webContents.openDevTools();

  const isMac = process.platform === "darwin";

  const template = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: "Set Time",
                click: () => {
                  win.webContents.send("setTimer", true);
                },
                accelerator: "Ctrl+Shift+T",
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
        ]
      : [
          {
            label: "File",
            submenu: [
              {
                label: "Set Time",
                click: () => {
                  win.webContents.send("setTimer", true);
                },
                accelerator: "Ctrl+Shift+T",
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
        ]),

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

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  let isDev;
  try {
    isDev = require("electron-is-dev").default;
  } catch (e) {
    console.error("Error loading electron-is-dev:", e);
    isDev = true;
  }

  const startUrl = url.format(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.loadURL(startUrl);
}

app.whenReady().then(createWindow);
