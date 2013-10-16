(function ($) {

    var isCtrlPressed = false,

        isMac = navigator.platform.indexOf("Mac") > -1,

        UA = navigator.userAgent,

        browser = $.browser || {
            mozilla : UA.indexOf('Firefox') > -1,
            opera : !!window.opera,
            webkit : UA.indexOf('WebKit') > -1
        },
        
        isCtrl = function (e) {
            var is_ctrl = e.ctrlKey,
                keyCode = e.which;
    
            if (isMac && !is_ctrl) {
                if (browser.mozilla) {
                    is_ctrl = keyCode === 224;
                } else if (browser.webkit || browser.opera) {
                    is_ctrl = keyCode === 91 || keyCode === 93
                }
            }

            return is_ctrl;
        },

        checkKeyDownEvent = function (e) {

            isCtrlPressed = isCtrlPressed || isCtrl(e);

            $.isCtrlPressed = isCtrlPressed;
        },

        checkKeyUpEvent = function () {
            $.isCtrlPressed = isCtrlPressed = false;
        };
        
    $.isCtrlPressed = false;

    $.isCtrl = isCtrl;

    $(document)
        .on('keydown', checkKeyDownEvent)
        .on('keyup', checkKeyUpEvent);

})(jQuery);
