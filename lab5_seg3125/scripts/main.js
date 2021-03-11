//Activating tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

jQuery.validator = function(regex, str) {
    var reg = new RegExp(regex)
    return reg.test(str)
}
var appointment = {
    cc: {
        name: null,
        number: null,
        expiration: null,
        cvv: null,
    },
    service: null,
    hairdresser: null,
    info: {
        name: null,
        email: null,
        phone: null
    },
    products: [],
    time: null
}


var prices = {
    products: {
        'Tea Tree': 56,
        'Invigo': 45,
        'Hair Booster': 46,
        '2 in 1 Beard Conditioner': 11,
        'Beard and Tattoo oil': 11,
        'Beard Balm': 11
    },
    'haircut': {
        'Bang trim': 9,
        'Ladies cut & style': 44,
        'Permanent': 72,
        'Hair consultation': 0,
        'Buzzcut': 17,
        'Mens cut & style': 30,
        'Beard & neck trim': 18,
        'Boys cut': 19,
        'Boys cut + shampoo': 29,
        'Girls cut': 22,
        'Girls cut + shampoo': 32
    }
}


//Validates the input with a regex
//Adjust the tooltip with the validation
jQuery.cc_validator = function(id, regex, invalid_message) {
    var number = $(id).val().replaceAll(' ', '').replaceAll('-', '');
    var maxLength = $(id).attr('maxLength') ? $(id).attr('maxLength') : number.length
    var isValid = jQuery.validator(regex, number) && number.length == maxLength;
    var expirationMonthValid = true
    if (id == "#cc-expiration") {
        var month = parseInt($(id).val().slice(0, 2));
        if (month > 12 || month < 1) {
            expirationMonthValid = false
        }
    }
    //If the input is valid, we make the border green
    if (isValid && expirationMonthValid) {
        $(id).removeClass(['border', 'border-3', 'border-danger', ])
        $(id).addClass(['border', 'border-3', 'border-success'])
        $(id + '-small-red').remove();
        if ($(id + '-small-green').length == 0) {
            $(id).after($('<small class="text-success" id="' + id.replace('#', '') + '-small-green"></small>').text('This is the correct format'))
        }

    } else {
        //If the input is invalid, we make the border red
        $(id).removeClass(['border', 'border-3', 'border-success'])
        $(id).addClass(['border', 'border-3', 'border-danger']);
        $(id + '-small-green').remove();
        if ($(id + '-small-red').length == 0) {
            $(id).after($('<small class="text-danger" id="' + id.replace('#', '') + '-small-red"></small>').text(invalid_message))
        }
    }
    var step = id.includes('#stp5-') ? 'info' : 'cc'
    appointment[step][id.split('-')[1]] = $(id).val().length > 0 && isValid ? $(id).val() : null;
    return expirationMonthValid
}

jQuery.only_numbers = function(id) {
    var text_replace = $(id).val().replace(/[^0-9., /]/g, '').replace(/(\..*?)\..*/g, '$1');
    $(id).val(text_replace)
}


