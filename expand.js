function toggleExpand() {
    var elements = document.querySelectorAll('.list');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var height = element.scrollHeight;
      if (element.clientHeight == height) {
        element.style.height = "0px";
      } else {
        element.style.height = height + 'px';
      }
    }
  }