	window.addEventListener("load", () =>
	{
		const changes_page_index = 0;
	
		const id_change_pages = "pages-tabs-content";
		const id_change_button = "button-tab-change";
	
		const pages = document.getElementById(id_change_pages);
		const btnTabChange = document.getElementById(id_change_button);
	
		btnTabChange.addEventListener("tap", (e) =>
		{
			pages.selected = changes_page_index;
		});
	});