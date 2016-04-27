document.addEventListener('DOMContentLoaded', function() {
	var hash = window.location.hash;

	if (!hash || hash.length < 2) {
		window.location.href = window.location.href + '#' +
			(((1+Math.random())*0x10000)|0).toString(16).substring(1);
	}

	var T = require('./game');
	var room = window.location.hash;
	var refresh = document.getElementById('refresh-game');
	var roomID = document.getElementById('room-id');

	T.init({
		gridElement: '.js-table',
		playersElement: '.js-players-display',
		room: room.replace('#', '')
	});

	// Set footer information
	roomID.value = room;
	refresh.addEventListener('click', function(event) {
		event.preventDefault();
		document.location.reload(false);
	}, false);


}, false);