'use strict';

const path = require('path');

module.exports = function ( context ) {
	const hooks = context.hooks
	const React = context.React
	const remote = context.electron.remote

	// Development Helpers
	remote.getCurrentWindow().openDevTools()
	window.reload = remote.getCurrentWebContents().reloadIgnoringCache
};
