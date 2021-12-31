document.addEventListener("DOMContentLoaded", () => {
    
    let input = document.querySelector('.input-value');
    let select = document.querySelector('.convert-to');
    let submit = document.querySelector('.submit')

    select.addEventListener('change', (e) => {

        const selected = e.target;

        if(selected.value === 'em') {

        }
        if(selected.value === 'rem') {

        }
    });
});