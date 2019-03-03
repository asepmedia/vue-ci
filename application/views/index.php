<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vueci</title>
  <script>
  window.vuetheme = 'adminlte';
  <?php if($this->session->userdata('login')):?>
  window.vueci = <?=json_encode($this->session->userdata('login'));?>
  <?php else:?>
  window.vueci = {"status":0,"data":null}
  <?php endif;?>
  
  window.BASE_URL = '<?=base_url();?>api/';
  </script>
  <link rel="stylesheet" href="<?=base_url();?>assets/css/app.min.css" preload>
  <script src="<?=base_url();?>assets/js/app.min.js" defer></script>
</head>
<body>
  <div id="app">
    <app></app>
  </div>
</body>
</html>