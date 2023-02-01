<!DOCTYPE html>
<html>

<head>
  <form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLScC3L-MnFNjZYqC50_Ba_WaG7_RE8onL55jPniiDEz11DjVKQ/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">

    Subscribe: <input type="text" name="entry.2050885857" id="entry.2050885857"> <input type="submit" value="Submit">

  </form>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
  <script src="assets/js/jquery.min.js"></script>
  <script type="text/javascript">
    var submitted = false;
  </script>
  <script type="text/javascript">
    $('#gform').on('submit', function(e) {
      $('#gform *').fadeOut(2000);
      $('#gform').prepend('Your submission has been processed...');
    });
  </script>
  <style>
    video {
      position: fixed;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -100;
      transform: translateX(-50%) translateY(-50%);
      background: url('path/to/video-poster.jpg') no-repeat;
      background-size: cover;
    }
  </style>
</head>

<body>
  <video autoplay loop>
    <source src="braveheart.mp4" type="video/mp4">
  </video>
</body>
</html>
