const electron = require("electron");
const {app} = electron;
const {BrowserWindow} = electron;

const width = 1024;
const height = 768;

let win;

function createWindow()
{
	win = new BrowserWindow(
	{
		width: width,
		height: height,
		frame: false
	});

	win.loadURL("file://" + __dirname + "/index.html");
	win.webContents.openDevTools();

	win.on("closed", () =>
	{
		win = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () =>
{
	if (process.platform !== "darwin")
	{
		app.quit();
	}
});

app.on("activate", () =>
{
	if (win === null)
	{
		createWindow();
	}
});
