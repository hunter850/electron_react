const { app, BrowserWindow } = require("electron");

// function isDev() {
//     return process.argv[2] == "--dev";
// }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // if (isDev()) {
  //     win.loadURL("http://localhost:3000");
  // } else {
  //     win.loadFile("./dist/index.html");
  // }
  // if (app.isPackaged) {
  //     win.loadFile("./dist/index.html");
  // } else {
  //     win.loadURL("http://localhost:3000");
  // }
  win.loadURL("http://localhost:3000");
  // win.loadFile("./dist/index.html");
};

app.whenReady().then(() => {
  if (require("electron-squirrel-startup")) app.quit();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
