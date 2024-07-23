"use strict";

$(function () {


    $(document).on('click', function (e) {

        let $target = $(e.target);

        if ($target.is('.sidebar__caption-btn')) {
            $target.addClass('active');
            $target.next().slideDown()
        }
    });

    if ($('.order-queue').length > 0) {

        function syncTableRowHeights() {
            var maxHeights = [];
            $('table').each(function () {
                var table = $(this);
                var rows = table.find('tbody tr');


                rows.each(function (index) {
                    var row = $(this);
                    var height = row.height();

                    if (maxHeights[index] === undefined || height > maxHeights[index]) {
                        maxHeights[index] = height;
                    }
                });


                rows.each(function (index) {
                    $(this).height(maxHeights[index]);
                });
            });
        }


        syncTableRowHeights();

        $(window).on('resize', syncTableRowHeights);
    }


    // simplebar

    document.querySelectorAll('[data-simplebar-block]').forEach(simpleBarBlock => {

        new SimpleBar(simpleBarBlock, {
            autoHide: false
        })

    })






});




