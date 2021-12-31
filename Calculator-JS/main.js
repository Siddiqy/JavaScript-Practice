document.addEventListener("DOMContentLoaded", () => {
    
    window.onload = addListeners;

    let calculator = document.querySelector('.calculator-main')

    function addListeners(){
        calculator.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);

    }

    function mouseUp(){
        window.removeEventListener('mousemove', divMove, true);
    }

    function mouseDown(e){
        window.addEventListener('mousemove', divMove, true);
    }

    function divMove(e){
        var div = calculator;
        div.style.position = 'absolute';
        div.style.cursor = 'pointer';
        div.style.top = e.clientY + 'px';
        div.style.left = e.clientX + 'px';
    }
});