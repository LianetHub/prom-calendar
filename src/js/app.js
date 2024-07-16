"use strict";

$(function () {


    // init Fancybox Gallery
    if (typeof Fancybox !== "undefined" && Fancybox !== null) {
        Fancybox.bind("[data-fancybox]", {
            dragToClose: false,
        });
    }

    let splitGrid = Split(['#split-1', '#split-2'], {
        minSize: 0,
        sizes: [25, 75],
        onDrag: () => {
            $('.gutter').removeClass('gutter-open');
            initalSizes = null;
        }
    });

    let initalSizes;

    $(document).on('dblclick', function (e) {
        let $target = $(e.target);

        if ($target.hasClass('gutter')) {

            $target.toggleClass('gutter-open');
            if ($target.hasClass('gutter-open')) {
                initalSizes = splitGrid.getSizes();
                splitGrid.setSizes([0, 100])


            } else {
                $('.gutter').removeClass('gutter-open');
                if (initalSizes) {
                    splitGrid.setSizes(initalSizes);
                    initalSizes = null;
                }
            }
        }
    });

    $(document).on('click', function (e) {

        let $target = $(e.target);

        if ($target[0].closest('.panels__menu-btn')) {
            $target.closest('.panels__menu-btn').toggleClass('active').next().slideToggle()
        }


        if ($target[0].closest('.counter__increment')) {

            let $input = $target.closest('.counter').find('input');
            $input.val(+$input.val() + 1);
        }
        if ($target[0].closest('.counter__decrement')) {
            let $input = $target.closest('.counter').find('input');
            if (+$input.val() > 1) {
                $input.val(+$input.val() - 1);
            }
        }
    });


    // custom select 

    document.querySelectorAll(".dropdown").forEach(function (dropdownWrapper) {
        const dropdownBtn = dropdownWrapper.querySelector(".dropdown__button");
        const dropdownList = dropdownWrapper.querySelector(".dropdown__list");
        const dropdownItems = dropdownList.querySelectorAll(".dropdown__list-item");
        const dropdownInput = dropdownWrapper.querySelector(".dropdown__input");


        dropdownBtn.addEventListener("click", function () {
            if (dropdownBtn.classList.contains('active')) {
                hiddenDropdown()
            } else {
                openDropdown()
            }
        });

        dropdownItems.forEach(function (listItem) {

            listItem.addEventListener("click", function (e) {
                dropdownItems.forEach(function (el) {
                    el.classList.remove("active");
                    el.removeAttribute('aria-checked');
                });
                e.target.classList.add("active");
                e.target.setAttribute('aria-checked', true);
                dropdownBtn.classList.add('selected')
                dropdownBtn.innerHTML = this.querySelector('.dropdown__list-value') ? this.querySelector('.dropdown__list-value').innerHTML : this.innerHTML;
                dropdownInput.value = this.dataset.value;
                hiddenDropdown();

                let event = new Event('change');
                dropdownInput.dispatchEvent(event);
            });
        });


        document.addEventListener("click", function (e) {
            if (e.target.closest(".dropdown__form") || e.target.closest('.dropdown__list-more-btn')) return;
            if (e.target !== dropdownBtn) {
                hiddenDropdown()
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Tab" || e.key === "Escape") {
                hiddenDropdown()
            }
        });

        function hiddenDropdown() {
            dropdownBtn.classList.remove("active");
            dropdownList.classList.remove("visible");
            dropdownBtn.setAttribute('aria-expanded', false);
            dropdownList.setAttribute('aria-hidden', true);
        }

        function openDropdown() {
            dropdownBtn.classList.toggle("active");
            dropdownList.classList.toggle("visible");
            dropdownBtn.setAttribute('aria-expanded', true);
            dropdownList.setAttribute('aria-hidden', false);
        }
    });

    if ($('.popup__slider').length > 0) {
        $('.popup__slider').each(function (index, item) {

            let slider = item.querySelector('.popup__slider-gallery');
            let prev = item.querySelector('.popup__prev');
            let next = item.querySelector('.popup__next');
            let pagination = item.querySelector('.popup__pagination');

            new Swiper(slider, {
                navigation: {
                    nextEl: next,
                    prevEl: prev
                },
                pagination: {
                    el: pagination,
                    type: "fraction",
                    renderFraction: function (currentClass, totalClass) {
                        return 'Изображение <span class="' + currentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + totalClass + '"></span>';
                    }
                }
            });
        })
    }


});




