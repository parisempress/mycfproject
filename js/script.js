
// <footer>
//Rochelle Lawrence 2016 &copy; 

// <!-- <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count"></div> -->

// <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="200" data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>

// <div id="fb-root"></div>

//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//twitter
// <a href="https://twitter.com/RochsLaw" class="twitter-follow-button" data-show-count="false">Follow @RochsLaw</a>
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// </footer>

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.0609056, lng:12.2915726},
    zoom: 8
  });
}


$(document).ready(function() {
// });

//work section
for(var i = 0; i < works.length; ++i){
  $("#work").append('\
<div class="col-lg-3 col-md-4 col-xs-12" id="work-column6">\
<a href="#" class="work-img">\
<img class="img-responsive" src= "'+ works[i].pic + '">\
<span class="info"><p class="proj-title">Title:</p> Project </span>\
<a>\
</div>\
');
  var images = $("#work img");
        if (i%2 === 0) {
            $(images[i]).css("border", "2px solid DodgerBlue");
        } else {
            $(images[i]).css("border", "2px solid salmon")
        }

};




$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});

});







