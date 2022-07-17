<?php

    include_once '../monDbConnect/dbh.php';
    include_once '../config/cors.php';
    include_once '../../vendor/autoload.php';

    use \Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    $db=new DataBase();
    $allHeader = getallheaders();

    if(isset($allHeader['Authorization']) && $_SERVER["REQUEST_METHOD"] == 'POST'):
        $token = explode(" ",$allHeader['Authorization'])[1];
        try{
            $key = "Sgenius%@obt2001#";
            $decode = JWT::decode($token,new Key($key, 'HS256'));
            echo json_encode(array(
                'success'=>1,
                'status'=>200,
                'message'=>'Token Decoded SuccessFully .',
                'decode'=>$decode
            ));
        }catch(Exception $e){
            $db->Message(0,500,"".$e);
        }
    else:
        http_response_code(100);
        $db->Message(0,500,"Unauthorized !");
    endif;

?>