
$(document).ready(function(){/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})
/* smooth scrolling for scroll down */
$('.scroll-down').click(function(){
  $('body,html').animate({scrollTop:$(window).scrollTop()+800},1000);
})

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#navbar' })

});

function download_for_os() {
    var file;
    if (navigator.appVersion.indexOf("Win")!=-1) file="vaultcoin-1.0.2-win32.zip";
    else if (navigator.appVersion.indexOf("Mac")!=-1) file="vaultcoin-1.0.2-macosx.zip";
    else file="https://github.com/vaultcoin-project/vaultcoin";

    window.location.href = file;
}
