// Go to the likes page in twitter and run this script and scroll and unlike anything that you liked before

setInterval(function(){
var divs = document.getElementsByTagName('div')
var arr = Array.prototype.slice.call( divs)
var hearts = arr.filter(x => x.getAttribute('data-testid') == 'unlike')
hearts.forEach(h => h.click())
window.scrollTo(0, document.body.scrollHeight ||document.documentElement.scrollHeight);
},1000);
