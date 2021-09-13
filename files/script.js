$(document).ready(function() {
    var resetScreen

    //"click" animation on buttons
    function fade() {
        $(this)
            .fadeOut(50)
            .fadeIn(200);
    }

    //add value to "#screen" element after button click
    function addToScreen() {
        $(this)
        if (resetScreen == true) {
            clearScreen()
            resetScreen = false
        }
        $('#screen').append($(this).data('val'));
    }

    //clear "#screen" element from any value
    function clearScreen() {
        $('#screen').empty()
    }

    //evaluate value in "#screen" element
    function evaluate() {
        result = eval($('#screen').text())
        $('#screen').html($('#screen').html() + '=' + result)
        $('#history').html($('#history').html() + '<br>' + $('#screen').text())
        resetScreen = true
    }

    $('.button, .operator, .clear').on('click', fade);
    $('.button, .operator').on('click', addToScreen);
    $('.clear').on('click', clearScreen);
    $('.evaluate').on('click', evaluate);
});