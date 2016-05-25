const electron = require("electron");
const {app} = electron;
const {BrowserWindow} = electron;

const width = 1024;
const height = 600;

let win = null;

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

const isShouldQuit = app.makeSingleInstance((commandline, workingDirectory) =>
{
	if (win)
	{
		if (win.isMinimized())
		{
			win.restore();
		}
		win.focus();
	}
});

if (isShouldQuit)
{
	app.quit();
	return;
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
