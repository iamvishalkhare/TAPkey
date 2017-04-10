<!DOCTYPE html>
<html >
<?php
session_start();
session_destroy();

?>
<head>
  <meta charset="UTF-8">
  <title>TAPkey</title>
  
  <link rel="icon" href="TAPkey/img/favicon.png" type="image/x-icon">
  <script type="text/javascript" src="TAPkey/js/login.js"></script>
  <link href="TAPkey/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="TAPkey/css/index_style.css"> 
  <script src="TAPkey/js/bootstrap.min.js"></script>

</head>

<body>
  <hgroup>
    <h1>TAPkey &#9996;</h1>
    <h3>Your TAP cell member need your details</h3>
    <em>Your Default Password is your Registration Number</em>
  </hgroup>
<form>
  <div class="group">
    <input type="text" id="id"><span class="highlight" ></span><span class="bar"></span>
    <label>Registration Number</label>
  </div>
  <div class="group">
    <input type="password" id="password"><span class="highlight" ></span><span class="bar"></span>
    <label>Password</label>
  </div>
  <div id="error_display" style="width: 100%; margin-left: auto; margin-right: auto; display: block;"></div>
  <button type="button" class="button buttonBlue" onclick="login();">Log In
    <div class="ripples buttonRipples"><span class="ripplesCircle"></span></div>
  </button>
</form>
<footer>
  <p>Designed with all the &#9829; in the world by <a href="http://www.facebook.com/iamvishalkhare" target="_blank">Vishal Khare</a></p>
</footer>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script type="text/javascript" src="TAPkey/js/index.js"></script>
  <script src="TAPkey/js/bootstrap.min.js"></script>
</body>
</html>
