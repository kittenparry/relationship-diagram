toggle_general = (id) => {
	let el = document.getElementById(id);
	let display = get_display(el);
	console.log(display);
	if (display == 'block') {
		el.style.display = 'none';
	} else if (display == 'none') {
		el.style.display = 'block';
	}
};

get_display = (el) => {
	return el.currentStyle ? el.currentStyle.display :
		getComputedStyle(el, null).display;
}

collapse_all = () => {
	let els = ['collapsible_left', 'collapsible_right'];
	// TODO: left to play some dota
};

display_all = () => {

};
