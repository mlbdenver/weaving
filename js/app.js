$(document).ready(function () {

   //Declare Global Variables
       

    //calculate Width in Reed
    $("#calculatewarp").on("click", function() {

        var finishedwidth = parseFloat($('#finishedwidth').val());
        var finishedlength = parseFloat($('#finishedlength').val());
        var drawinpercent = parseFloat($('#drawin').val());
        var lengthshrinkpercent = parseFloat($('#lengthshrink').val());
        var sett = parseFloat($('#epi').val());
        var floating = parseFloat($('#floating').val());
        var numpieces = parseFloat($('#numpieces').val());
        var loomwaste = parseFloat($('#loomwaste').val());
        var takeuppercent = parseFloat($('#takeup').val());
        var widthshrinkpercent = parseFloat($('#widthshrink').val());
        var hemwidth = parseFloat($('#hemwidth').val());
        var fringe = parseFloat($('#fringe').val());

        var drawin = drawinpercent / 100 * finishedwidth;
        var lengthshrinkage = lengthshrinkpercent * finishedlength / 100;
        var widthshrinkage = widthshrinkpercent * finishedwidth / 100;
        var widthinreed = finishedwidth  + widthshrinkage + drawin;
        var totalends = sett * widthinreed + floating;
        var takeup = takeuppercent / 100;
        var piecelength = (finishedlength + lengthshrinkage + takeup + (fringe + hemwidth) * 2);
        var totallength = (numpieces * piecelength) + loomwaste;
        var warpyarnyd = (totallength * totalends / 36).toFixed(1);
        
        
            $("#widthinreed").text(widthinreed);
            $("#widthinreed1").text(widthinreed);
            $("#totalends").text(totalends);
            $("#piecelength").text(piecelength);
            $("#totallength").text(totallength);
            $("#warpyarnyd").text(warpyarnyd);
            console.log('widthinreed = ' + widthinreed);
            console.log('totallength = ' + totallength);
   
    });

    $("#calculateweft").on("click", function() {
        var weftwidth = parseFloat($('#widthinreed1').val());
        var wefttakeuppercent = parseFloat($('#wefttakeup').val());
        var finishedlength = parseFloat($('#finishedlength').val());
        var picksperinch = parseFloat($('#picksperinch').val());
        var numpieces = parseFloat($('#numpieces').val());
        var widthshrinkpercent = parseFloat($('#widthshrink').val());
        var piecelength = parseFloat($('#piecelength').val());

        var wefttakeup = wefttakeuppercent / 100;
        var picklength = weftwidth * (1 + wefttakeup);
        var weftperinch = picksperinch * picklength;
        var totalweftyd = (weftperinch * piecelength * numpieces / 36).toFixed(1);
        
        
        $("#picklength").text(picklength);
        $("#totalweft").text(totalweftyd);
        console.log('picklength = ' + picklength);
        console.log('weftperinch = ' + weftperinch);
        console.log('piecelength = ' + piecelength);
        console.log('totalweft = ' + totalweftyd);

    });

   $("#resetwarp").on("click", function() {
        $('.warpform').find('input:text, output').val('');
        $('#drawin').val(10);
        $('#widthshrink').val(10);
        $('#numpieces').val(1);
        $('#fringe').val(0);
        $('#takeup').val(10);
        $('#lengthshrink').val(10);
        $('#floating').val(0);
        $('#hemwidth').val(0);
        $('#widthinreed').val('');
        $('#widthinreed1').val('');
        $("#totalweft").val('');

        console.log('clearing warp form');
    });
   $("#resetweft").on("click", function() {
        $('#wefttakeup').val(10);
        $('#picksperinch').val('');
        $('#totalweft').val('');
        console.log('clearing weft form');
   
    });

   $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

    $('div#back_to_top').hide();    // hide button first
     
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
    });
 
     // scroll body to top when the button is clicked
    $('#back_to_top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    }); 

    $(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

});

    
    });