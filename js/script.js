$(document).ready( function() {

    // Initialize the page
    // -----------------------------------------------------------------------------------------------------------------
    // Hide all pages except Watch
    $('.body-shout').hide();
    $('.body-heartbeat').hide();

    // Setup Group Tabs
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
    var showTabGroupSummary = function() {
        $('#tabGroupSummaryBody').show();
        $('#tabGroupMapBody').hide();
    };

    var showTabGroupMap = function() {
        $('#tabGroupSummaryBody').hide();
        $('#tabGroupMapBody').show();
    };

});