var mytext = "mohamed ibrahim zayed software engineer and student at the University of benha faculty of computer science and artificial intelligence";
var i = 0;

var mybutton = document.getElementById('button');
myp = document.getElementById('type');
mybutton.onclick = function() {
    var x = setInterval(function() {
        myp.textContent += mytext[i++];

        if (i >= mytext.length)
            clearInterval(x);
    }, 500)


}