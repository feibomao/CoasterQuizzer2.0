<!DOCTYPE html>
<!-- A very simple PHP Template. Sam Scott, McMaster University, 2025 -->
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src = "js/login.js"></script>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id = "container">
        <div id = "form">
            <form action="login.php" id = "landing" method = "post">
                
                <div class = "input">
                    <label for="email">Email:</label>
                </div>
                <div class = "input">
                    <input type = "text" id = "email" placeholder = "email" name = "email" required>
                </div>
                <div class = "input">
                    <label for="date">Birthday:</label>
                </div>
                <div class = "input">
                    <input type = "date" id = "bday" name = "date" required>
                </div>
                <div class = "input">
                    <input id = "send" type= "submit">
                </div>

            </form>
        </div>
        <p id = "msg"></p>
    </div>

    <?php
    // put some code here
    ?>
</body>

</html>