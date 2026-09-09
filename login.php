<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<?php


?>

<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <!-- <script src = "js/start.js"></script> -->
</head>

<body>
    <div id = "container">
        <div id = "outcome">
<?php
                include "connect.php";
                $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
                $bDay = filter_input(INPUT_POST, "date");

                $command = "SELECT `birthday` FROM `users` WHERE `email` = ?";
                $stmt = $dbh->prepare($command);
                $params = [$email];
                $success = $stmt->execute($params);

                if($success){
                    if($row = $stmt->fetch()){
                        if($row["birthday"] === $bDay){
                            echo "<p>Welcome Back, $email</p>";
?>
        </div>

        <div id = "form2">

            <form action="play.php" width = "100%" method = "post">
                <input type = "hidden" name = "email2" value = <?php echo $email?>>
                <div class = "input">
                    <input type= "submit" value = "start">
                </div>
            </form>
        </div>

        <div id = "outcome">
<?php                   
                        }
                        else{
        
                            echo "<p>email already taken</p>";
                            $link = "index.php";
?>
        </div>
        <div id = "form2">
  
            <form action="index.php">
                <div class = "input">
                    <input type= "submit" value = "back">
                </div>
                
            </form>
        </div>

        <div id = "outcome">
<?php  
                        }
                    }
                    else{
                        echo "<p>Welcome, $email</p>";

                        $command = "INSERT into `users` (`email`,`birthday`) VALUES (?,?)";
                        $stmt = $dbh->prepare($command);
                        $params = [$email,$bDay];
                        $success = $stmt->execute($params);
?>
        </div>

        <div id = "form2">
            <form action="play.php" method = "post">
                <input type = "hidden" name = "email2" value = <?php echo $email?>>
                
                <div class = "input">
                    <input type= "submit" value = "start">
                </div>

            </form>
        </div>
<?php  
                    }
                }
                // put some code here

?>
        <!-- </div> -->
    </div>

</body>

</html>