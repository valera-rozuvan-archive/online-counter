window.jQuery(document).ready(function (_jquery) {
    const $ = _jquery;

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
        if (
            event &&
            event.currentTarget &&
            event.currentTarget.activeElement &&
            event.currentTarget.activeElement.id === "input-group-field"
        ) {
            // We don't want to trigger a decrease/increase twice.
            // Default input element (type="number") has a built-in handler for "ArrowUp" and "ArrowDown" keyboard events.
            // That's why we skip processing keyboard events if the user is inside (has focused) the input element.
            return;
        }

        if (event.key === "ArrowUp") {
            increaseCounter(event);
        } else if (event.key === "ArrowDown") {
            decreaseCounter(event);
        }
    });

    function increaseCounter(event) {
        event.preventDefault();
        event.stopPropagation();

        const el = $("input[name=quantity]");
        const oldValue = parseInt(el.val());

        isNaN(oldValue) ? el.val(0) : el.val(oldValue + 1);
    }

    function decreaseCounter(event) {
        event.preventDefault();
        event.stopPropagation();

        const el = $("input[name=quantity]");
        const oldValue = parseInt(el.val());

        (!isNaN(oldValue) && oldValue > 0) ? el.val(oldValue - 1) : el.val(0);
    }
});
