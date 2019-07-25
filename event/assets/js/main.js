$(function() {
    "use strict";

    $('body').popover({
        selector: '[data-popover]',
        trigger: 'click hover',
        placement: 'top',
        delay: {show: 50, hide: 50}
    });

    $('body').tooltip( {selector: '[data-toggle=tooltip]'} );

    //jquery.scrollUp
    $.scrollUp({
        scrollImg: true,
    });
});
