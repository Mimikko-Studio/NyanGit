window.onload = () =>
{
	const {remote} = require("electron");
	let currentWindow = null;

	//Button Close
	const btnClose = document.getElementById("btnClose");
	btnClose.onclick = (e) =>
	{
		currentWindow = remote.getCurrentWindow();
		currentWindow.close();
	};

	//Button Maximize
	const btnMaximize = document.getElementById("btnMaximize");

	btnMaximize.onclick = (e) =>
	{
		currentWindow = remote.getCurrentWindow();
		if (currentWindow.isMaximized())
		{
			currentWindow.restore();
		}
		else
		{
			currentWindow.maximize();
		}
	};

	//Button Minimize
	const btnMinimize = document.getElementById("btnMinimize");
	btnMinimize.onclick = (e) =>
	{
		currentWindow = remote.getCurrentWindow();
		currentWindow.minimize();
	};
}