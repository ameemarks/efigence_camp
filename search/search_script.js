/**
 * Created by ania on 8/24/16.
 */
( function() {

    $('#btn-search').on('click', function(e) {

        e.preventDefault();
        $('#search').animate({width: 'toggle'}).focus();

    });

} () );