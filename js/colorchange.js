$(document).ready(function () {  
 setInterval(function() {
     highlight_next_li();
     $('body')
    .animate( { backgroundColor: '#E7C1A5' }, 5000)
    .animate( { backgroundColor: '#DEADB3' }, 5000)
    .animate( { backgroundColor: '#61A28C' }, 5000)
    .animate( { backgroundColor: '#6A737B' }, 5000)
    .animate( { backgroundColor: '#2A5CAA' }, 5000)
    .animate( { backgroundColor: '#733345' }, 5000)
    .animate( { backgroundColor: '#F26A57' }, 5000);
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