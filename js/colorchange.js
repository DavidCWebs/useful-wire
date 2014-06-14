$(document).ready(function() {  
 setInterval(function() {
     highlight_next_li();
     $('body')
    .animate( { backgroundColor: '#EFFB3E' }, 5000)
    .animate( { backgroundColor: '#6ABBE8' }, 5000)
    .animate( { backgroundColor: 'green' }, 5000)
    .animate( { backgroundColor: '#b8ffff' }, 5000);
    },
    5000);
    

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