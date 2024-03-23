
/*-----------------------------bootstrap----------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById('liveAlertBtn');
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            let min = 1;
            let max = 100;

            let respuesta = confirm(`¿Es ${Math.floor((min + max) / 2)} tu número?`);

            while (!respuesta) {
                respuesta = confirm(`tu número mayor que ${Math.floor((min + max) / 2)}`);
                if (respuesta) {
                    min = Math.floor((min + max) / 2) + 1;
                } else {
                    max = Math.floor((min + max) / 2) - 1;
                }
                if (min > max) {
                    alert("Parece que has mentido. Recuerda que tu número debe estar entre 1 y 100. Por favor, piensa en un número y empecemos de nuevo.");
                    return;
                }
                respuesta = confirm(`¿Es ${Math.floor((min + max) / 2)} tu número?`);
            }

            appendAlert(`¡Tu número es ${Math.floor((min + max) / 2)}! ¡Le atiné, mi bro!`, 'success');
        });
    }
});

