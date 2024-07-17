"use strict";

$(function () {


    // init Fancybox Gallery
    if (typeof Fancybox !== "undefined" && Fancybox !== null) {
        Fancybox.bind("[data-fancybox]", {
            dragToClose: false,
        });
    }

    // let splitGrid = Split(['#split-1', '#split-2'], {
    //     minSize: 0,
    //     sizes: [25, 75],
    //     onDrag: () => {
    //         $('.gutter').removeClass('gutter-open');
    //         initalSizes = null;
    //     }
    // });

    // let initalSizes;

    // $(document).on('dblclick', function (e) {
    //     let $target = $(e.target);

    //     if ($target.hasClass('gutter')) {

    //         $target.toggleClass('gutter-open');
    //         if ($target.hasClass('gutter-open')) {
    //             initalSizes = splitGrid.getSizes();
    //             splitGrid.setSizes([0, 100])


    //         } else {
    //             $('.gutter').removeClass('gutter-open');
    //             if (initalSizes) {
    //                 splitGrid.setSizes(initalSizes);
    //                 initalSizes = null;
    //             }
    //         }
    //     }
    // });

    // $(document).on('click', function (e) {

    //     let $target = $(e.target);

    //     if ($target[0].closest('.panels__menu-btn')) {
    //         $target.closest('.panels__menu-btn').toggleClass('active').next().slideToggle()
    //     }


    //     if ($target[0].closest('.counter__increment')) {

    //         let $input = $target.closest('.counter').find('input');
    //         $input.val(+$input.val() + 1);
    //     }
    //     if ($target[0].closest('.counter__decrement')) {
    //         let $input = $target.closest('.counter').find('input');
    //         if (+$input.val() > 1) {
    //             $input.val(+$input.val() - 1);
    //         }
    //     }
    // });


    // custom select 

    document.querySelectorAll('[data-simplebar-block]').forEach(simpleBarBlock => {

        // new SimpleBar(simpleBarBlock, {
        //     autoHide: false
        // });
        console.log(new SimpleBar(simpleBarBlock, {
            autoHide: false
        }));

    })






});




