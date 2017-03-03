//alert('hi');
var body = document.createElement('p');

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
};
var blank = "fire";
blank = getUrlParameter('header');
var content = document.createTextNode(blank);
body.appendChild(content);
var pos = document.getElementById('guts');
document.body.insertBefore(body, pos);
document.getElementById('title').append('meme')
window.document.title('banjo')
