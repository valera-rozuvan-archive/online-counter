jQuery(document).ready(function () {
    $('[data-quantity="plus"]').click(function (a) {
        a.preventDefault();
        var fieldName = $(this).attr("data-field");
        var el = $("input[name=" + fieldName + "]");
        var e = parseInt(el.val());
        isNaN(e) ? el.val(0) : el.val(e + 1);
    });

    $('[data-quantity="minus"]').click(function (a) {
        a.preventDefault();
        var fieldName = $(this).attr("data-field");
        var el = $("input[name=" + fieldName + "]");
        var e = parseInt(el.val());
        (!isNaN(e) && e > 0) ? el.val(e - 1) : el.val(0);
    });

    $('#delete_02').click(function (a) {
        a.preventDefault();

        ["#delete_00", "#delete_01", "#delete_02", "#delete_03", "#delete_04"].forEach(function (id) {
            $(id).remove();
        });

        $("#counter").addClass("centered");
    });
});
