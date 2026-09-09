<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src = "js/login.js"></script> -->
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id = "container">
    <?php
    include "connect.php";

    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
    $score = filter_input(INPUT_POST, "score", FILTER_VALIDATE_INT);



    $command = "INSERT into `results` (`email`,`score`) VALUES (?,?)";
    $stmt = $dbh->prepare($command);
    $params = [$email,$score];
    $success = $stmt->execute($params);
    // if($success){
    // }

    $command = "SELECT * FROM `highscore` WHERE `email` = ?";
    $stmt = $dbh->prepare($command);
    $params = [$email];
    $success = $stmt->execute($params);

    if($success){
        if ($row = $stmt->fetch()){

            if($score > $row["highScore"]){
                $command = "UPDATE `highscore` SET `highScore` = ?";
                $stmt = $dbh->prepare($command);
                $params = [$score];
                $success = $stmt->execute($params);            
            }
            
        }
        else{
            $command = "INSERT into `highscore` (`email`,`highScore`) VALUES (?,?)";
            $stmt = $dbh->prepare($command);
            $params = [$email,$score];
            $success = $stmt->execute($params);

        }
    }

    $command = "SELECT * from `highscore` ORDER BY highScore DESC LIMIT 5";
    $stmt = $dbh->prepare($command);
    $params = [];
    $success = $stmt->execute($params);
?>
    <div>
        <h1 id = "lBoard">leaderboard</h1>
    </div>
    <ol>

<?php

    if($success){
        while($row = $stmt->fetch()){
            echo "<li>".$row["email"].": ".$row["highScore"]."</li>";
        }
    }
    // put some code here
    ?>
    </ol>    

    <div id = "form2">
        <form action="index.php"  id = "start" method = "post">
            <div class = "input">
                <input type= "submit" value = "back to login">
            </div>
        </form>
        </div>
    </div>

</body>

</html>