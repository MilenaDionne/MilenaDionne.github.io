// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function() {

    $('form').on('submit', function() {

        // var item = $('form input');
        // console.log(item.serializeArray());

        $.ajax({
            type: 'POST',
            url: '/index',
            data: $(this).serializeArray(),
            success: function(data) {
                console.log("Sent with ", data)
            }
        });
        return false;
    });
});