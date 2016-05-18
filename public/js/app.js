
$(document).ready(function() {

         var austDay = new Date();
         austDay = new Date(austDay.getFullYear() + 1, 1 - 6, 20);
         $('#CountDown').countdown({ until: austDay });

    $("#logout").on("click", function() {
        console.log('logout clicked');
        $("#logout-form").submit();

    });

    $("#gallery").on("click", function() {
        console.log('gallery clicked');
        $.ajax({
            type: 'GET',
            url: '/gallery',
            success: function(data) {
            }
        });

    });


    $("#rsvp-submit").on("click", function() {
        console.log('rsvp');

        var foodArray = [];
        // $("#rsvpForm").submit();
        var beef = $('[name=kids_food_choices_beef]:checked').val();
        var fish = $('[name=kids_food_choices_fish]:checked').val();
        var veg = $('[name=kids_food_choices_veg]:checked').val();

        var beefQuantity = $('[name=kid_food_beef_quantity]').val();
        var fishQuantity = $('[name=kid_food_fish_quantity]').val();
        var vegQuantity = $('[name=kid_food_veg_quantity]').val();

        if (beef !== undefined && beefQuantity !== 'null') {
          var obj = beef+"="+beefQuantity;
          foodArray.push(obj);
        }
        if (fish !== undefined && fishQuantity !== 'null') {
          var obj = fish+"="+fishQuantity;
          foodArray.push(obj);
        }
        if (veg !== undefined && vegQuantity !== 'null') {
          var obj = veg+"="+vegQuantity;
          foodArray.push(obj);
        }




        var data = {
          first_name: $('[name=first_name]').val(),
          last_name: $('[name=last_name]').val(),
          rsvp: $('[name=rsvp]:checked').val(),
          rsvp_food_choice: $('[name=rsvp_food_choice]:checked').val(),
          guest_name: $('[name=guest_name]').val(),
          guest_food_choice: $('[name=guest_food_choice]:checked').val(),
          kid_names: $('[name=kid_names]').val(),
          kids_food_choices: foodArray.toString(),
          phone: $('[name=phone]').val(),
          address: $('[name=address]').val(),
          message: $('[name=message]').val()
        };


        $.ajax({
            type: "POST",
            url: '/rsvp',
            data: data,
            success: function() {

var template = Handlebars.compile($('#rsvp-thankyou-template').html());
                $('#services').empty();
                $('#services').append(template);
            },
            fail: function() {}
        });
    });


});
