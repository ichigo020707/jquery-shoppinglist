$(document).ready(function() {
	$('input').on('keydown', function(event) {
		if (event.which == 13) {
		$("ul").prepend($("<li></li>").text($('input').val()));
		$('input').val('');
		}
	});
	/* $('input').on('click', function() {
		$('input').val('');
	}); */
	/* $('input').on('keyup', function(event) {
		if (event.which == 13) {
		$('input').attr("placeholder", "Type List Item");
		}
	}); */
	$('ul').on('click', 'li', function() {
		if ($(this).hasClass('done')) {
			$(this).removeClass('done');
		}
		else {
			$(this).addClass('done');
		}
	});
	$('ul').on('dblclick', 'li', function() {
		$(this).addClass('remove');
	});
	var list = document.querySelector('ul');
	/* list.addEventListener('click', function(ev) {
  	if( ev.target.tagName === 'LI') {
     	ev.target.classList.toggle('done');
  		}
	}, false); */
	/* list.addEventListener('click', function(ev) {
  	if( ev.target.tagName === 'LI') {
     	ev.target.classList.toggle('remove');
     	alert("it works");  
  		}
	}, false); */
});

