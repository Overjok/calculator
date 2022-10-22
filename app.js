(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let effacer = document.querySelector('.btn-effacer');
    let egal = document.querySelector('.btn-egal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    egal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "Formuler";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    effacer.addEventListener('click', function(e) {
        screen.value = "";
    })



})();