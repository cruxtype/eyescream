
  var submitted = false;

  var gform = document.querySelector('#gform');
  gform.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the default form submission behavior

    var elements = gform.querySelectorAll('*');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.transition = 'opacity 2s ease-out';
      elements[i].style.opacity = 0;
    }

    var message = document.createElement('p');
    message.textContent = 'Your submission has been processed...';
    gform.insertBefore(message, gform.firstChild);

    submitted = true;
  });
