$(document).ready(function() {
	var colorBlendOptions = [
		{ param: "background-color",
		colorList:["#c0c0c0", "#00FF2D", "#29C5FF","#FF9B00","#ffff00"],
		duration: 50000 }
	];
	$("body").colorBlend(colorBlendOptions);
});

function highlight_next_li() {
        var current = jQuery('.highlighted'); // get the current highlighted
        var next = current.next();

        // if no next then we're at the end
        if( !next.length )
            next = current.parent().find('li:first'); // get the first li element in the parent

        next.addClass('highlighted');
        current.removeClass('highlighted');
    }

var myinterval = null;

jQuery(function() {
     myinterval = setInterval( highlight_next_li, 5000 ); // repeat that javascrispt every 3 seconds
});
