$(document).ready(function() {
    var resetScreen

    function fade() {
      $(this)
        .fadeOut(50)
        .fadeIn(200);
    }

    function addToScreen() {
      $(this)
      if (resetScreen == true) {
        clearScreen()
        resetScreen = false
      }
      $('#screen').append($(this).data('val'));
    }

    function clearScreen() {
      $('#screen').empty()
    }

    function evaluate() {
      result = eval($('#screen').text())
      $('#screen').html($('#screen').html() + '=' + result)
      $('#history').html($('#history').html() + '<br>' + $('#screen').text())
      resetScreen = true
    }

    $('.button, .operator, .cls').on('click', fade);
    $('.button, .operator').on('click', addToScreen);
    $('.cls').on('click', clearScreen);
    $('.evaluate').on('click', evaluate);
});