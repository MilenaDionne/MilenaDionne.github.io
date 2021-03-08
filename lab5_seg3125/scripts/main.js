//Activating tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

jQuery.validator = function(regex, str) {
    var reg = new RegExp(regex)
    return reg.test(str)
}

//Validates the input with a regex
//Adjust the tooltip with the validation
jQuery.cc_number_validator = function(id, regex, invalid_toottip) {
    var number = $(id).val().replaceAll(' ', '').replaceAll('-', '');
    var isValid = jQuery.validator(regex, number) && number.length == $(id).attr('maxLength');

    if (isValid) {
        $(id).removeClass(['border', 'border-3', 'border-danger', ])
        $(id).addClass(['border', 'border-3', 'border-success', 'ui-icon', 'ui-icon-circle-check'])
        $(id).attr('data-original-title', 'This is the correct format');


    } else {
        $(id).removeClass(['border', 'border-3', 'border-success', 'ui-icon', 'ui-icon-circle-check'])
        $(id).addClass(['border', 'border-3', 'border-danger'])
        $(id).attr({
            'data-toggle': 'tooltip',
            'data-placement': 'bottom',
            'data-original-title': invalid_toottip
        }).tooltip();
    }
}

jQuery.only_numbers = function(id) {
    var text_replace = $(id).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    $(id).val(text_replace)
}


jQuery.only_letters = function(id) {
    var text_replace = $(id).val().replace(/[0-9]/g, '')
    console.log(text_replace)
    $(id).val(text_replace)
}

//Name
$('#cc-name').on('input', function() { jQuery.only_letters('#cc-name') });


//Number
$('#cc-number').on('input', function() { jQuery.only_numbers('#cc-number') })
$('#cc-number').on('input', function() { jQuery.cc_number_validator('#cc-number', '[0-9]{15}', 'Requires 16 digits, no spaces') });

//CVV
$('#cc-cvv').on('input', function() { jQuery.cc_number_validator('#cc-cvv', '[0-9]{2}', 'Requires 3 digits, no space. This number is located on the fron of your card') });
$('#cc-cvv').on('input', function() { jQuery.only_numbers('#cc-cvv') });