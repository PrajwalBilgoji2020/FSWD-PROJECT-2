$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });
});
var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for(i=0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}
