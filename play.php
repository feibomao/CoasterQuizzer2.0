<!--
Author: Colin Wei
File Created: March 3, 2026
Description: html file for game
-->


<!doctype html>

<html>

<head>
    <meta charset="utf-8">
    <title>Coaster Quiz</title>
    <meta name="viewport" content="width=device-width">
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>

<?php
    $emailP = filter_input(INPUT_POST, "email2", FILTER_VALIDATE_EMAIL);
    // if ($emailP === NULL){
    //     echo "<p>error: no email</p>";
    // }
?>

    <div id="container">
       
        <div id = errMsg>
            <h1 id = errTxt>error: no email</h1>
            <div id = "form2">
                <form action="index.php" method = "post">
                    <div class = "input">
                        <input type= "submit" value = "back to login">
                    </div>
                </form>
                <!-- </div> -->
            </div>
        </div>
        
        <input type = "hidden" id = "hide" value = <?php echo $emailP ?>>


        <div id="intro" class="centre">
            <canvas id="splash" width="480" height="600" style="background-color: lightblue;"></canvas>
        </div>

        <div id="introPage">
            <h1 id="title">Coaster Quizzer</h1>
            <div class="flexButton">
                <input id="start" type="button" value="START">
            </div>
            <div class="flexButton">
                <input id="help" type="button" value="INSTRUCTIONS">
            </div>

        </div>

        <div id="instructions">
            <h1>HOW TO PLAY</h1>

            <ol>
                <li>This is a quiz game, and the subject is roller coasters</li>
                <li>There are 10 questions total. You are given 4 options, and only one of them is correct.</li>
                <li>To answer the question, tap the button with the letter corresponding to your answer.</li>
                <li>Answer them correctly to earn points. Answering them faster gets you more points.</li>
                <li>At the end, if you end up in the top 20, you can add your name and score to the leaderboard.</li>
            </ol>

            <div class="flexButton">
                <input id="return" type="button" value="Back">
            </div>
        </div>

        <div id="questions">
            <h1 id="theQ">Question</h1>
            <div id="top">
                <div id="text">
                    <h3 id="choiceA">answer</h3>
                    <h3 id="choiceB">answer</h3>
                    <h3 id="choiceC">answer</h3>
                    <h3 id="choiceD">answer</h3>
                </div>

                <div id="timer">
                    <h1 id="countdown"></h1>
                </div>
            </div>

            <div id="ansButtons">
                <input id="opA" class="ans" type="button" value="A">
                <input id="opB" class="ans" type="button" value="B">
                <input id="opC" class="ans" type="button" value="C">
                <input id="opD" class="ans" type="button" value="D">
            </div>
        </div>

        <div id="prelude">
            <h1 id="qNum"></h1>
            <h1 id="preQ"></h1>
            <h1 id="preCD"></h1>
        </div>

        <div id="resultQ">
            <h1 id="disp"></h1>
            <h1 id="scoreDisp"></h1>

            <div class="flexButton">
                <input id="nextQ" type="button" value="">
            </div>

        </div>

        <div id="gameOver">
            <div id = "padThis">
                <h1>And that's the game!</h1>
            </div>
            <div id="scoreboard">
                <h2>Score: </h2>
                <h2 id="totalScore"></h2>
            </div>

            <form action="leaderboard.php"  id = "end" method = "post">
                <input type = "hidden" name = "email" value = <?php echo $emailP?>>
                <input type = "hidden" id = "score" name = "score" value = "">
                <div class = "input">
                    <input type= "submit" value = "results">
                </div>
            </form>
            <!-- <h3 id="errorMSG">-</h3>

            <div id="submitScore">
                <input id="name" type="text">
                <input id="send" type="button" value="submit">
            </div>


            <div class="flexButton">
                <input id="newGame" type="button" value="Start Menu">
            </div>

            <h3>leaderboard</h3>
            <div id="rankCols">
                <div id="rank1">

                </div>
                <div id="rank2">

                </div>
            </div> -->
        </div>

    </div>

</body>

</html>