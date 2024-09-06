(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) { // Changed from `buttons` to `button`
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = Function('"use strict";return (' + screen.value + ')')(); // Safer than `eval()`
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });
})();
