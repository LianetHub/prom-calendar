"use strict";

$(function () {


    // init Fancybox Gallery
    if (typeof Fancybox !== "undefined" && Fancybox !== null) {
        Fancybox.bind("[data-fancybox]", {
            dragToClose: false,
        });
    }


    $(document).on('click', function (e) {

        let $target = $(e.target);

        if ($target.is('.sidebar__caption-btn')) {
            $target.addClass('active');
            $target.next().slideDown()
        }

        if ($target.is('.sidebar__caption-item')) {
            $('.sidebar__caption-btn').text($target.text()).removeClass('active').next().slideUp()
        }

        if ($target[0].closest(".sidebar__item-button")) {
            $target.closest(".sidebar__item-button").next().slideToggle().parent().toggleClass('active');
        }

    })

    let splitGrid = Split(['#split-1', '#split-2'], {
        minSize: 0,
        onDrag: () => {
            $('.gutter').removeClass('gutter-open');
            $('.prom-calendar').removeClass('full');
            initalSizes = null;
        }
    });

    console.log(splitGrid);

    let initalSizes;

    $(document).on('dblclick', function (e) {
        let $target = $(e.target);

        if ($target.hasClass('gutter')) {

            $target.toggleClass('gutter-open');
            $('.prom-calendar').toggleClass('full');
            if ($target.hasClass('gutter-open')) {
                initalSizes = splitGrid.getSizes();
                splitGrid.setSizes([0, 100])


            } else {
                $('.gutter').removeClass('gutter-open');
                $('.prom-calendar').removeClass('full');
                if (initalSizes) {
                    splitGrid.setSizes(initalSizes);
                    initalSizes = null;
                }
            }
        }
    });



    // simplebar

    document.querySelectorAll('[data-simplebar-block]').forEach(simpleBarBlock => {

        new SimpleBar(simpleBarBlock, {
            autoHide: false
        })

    })






});




