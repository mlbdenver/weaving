$(document).ready(function () {

   
    //calculate Width in Reed
    $("#calculatewarp").on("click", function() {
        var finishedwidth = $('#finishedwidth').val()*1;
        var finishedlength = $('#finishedlength').val()*1;
        var drawinpercent = $('#drawin').val()*1;
        var lengthshrinkpercent = $('#lengthshrink').val()*1;
        var sett = $('#epi').val()*1;
        var floating = $('#floating').val()*1;
        var numpieces = $('#numpieces').val()*1;
        var loomwaste = $('#loomwaste').val()*1;
        var takeuppercent = $('#takeup').val()*1;
        var widthshrinkpercent = $('#widthshrink').val()*1;
        var hemwidth = $('#hemwidth').val()*1;
        var fringe = $('#fringe').val()*1;

        var drawin = drawinpercent / 100 * finishedwidth;
        var lengthshrinkage = lengthshrinkpercent * finishedlength / 100;
        var widthshrinkage = widthshrinkpercent * finishedwidth / 100;
        var widthinreed = finishedwidth  + widthshrinkage + drawin;
        var totalends = sett * widthinreed + floating;
        var takeup = takeuppercent / 100;
        var piecelength = (finishedlength + lengthshrinkage + takeup + (fringe + hemwidth) * 2);
        var totallength = (numpieces * piecelength) + loomwaste;
        
        $("#widthinreed").text(widthinreed);
        $("#totalends").text(totalends);
        $("#piecelength").text(piecelength);
        $("#totallength").text(totallength);


    });
    
    });