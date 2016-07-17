const { app, BrowserWindow } = require('electron')

let window = null

app.on('ready', () => {
  window = new BrowserWindow()
  window.loadURL(`file://${__dirname}/application/index.html`)
})
