$(document).ready( function() {

    // Initialize the page
    // -----------------------------------------------------------------------------------------------------------------
    // Hide all pages except Watch
    $('.body-watch').hide();
    $('.body-shout').show();
    $('.body-heartbeat').hide();

    // Setup Major Pages
    var showWatchPage = function() {
        $('.body-watch').show();
        $('.body-shout').hide();
        $('.body-heartbeat').hide();
    };

    var showShoutPage = function() {
        $('.body-watch').hide();
        $('.body-shout').show();
        $('.body-heartbeat').hide();
    };

    var showHeartbeatPage = function() {
        $('.body-watch').hide();
        $('.body-shout').hide();
        $('.body-heartbeat').show();
    };

    $('#nav-watch').on('click', showWatchPage);
    $('#nav-shout').on('click', showShoutPage);
    $('#nav-heartbeat').on('click', showHeartbeatPage);

    // Shout button links to Shout page
    $('.btn-shout').on('click', showShoutPage);

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

        // Include ESRI Maps
        require(["esri/map", "dojo/domReady!"], function(Map) {
            var map = new Map("map", {
                center: [-118, 34.5],
                zoom: 8,
                basemap: "topo"
            });
            map.disableMapNavigation();
        });

    // Handle Events
    // -----------------------------------------------------------------------------------------------------------------
    $('.btn-signUp').on('click', function() {
        window.location="app.html";
    });


});