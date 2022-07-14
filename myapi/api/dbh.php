<?php
    class DataBase{
        private $con;
        public function Connection(){
            $this->con =null;
            try{
                $this->con = new PDO('mysql:host=localhost;dbname=mydb','root','');
                $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $this->con;
            }catch(PDOException $ex){
                echo "Connection Error ! ".$ex->getMessage();
                exit;
            }
        }

        function Message($success,$status,$message){
            echo json_encode(array(
                'success'=>$success,
                'status'=>$status,
                'message'=>$message
            ));
        }

        public function SelectedUserByEmlUsrnm($email,$username){
            $sql='SELECT * FROM users WHERE email="'.$email.'" OR username="'.$username.'"';
            $stmt=$this->con->prepare($sql);
            $stmt->execute();
            if($stmt->rowCount()):
                return true;
            endif;
            return false;
        }

        public function Login($emlusn,$password){
            $sql='SELECT * FROM users WHERE email="'.$emlusn.'" OR username="'.$emlusn.'"';
            $stmt=$this->con->prepare($sql);
            $stmt->execute();
            if($stmt->rowCount()):
                $row=$stmt->fetch(PDO::FETCH_ASSOC);
                $checkPass = password_verify($password,$row['password']);
                if($checkPass):
                    return $row["id"];
                endif;
            endif;
            return null;
        }

        public function Register($username,$email,$password){
            $sql='INSERT INTO users(username,email,password,isActive) VALUES("'.$username.'","'.$email.'","'.password_hash($password,PASSWORD_DEFAULT).'",true);';
            $stmt=$this->con->prepare($sql);
            if($stmt->execute()):
                return true;
            endif;
            echo ''.$stmt->error;
            return false;
        }

    }

?>
