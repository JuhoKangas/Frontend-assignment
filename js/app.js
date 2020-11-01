$(document).ready(function(){

    //INITIALIZING THE APP AND RESETTING ALL THE VALUES ON START/RELOAD
    var firstNumFocus = true;
    var operator = '';
    $('#numOne').val('');
    $('#numTwo').val('');
    $('#result').val('');
    

    //NUMBER BUTTON HANDLER
    $('.btn-number').click(function(){
        if(firstNumFocus){
            //Limiting the input length to 5
            if($('#numOne').val().length < 5) {
                $('#numOne').val ($('#numOne').val() + $(this).val());
            } 
        } else {
            if($('#numTwo').val().length < 5) {
                $('#numTwo').val ($('#numTwo').val() + $(this).val());
            }
        }
    });


    //OPERATOR BUTTON HANDLER
    $('.btn-operator').click(function(){
        operator = $(this).attr('id');
        $('#operator').html($(this).html());
        $('#numTwo').focus();
        firstNumFocus = false;
    });


    //CALCULATE BUTTON HANDLER
    $('#calc').click(function(){
        var calcResult;

        if (operator === 'plus') {
            calcResult = parseInt($('#numOne').val()) + parseInt($('#numTwo').val())
            $('#result').val(calcResult) 
        } else if (operator === 'minus'){
            calcResult = parseInt($('#numOne').val()) - parseInt($('#numTwo').val())
            $('#result').val(calcResult) 
        } else if (operator === 'times') {
            calcResult = parseInt($('#numOne').val()) * parseInt($('#numTwo').val())
            $('#result').val(calcResult) 
        } else if (operator === 'divide') {
            calcResult = parseInt($('#numOne').val()) / parseInt($('#numTwo').val())
            $('#result').val(calcResult) 
        }
    });

    
    //HANDLE USER SPECIFIED FOCUS TO INPUT NUMBERS ON FOCUSED FIELDS AND EMPTY PREVIOUS INPUTS
    $('#numOne').focus(function(){
        $('#numOne').val('');
        firstNumFocus = true;
    });

    $('#numTwo').focus(function(){
        $('#numTwo').val('');
        firstNumFocus = false;
    });
});
