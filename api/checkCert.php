<?php

// GET DOMAIN TO CHECK
if(isset($_GET['domain'])) {
$domain = $_GET['domain'];


// CHECK FOR CERTIFICATE INFO


//$ssl_url = "https://".$domain;
//$ssl_url = "https://elite-star-services.com";
//$orignal_parse = parse_url($ssl_url, PHP_URL_HOST);

$get = stream_context_create(array("ssl" => array("capture_peer_cert" => TRUE)));

//$read = stream_socket_client("ssl://".$orignal_parse.":443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $get);
$read = stream_socket_client("ssl://".$domain.":443", $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $get);

$cert = stream_context_get_params($read);


$certinfo = openssl_x509_parse($cert['options']['ssl']['peer_certificate']);


// CREATE DATA USING JSON
header("Content-Type: application/json; charset=utf-8");
echo json_encode($certinfo);
}

//print_r($certinfo);
?>