jQuery.cc_name_validator = function(id) {
    var text_replace = $(id).val().replace(/[^A-Za-z, ,--,']/g, '')
    $(id).val(text_replace)

}




//Name
$('#stp5-name').on('input', function() { jQuery.cc_name_validator('#stp5-name') });
$('#stp5-name').on('input', function() { jQuery.cc_validator('#stp5-name', "[a]|[^a]", 'Only letters, spaces, dashes (-) and apostrophes (\')') });

//phone number
$('#stp5-phone').on('input', function() { jQuery.only_numbers('#stp5-phone') })
$('#stp5-phone').on('input', function() { jQuery.cc_validator('#stp5-phone', '[0-9]{9}', 'Requires 10 digits, no spaces') });

//email this step was done with the help of a portion of code from: https://stackoverflow.com/questions/2507030/email-validation-using-jquery
$('#stp5-email').on('input', function() { jQuery.cc_validator('#stp5-email', "^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$", 'This is not a valid email') });

//Payment information
//Name
$('#cc-name').on('input', function() { jQuery.cc_name_validator('#cc-name') });
$('#cc-name').on('input', function() { jQuery.cc_validator('#cc-name', "[a]|[^a]", 'Only letters, spaces, dashes (-) and apostrophes (\')') });


//Number
$('#cc-number').on('input', function() { jQuery.only_numbers('#cc-number') })
$('#cc-number').on('input', function() { jQuery.cc_validator('#cc-number', '[0-9]{15}', 'Requires 16 digits, no spaces') });

//CVV
$('#cc-cvv').on('input', function() { jQuery.cc_validator('#cc-cvv', '[0-9]{2}', 'Requires 3 digits, no spaces') });
$('#cc-cvv').on('input', function() { jQuery.only_numbers('#cc-cvv') });

//Expiration date
$('#cc-expiration').on('input', function() { jQuery.only_numbers('#cc-expiration') });
$('#cc-expiration').on('input', function(event) {
    if ($(this).val().length == 2 && event.originalEvent.data != null) {
        $(this).val($(this).val().slice(0, 2) + '/' + $(this).val().slice(2))
    }
    var ex = jQuery.cc_validator('#cc-expiration', '[0-9]{1}/[0-9]{1}', 'Requires 4 digits, no spaces. MM/YY');
    if (!ex) {
        $('#cc-expiration').removeClass(['border', 'border-3', 'border-success'])
        $('#cc-expiration').addClass(['border', 'border-3', 'border-danger']);
        $('#cc-expiration-small-green').remove();
        $('#cc-expiration-small-red').remove();
        if ($('#cc-expiration-small-red').length == 0) {
            $('#cc-expiration').after($('<small class="text-danger" id="' + '#cc-expiration'.replace('#', '') + '-small-red"></small>').text('Month must be between 01 and 12'))
            appointment['cc']['expiration'] = null
        }
    }
});

$('#cc-form').on('input', function() {
    var enableButton = Object.values(appointment['cc']).filter(bool => bool == null).length != 0;
    $('#cc-completed').prop('disabled', enableButton);
});


//Clicking on the last button of the step creates a modal pop up
$('#cc-completed').click(function() {
    $('#completedService').text(appointment['service'] + ' - ' + prices['haircut'][appointment['service']] + ' $');
    $('#completedHairdresser').text(appointment['hairdresser']);
    $('#completedDT').text(appointment['time']);
    var total = prices['haircut'][appointment['service']];
    //Adding producst list
    var prodList = $('<ul></ul>')
    appointment['products'].map(function(prod) {
        total += prices['products'][prod];
        prodList.append($('<li>' + prod + ' - ' + prices['products'][prod] + '$</li>'))
    });

    $('#completedProducts').empty().append(prodList)
        //Adding personal information
    $('#completedInfo').empty();
    Object.entries(appointment['info']).map(function(value) {
        $('#completedInfo').append('<p>' + value[0] + ': ' + value[1] + '</p>')
    });

    //Adding credit card info
    $('#completedCC').empty();
    Object.entries(appointment['cc']).map(function(key, _) {
        $('#completedCC').append($('<p>' + key[0] + ': ' + key[1] + '</p>'))
    });

    $('#completedTotal').text(total + '$')



});


$('#collapseClientInfo').on('input', function() {
    var enableButton = Object.values(appointment['info']).filter(bool => bool == null).length != 0;
    $('#next3').removeClass('disabled')
    if (enableButton) {
        $('#next3').addClass('disabled');
    }
});

//Showing users selection with borders
$('.service').click(function() {
    appointment['service'] = $(this).val();
    $('.service').map(function(_, val) {
        $(val).parent().parent().removeClass(['border-3', 'border', 'border-dark'])
    });
    ($(this).parent().parent().addClass(['border-3', 'border', 'border-dark']))
    $('#next1').removeClass('disabled')
})

$('.hairdresser').click(function() {
    appointment['hairdresser'] = this.id;
    $('.hairdresser').map(function(_, val) {
        $(val).parent().parent().removeClass(['border-3', 'border', 'border-dark'])
    });
    ($(this).parent().parent().addClass(['border-3', 'border', 'border-dark']))
    $('#next2').removeClass('disabled');
})

//Handeling products bought by user
$('.product').click(function() {

    if ($(this).text() == 'Remove product') {
        $(this).text('Buy product');
        $(this).removeClass('btn-light').addClass('btn-dark')
        appointment['products'].splice(appointment['products'].findIndex(function(prod) { prod == $(this).prev().prev().prev().text() }) - 1, 1);

    } else {
        //Really not pretty, but didnt find a better way, but I know there is
        appointment['products'].push($(this).prev().prev().prev().text());
        $(this).text('Remove product');
        $(this).removeClass('btn-dark').addClass('btn-light')
    }
});

$('#datetimepicker').datetimepicker('setDaysOfWeekDisabled', [0, 6]);
$('#datetimepicker').datetimepicker('setStartDate', '2021-03-01');
$('#datetimepicker').change(function() {
    appointment['time'] = $(this).datetimepicker('getDate').toDateString() + ' ' + $(this).datetimepicker('getDate').toTimeString().split(':00 GMT')[0]
});

$('#completedPayment').click(function() {
    $(this).text('Payment completed!')
    $(this).removeClass('btn-dark').addClass('btn-gold-theme')
});