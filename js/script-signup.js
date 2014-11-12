$(document).ready( function() {

    // Initialize the page
    // -----------------------------------------------------------------------------------------------------------------
    // Hide all pages except Watch
    $('.body-shout').hide();
    $('.body-heartbeat').hide();

    // Format phone numbers
    $('.phone').inputmask("(999) 999-9999");

    // Setup Group Tabs
    var showTabGroupSummary = function() {
        $('#tabGroupSummaryBody').show();
        $('#tabGroupMapBody').hide();
    };

    var showTabGroupMap = function() {
        $('#tabGroupSummaryBody').hide();
        $('#tabGroupMapBody').show();
    };

    $('#tabGroupSummary').addClass('active');
    $('#tabGroupSummary').on('click', showTabGroupSummary);
    $('#tabGroupSummaryBody').show();

    $('#tabGroupMap').removeClass('active');
    $('#tabGroupMap').on('click', showTabGroupMap);
    $('#tabGroupMapBody').hide();

    // Handle Events
    // -----------------------------------------------------------------------------------------------------------------
    $('#btn-1').click( function() {
        $('#btn-1').addClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').removeClass('active');
    });

    $('#btn-2').click( function() {
        $('#btn-1').removeClass('active');
        $('#btn-2').addClass('active');
        $('#btn-3').removeClass('active');
    });

    $('#btn-3').click( function() {
        $('#btn-1').removeClass('active');
        $('#btn-2').removeClass('active');
        $('#btn-3').addClass('active');
    });

    $('.btn-signUp').on('click', function() {
        window.location.href = "app.html";
    });



});