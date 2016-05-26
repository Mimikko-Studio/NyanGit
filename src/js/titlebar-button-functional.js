window.onload = () =>
{
	const {remote} = require("electron");
	let currentWindow = remote.getCurrentWindow();

	//Button Close
	const btnClose = document.getElementById("button-close");
	btnClose.onclick = (e) =>
	{
		currentWindow.close();
	};

	//Button Maximize
	const btnMaximize = document.getElementById("button-maximize");
	const btnMaximize_icon = document.getElementById("button-maximize-icon");
	const maximize_icon = "check-box-outline-blank";
	const restore_icon = "flip-to-front";
	btnMaximize.onclick = (e) =>
	{
		if (currentWindow.isMaximized())
		{
			currentWindow.restore();
		}
		else
		{
			currentWindow.maximize();
		}
	};

	//Change titlebar maximize button's icon related to window state.
	currentWindow.on("resize", () =>
	{
		btnMaximize_icon.icon = currentWindow.isMaximized() ? restore_icon : maximize_icon;
	});

	//Button Minimize
	const btnMinimize = document.getElementById("button-minimize");
	btnMinimize.onclick = (e) =>
	{
		currentWindow.minimize();
	};
}