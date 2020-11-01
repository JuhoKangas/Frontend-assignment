$(document).ready(function(){
    $('.btn-number').click(function(){
        if($('#numOne').val().length < 5) {
            $('#numOne').val ($('#numOne').val() + $(this).val());
        } 
    })

    $('.btn-operator').click(function(){
        $('#numTwo').focus();
    })
});
