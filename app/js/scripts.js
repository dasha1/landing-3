var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

var scene_button = document.getElementById('scene-button');
var parallax = new Parallax(scene_button);

$(document).ready(function () {
    $('#map').addClass('scrolloff');
    $('#overlay').on('click', function () {
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {
        $('#map').addClass('scrolloff');
    });
});
$('#nav-icon').click(function(){
    $(this).toggleClass('active');
});
$(document).ready(function() {
    $("#carousel").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText: ['',''],
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination:false
    });
});
