set_everything = () => {
	document.getElementById('btn_toggle_left').addEventListener('click',
		e => {
			toggle_general('collapsible_left');
		});
	document.getElementById('btn_toggle_right').addEventListener('click', e => {
		toggle_general('collapsible_right');
	});
};

set_everything();
