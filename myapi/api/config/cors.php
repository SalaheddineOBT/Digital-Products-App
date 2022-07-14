<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 86400");
    
    if(isset($_SERVER["HTTP_ORIGIN"])):
        header("Access-Control-Allow-Origin: {$_SERVER["HTTP_ORIGIN"]}");
    endif;

    if($_SERVER["REQUEST_METHOD"] == 'OPTIONS'):

        if(isset($_SERVER["HTTP_ACCESS_REQUEST_METHOD"])):
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        endif;

        if(isset($_SERVER["HTTP_ACCESS_REQUEST_HEADERS"])):
            header("Access-Control-Allow-Headers: {$_SERVER["HTTP_ACCESS_REQUEST_HEADERS"]}");
        endif;

        exit(0);

    endif;

?>