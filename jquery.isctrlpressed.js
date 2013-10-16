(function ($) {

    var isCtrlPressed = false,

        isMac = navigator.platform.indexOf("Mac") > -1,

        UA = navigator.userAgent,

        browser = $.browser || {
            mozilla : UA.indexOf('Firefox') > -1,
            opera : !!window.opera,
            webkit : UA.indexOf('WebKit') > -1
        },

        checkKeyDownEvent = function (e) {
            var keyCode = e.which;

            isCtrlPressed = isCtrlPressed || e.ctrlKey;

            if (isMac && !isCtrlPressed) {
                if (browser.mozilla) {
                    isCtrlPressed = keyCode === 224;
                } else if (browser.webkit || browser.opera) {
                    isCtrlPressed = keyCode === 91 || keyCode === 93
                }
            }

            $.isCtrlPressed = isCtrlPressed;

        },

        checkKeyUpEvent = function () {
            $.isCtrlPressed = isCtrlPressed = false;
        };
        
    $.isCtrlPressed = false;

    $(document).on('keydown', checkKeyDownEvent).on('keyup', checkKeyUpEvent);

})(jQuery);
