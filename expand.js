var toggleButtons = document.querySelectorAll('.more');

for (var i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
    var content = this.parentNode.querySelector('.list');
    var height = content.scrollHeight;
    if (content.clientHeight == height) {
        content.style.height = "0";
        this.textContent = "More";
      } else {
        content.style.height = height + 'px';
        this.textContent = "Less";
      }
    });
}


