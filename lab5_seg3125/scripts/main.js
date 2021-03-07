//Activating tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

jQuery.validator = function(regex, str) {
    var reg = new RegExp(regex)
    return reg.test(str)
}

$('#cc-number').keydown(function() {
    var number = $('#cc-number').val().replaceAll(' ', '').replaceAll('-', '');

    var isValid = jQuery.validator('[0-9]{15}', number);
    if (isValid) {

    } else {
        $('#cc-number').addClass(['border', 'border-5', 'border-danger'])
    }
})