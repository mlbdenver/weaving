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
        
        $("#widthinreed").text(widthinreed);
        $("#widthinreed1").text(widthinreed);
        $("#totalends").text(totalends);
        $("#piecelength").text(piecelength);
        $("#totallength").text(totallength);
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
        var totalweftyd = (weftperinch * piecelength * numpieces / 36).toFixed(2);
        
        
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
    
    });