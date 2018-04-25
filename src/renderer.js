'use strict';

const path = require('path');

module.exports = function ( context ) {
	const hooks = context.hooks
	const React = context.React
	const remote = context.electron.remote

	// Development Helpers
	remote.getCurrentWindow().openDevTools()
	window.reload = remote.getCurrentWebContents().reloadIgnoringCache

	document.addEventListener( 'keypress', (event) => {

		// Toggle dev tools
		if ( event.ctrlKey && event.key == 'i' ) {
			console.log( 'Toggle dev tools' );
			remote.getCurrentWindow().toggleDevTools();
		}

		// Reload application
		if ( event.ctrlKey && event.key == 'r' ) {
			console.log( 'Reload application' );
			window.reload = remote.getCurrentWebContents().reloadIgnoringCache;
		}
		
	} );

};
