(function () {

		document.querySelector("head").insertAdjacentHTML('afterbegin', 
		'<link rel="manifest" href="manifest.json" crossorigin="use-credentials">' +
		// Standard Light
		'<link rel="shortcut icon" href="favicon.ico">' +
		'<link rel="icon" href="favicon.ico">' +
		'<link rel="favicon" href="favicon.ico">' +
		// Standard Dark
		'<link rel="shortcut icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_dark.ico" media="(prefers-color-scheme:dark)">' +
		// High Contrast Light
		'<link rel="shortcut icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="icon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		'<link rel="favicon" href="favicon_hc.ico" media="(forced-colors:active)">' +
		// High Contrast Dark
		'<link rel="shortcut icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="icon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' +
		'<link rel="favicon" href="favicon_hcDark.ico" media="(forced-colors:active) and (prefers-color-scheme:dark)">' 
		);

		/* Active Theme */
		if (getKey('device-theme') === 'light' ) {
			active_tm_theme =  (getKey('color-style-behavior') === 'duo' ) ? 'auto' : 'light'
		} else if ( (getKey('device-theme') === 'dark' ) ) {
			active_tm_theme =  (getKey('color-style-behavior') === 'duo' ) ? 'auto-dark' : 'dark'
		} else if ( (getKey('device-theme') === 'auto' ) || (getKey('device-theme') === 'auto-dark' ) ) {
			active_tm_theme = 'custom';
		} else {
			active_tm_theme = 'auto';
		}
		document.getElementById("AppTheme" + ['01','02','03','04','05'][ ['auto','auto-dark','light','dark','custom'].indexOf(active_tm_theme) ]).checked=true;
		/* Default Page */
		$('body').attr("page",  "buttons");

})();



/* Section Changing Functions */

function Tab0() {
		$('body').attr("page", "buttons");
}

function Tab1() {
		$('body').attr("page", "buttongroups");
}

function Tab2() {
		$('body').attr("page", "dropdowns");
}

function Tab3() {
		$('body').attr("page", "textboxes");
}

function Tab4() {
		$('body').attr("page", "cpetabs");
}

function Tab5() {
		$('body').attr("page", "floatingbuttons");
}

function Tab6() {
		$('body').attr("page", "banners");
}

function Tab7() {
		$('body').attr("page", "toggleinputs");
}

function Tab8() {
		$('body').attr("page", "settings");
}
