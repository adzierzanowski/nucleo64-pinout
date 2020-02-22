NodeList.prototype.addEventListeners = function(evt, callback) {
  for (let i = 0; i < this.length; i++)
  {
    this[i].addEventListener(evt, callback, false);
  }
};

function setFill(classname, fill)
{
    let pas = document.getElementsByClassName(classname);
    for (let i = 0; i < pas.length; i++)
    {
      pas[i].style.fill = fill;
    }
}

window.addEventListener('DOMContentLoaded', () => {
  let pins = document.querySelectorAll('.pin');

  pins.addEventListeners('mouseover', function() {
    let info = document.getElementById('info').firstChild;
    info.innerHTML = this.getAttribute('id');
    info.innerHTML += ': ' + this.getAttribute('inkscape:name');
  });

  let ports = ['pa', 'pb', 'pc', 'pd', 'ph'];
  let ioFill = document.getElementsByClassName('pa')[0].style.fill;

  for (let port of ports)
  {
    let btn = document.getElementById(port + '-btn');
    btn.addEventListener('mouseenter', () => { setFill(port, '#0ff'); }, false);
    btn.addEventListener('mouseleave', () => { setFill(port, ioFill); }, false);
  }
}, false);
