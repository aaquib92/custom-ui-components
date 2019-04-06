$(function () {
    $('.detail').hide()
    $('a.showmore').click(function (e) {
        e.preventDefault();
        // We break and store the result so we can use it to hide
        // the row after the slideToggle is closed
        var targetrow = $(this).closest('tr').next('.detail');
        targetrow.show().find('div').slideToggle('slow', function () {
            if (!$(this).is(':visible')) {
                targetrow.hide();
            }
        });
    });
});