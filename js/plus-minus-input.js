function increaseCounter(event) {
    event.preventDefault();
    var el = $("input[name=quantity]");
    var e = parseInt(el.val());
    isNaN(e) ? el.val(0) : el.val(e + 1);
}

function decreaseCounter(event) {
    event.preventDefault();
    var el = $("input[name=quantity]");
    var e = parseInt(el.val());
    (!isNaN(e) && e > 0) ? el.val(e - 1) : el.val(0);
}

jQuery(document).ready(function () {
    $('[data-quantity="plus"]').click((event) => {
        increaseCounter(event);
    });

    $('[data-quantity="minus"]').click((event) => {
        decreaseCounter(event);
    });

    $('#delete_02').click(function (a) {
        a.preventDefault();

        ["#delete_00", "#delete_01", "#delete_02", "#delete_03", "#delete_04"].forEach(function (id) {
            $(id).remove();
        });

        $("#counter").addClass("centered");
    });

    $(document).on('keyup', (event) => {
        if (event.key === "ArrowUp") {
            increaseCounter(event);
        } else if (event.key === "ArrowDown") {
            decreaseCounter(event);
        }
    });
});
