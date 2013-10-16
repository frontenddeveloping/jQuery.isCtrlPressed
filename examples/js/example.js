$(function () {
    var isPressedLocale = 'Ctrl/Command key was pressed...',
        isNotPressedLocale = 'Ctrl/Command key was not pressed...';

    $(document).keydown(function () {
        var locale = $.isCtrlPressed ? isPressedLocale : isNotPressedLocale;
        $('#log').append('<div>' + locale + '</div>');
        window.scrollTo(0, 100000);
    });

})
