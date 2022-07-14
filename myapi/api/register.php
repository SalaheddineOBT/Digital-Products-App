<?php

    include_once 'dbh.php';
    include_once 'config/cors.php';

    $db=new DataBase();

    if($_SERVER["REQUEST_METHOD"] == 'POST'):

        $con=$db->Connection();

        $data = json_decode(file_get_contents("php://input"));

        if( !isset($data->email) || empty($data->email) || 
            empty($data->password) || !isset($data->password) ||
            empty($data->username) || !isset($data->username)
        ):
        http_response_code(400400);
            $db->Message(0,400,"Pleas Fill all The Required Fields !");

        else:

            $username=$data->username;
            $email=trim($data->email);
            $password=$data->password;

            if(!filter_var($email,FILTER_VALIDATE_EMAIL)):
                http_response_code(400);
                $db->Message(0,400,"Invalid Email Format !");
            elseif(strlen($password) < 8):
                http_response_code(400);
                $db->Message(0,400,"Your Password is not match !");
            elseif(strlen($username) < 3):
                http_response_code(400);
                $db->Message(0,400,"Your User Name is not match !");
            else:
                try{
                    if($db->SelectedUserByEmlUsrnm($email,$username)):
                        http_response_code(400);
                        $db->Message(0,400,"This Email or username Already Exist !");
                    elseif($db->Register($username,$email,$password)):
                        http_response_code(201);
                        $db->Message(0,200,"Successfull Register .");
                    endif; 
                }catch(PDOEception $e){
                    echo $e->getMessage();
                    http_response_code(500);
                    $db->Message(0,500,"".$e->getMessage());
                }
            endif;

        endif;

    else:
        http_response_code(100);
        $db->Message(0,500,"Page Not Found !");

    endif;

?>