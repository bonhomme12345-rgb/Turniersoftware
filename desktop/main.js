const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit();

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 360, minHeight: 500,
    title: 'Pétanque-Turnierleitung',
    icon: path.join(__dirname, 'build', 'icon.png'),
    backgroundColor: '#f2ede4',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
  // Externe Links im normalen Browser öffnen, nicht im Programmfenster
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (/^https?:/.test(url)) { e.preventDefault(); shell.openExternal(url); } });
}

Menu.setApplicationMenu(Menu.buildFromTemplate([
  { label: 'Datei', submenu: [{ label: 'Drucken…', accelerator: 'CmdOrCtrl+P', click: () => win.webContents.print({ landscape: true, pageSize: 'A4' }) }, { type: 'separator' }, { label: 'Beenden', role: 'quit' }] },
  { label: 'Ansicht', submenu: [{ label: 'Neu laden', role: 'reload' }, { label: 'Vollbild', role: 'togglefullscreen' }, { type: 'separator' }, { label: 'Größer', role: 'zoomIn' }, { label: 'Kleiner', role: 'zoomOut' }, { label: 'Normalgröße', role: 'resetZoom' }] }
]));

app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
