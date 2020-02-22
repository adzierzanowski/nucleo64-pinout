NodeList.prototype.addEventListerners = function(evt, callback) {
  for (let i = 0; i < this.length; i++)
  {
    this[i].addEventListener(evt, callback, false);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  let pins = document.querySelectorAll('.pin');

  pins.addEventListerners('mouseover', function() {
    let info = document.getElementById('info').firstChild;
    info.innerHTML = this.getAttribute('id');
    info.innerHTML += ': ' + this.getAttribute('inkscape:name');
  });
}, false);


