let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', function(e) {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                let result = eval(display.innerText);
                if(isNaN(result))
                    display.innerText = "Invalid";
                else
                    display.innerText = result;
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});