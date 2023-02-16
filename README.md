
<html>

<head>
  <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLScC3L-MnFNjZYqC50_Ba_WaG7_RE8onL55jPniiDEz11DjVKQ/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">

    Subscribe: <input type="text" name="entry.2050885857" id="entry.2050885857"> <input type="submit" value="Submit">

  </form>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
  <script src="assets/js/jquery.min.js"></script>
<script>
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
</script>


</head>
<body>


</body>
</html>

