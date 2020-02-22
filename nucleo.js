NodeList.prototype.addEventListerners = function(evt, callback) {
  for (let i = 0; i < this.length; i++)
  {
    this[i].addEventListener(evt, callback, false);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pin')
    .addEventListerners('mouseover', function() {
    document.getElementById('info')
        .firstChild.innerHTML = this.getAttribute('id')
          + ': ' + this.getAttribute('inkscape:name'); 
  });
}, false);


