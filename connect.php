<?php
/**
 */
try {
    $dbh = new PDO(
        "mysql:host=localhost;dbname=coasterquizlegacy",
        "root",
        ""
    );
} catch (Exception $e) {
    die("ERROR: Couldn't connect. {$e->getMessage()}");
}

// echo "<p>It worked!!!</p>"; // success message