//site.js

$( ".page-link" ).click(function() {
  let target = $(this).data("target");
  let offset = $(target).offset();
  $( "#main-nav").height( "0px" );
  $( ".hamburger" ).html( "&#9776;" ).removeClass( "close" ); 
  $('html, body').animate({
          scrollTop: offset.top
        })
});

$( ".hamburger" ).click(function() {
  if( $( this ).hasClass("close") ){
    $( "#main-nav").height( "0px" );
    $( this ).html( '&#9776;' ).removeClass( "close" );
  }
  else {
    $( "#main-nav").height( "300px" );
    $( this ).html( '&#x2715;' ).addClass( "close" );
  }
})
