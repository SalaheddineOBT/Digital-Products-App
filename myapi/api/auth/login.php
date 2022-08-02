<?php

    include_once '../monDbConnect/dbh.php';
    include_once '../config/cors.php';
    include_once '../../vendor/autoload.php';

    use \Firebase\JWT\JWT;

    $db=new DataBase();

    if($_SERVER["REQUEST_METHOD"] == 'POST'):

        $con=$db->Connection();

        $data = json_decode(file_get_contents("php://input"));

        if( !isset($data->emlusr) || empty($data->emlusr) || 
            empty($data->password) || !isset($data->password)
        ):
            http_response_code(400);
            $db->Message(0,400,"Pleas Fill all The Required Fields !");

        else:
            try{
                $emlusr = $data->emlusr;
                $password = $data->password;
                if($db->Login($emlusr,$password)):
                    $key = "Sgenius%@obt2001#";
                    $payload = array(
                        "sub"=>"my Sybject : whom the token refers to like roles ...",
                        "iss"=>'http://localhost/mydb/',
                        "aud"=>'http://localhost/mydb/',
                        "iat"=>time(),
                        "nbf"=>time() + 31536000, //"indicates the time before which the JWT must not be accepted for processing."
                        "exp"=>time() + 31536000,
                        "user_id" => $db->Login($emlusr,$password)
                    );
                    $token = JWT::encode($payload,$key);
                    http_response_code(200);
                    echo json_encode(array(
                        'success'=>1,
                        'status'=>200,
                        'message'=>'Your Have Successfull Logined .',
                        'token'=>$token
                    ));

                else:
                    http_response_code(400);
                    $db->Message(0,400,"Email\Username Or Password Is Incorrect !");
                endif;
            }catch(PDOEception $e){
                http_response_code(500);
                $db->Message(0,500,"".$e->getMessage());
            }
        endif;
    else:
        http_response_code(100);
        $db->Message(0,500,"Page Not Found !");
    endif;

?>
