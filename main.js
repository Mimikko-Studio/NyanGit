const electron = require("electron");
const {app} = electron;
const {Menu} = electron;
const {BrowserWindow} = electron;

const width = 1024;
const height = 600;

let menu = null;
let menuTemplate = null;

let win = null;

function createMenu()
{
	menuTemplate = [];
	menu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(menu);
}

function createWindow()
{
	win = new BrowserWindow(
	{
		width: width,
		height: height,
		title: "NyanGit",
		frame: false
	});

	win.loadURL("file://" + __dirname + "/src/html/app.html");
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

app.on("ready", () =>
{
	createMenu();
	createWindow();
});

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
