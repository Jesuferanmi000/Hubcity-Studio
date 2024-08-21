var modalBtn = document.querySelectorAll('.button')

modalBtn.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtn = document.querySelectorAll('.closeBtn');

closeBtn.forEach(function(btn) {
    btn.onclick = function() {
        var modal = (btn.closest('.image-info').style.display = 'none');
    };
});

window.onclick = function(e) {
    if (e.target.className === 'image-info') {
        e.target.style.display = 'none';
    }
};