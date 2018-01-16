export function header() {

    /**
     *  Drop Down Menu
     */
    var dropDownActionName = 'scroll',
        scrollTopY = 300,
        dropDownClassName = 'show-header';

    $(window).on(dropDownActionName, function () {
        if ($(window).scrollTop() > scrollTopY) {
            $('#header-drop-down').addClass(dropDownClassName);
        } else {
            $('#header-drop-down').removeClass(dropDownClassName);
        }
    });


    /**
     *  Menu Button
     */
    var menuButtonId = '#menu-button',
        menuButtonChildrenTagName = 'i',
        menuButtonCrossClassName = 'fa-times';

    $(menuButtonId).click(function () {
        $(this).children(menuButtonChildrenTagName).toggleClass(menuButtonCrossClassName);
    });

};




