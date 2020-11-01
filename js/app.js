$(document).ready(() => {

    //INITIALIZING THE APP AND RESETTING ALL THE VALUES ON START/RELOAD
    let firstNumFocus = true;
    let operator = '';
    $('.numOne').val('');
    $('.numTwo').val('');
    $('.result-box').val('');
    

    //NUMBER BUTTON HANDLER
    $('.btn-number').click(function(){
        if(firstNumFocus){
            //Limiting the input length to 5
            if($('.numOne').val().length < 5) {
                $('.numOne').val ($('.numOne').val() + $(this).val());
            } 
        } else {
            if($('.numTwo').val().length < 5) {
                $('.numTwo').val ($('.numTwo').val() + $(this).val());
            }
        }
    });


    //OPERATOR BUTTON HANDLER
    $('.btn-operator').click(function(){
        operator = $(this).attr('id');
        $('.operator').html($(this).html());
        $('.numTwo').focus();
        firstNumFocus = false;
    });


    //OPERATORS
    const operators = {
        'plus': (x, y) => x + y,
        'minus': (x, y) => x - y,
        'times': (x, y) => x * y,
        'divide': (x, y) => x / y
    };


    //CALCULATE BUTTON HANDLER
    $('.calc').click(() => {
        let numOne = parseInt($('.numOne').val());
        let numTwo = parseInt($('.numTwo').val());

        $('.result-box').val(operators[operator](numOne, numTwo));
    });

    
    //HANDLE USER SPECIFIED FOCUS TO INPUT NUMBERS ON FOCUSED FIELDS AND EMPTY PREVIOUS INPUTS
    $('.numOne').focus(() => {
        $('.numOne').val('');
        firstNumFocus = true;
    });

    $('.numTwo').focus(() => {
        $('.numTwo').val('');
        firstNumFocus = false;
    });
});
