<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
  }

	public function login()
	{
		$data = array(
      'email' => 'asep@asep.com'
    );
    
    $this->session->set_userdata(array(
      'login' => array(
        'status' => 1,
        'data' => $data
      )
    ));

    echo json_encode(array('status' => true));
  }

  public function logout()
	{
    $this->session->unset_userdata('login');

    echo json_encode(array('status' => true));
  }
}
