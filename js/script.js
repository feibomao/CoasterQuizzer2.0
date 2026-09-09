/**
 * 
 * Author: Colin Wei
 * File Created: March 6, 2026
 * Description: js file for game
 * 
 */

window.addEventListener("load", function () {
    //<intro>
    const c = document.getElementById("splash");
    const ctx = c.getContext("2d");

    /**
     * Initiates the application upon loading
     */
    function begin() {
        // splash.style.width = "100vw";
        ctx.globalAlpha = 1;
        timerID = setInterval(updateAnimation, 20);
    }

    /**
     * Updates introductory animation
     */
    function updateAnimation() {
        // console.log("update")
        ctx.clearRect(0, 0, c.width, c.height);

        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 0, 480, 600);

        drawCoaster();
        liftHill();

        train.x += 1;
        train.y -= 1;

        if (train.x >= 200) {
            train.alpha -= 1;
            ctx.globalAlpha = (train.alpha / 100.0);
        }

        if (ctx.globalAlpha <= 1e-2) {
            clearInterval(timerID);
            intro.style.display = "none";
            setTimeout(homePage, 1000);
        }
    }

    const train = {
        x: 0, y: 500,
        red: 255, blue: 0, green: 0,
        alpha: 100

    };

    let timerID;

    /**
     * Draws the coaster car
     */
    function drawCoaster() {
        ctx.fillStyle = "rgb(" + train.red + "," + train.green + "," + train.blue + ")";
        ctx.beginPath();
        ctx.moveTo(train.x, train.y);
        ctx.lineTo(train.x + 50, train.y - 50);
        ctx.lineTo(train.x + 20, train.y - 50);
        ctx.lineTo(train.x - 15, train.y - 15);
        ctx.closePath();
        ctx.fill();
    };

    const hill = {
        red: 0, blue: 255, green: 0,
        red1: 0, blue1: 0, green1: 0
    };

    /**
     * Draws the lift hill
     */
    function liftHill() {
        ctx.fillStyle = "rgb(" + hill.red + "," + hill.green + "," + hill.blue + ")";
        for (i = 10; i <= 460; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 500 - i + 10);
            ctx.lineTo(i + 10, 500 - i);
            ctx.lineTo(i + 10, 600);
            ctx.lineTo(i, 600);
            ctx.closePath()
            ctx.fill();
        }

        ctx.fillStyle = "rgb(" + hill.red1 + "," + hill.green1 + "," + hill.blue1 + ")";

        ctx.beginPath();

        ctx.moveTo(0, 500);
        ctx.lineTo(480, 20);
        ctx.lineTo(480, 30);
        ctx.lineTo(0, 510);
        ctx.closePath();
        ctx.fill();
    }

    //</intro>

    //<homepage>
    let help = document.getElementById("help");
    let start = document.getElementById("start");

    /**
     * loads the game's home page
     */
    function homePage() {
        // container.style.backgroundColor = "lightblue";
        introPage.style.display = "block";
    }

    start.addEventListener("click", function () {
        match = new game(array);
        person = new player();
        introPage.style.display = "none";
        qPrelude();
    });

    help.addEventListener("click", function () {
        introPage.style.display = "none";
        helpPage();
    })


    //</homepage>

    //<instructions>
    let back = document.getElementById("return");

    /**
     * loads instructions page
     */
    function helpPage() {
        instructions.style.display = "block";
    }

    back.addEventListener("click", function () {
        instructions.style.display = "none";
        homePage();
    })
    //</instructions>

    //<classes>
    class qs {
        constructor(q, A, B, C, D, correctAns, maxScore, timeP, time) {
            this.q = q
            this.A = A;
            this.B = B;
            this.C = C;
            this.D = D;
            this.correctAns = correctAns;
            this.maxScore = maxScore;

            this.timeP = timeP;
            this.timePR = this.timeP;

            this.time = time;
            this.timeR = this.time;
        }
    }

    const q0 = new qs("What is the height range of a hyper coaster?", "Taller than 200 ft", "From 200ft to 299 ft", "shorter than 200 ft", "exactly 200 ft", "B", 1000, 3, 15000);
    const q1 = new qs("What is the tallest coaster with a lift hill?", "Red Force", "Steel Dragon 2000", "Pantherian", "Fury 325", "D", 1000, 3, 15000);
    const q2 = new qs("Which coaster was the first to use tubular steel track?", "Corkscrew (Cedar Point)", "Matterhorn Bobsled", "New Revolution", "Whizzer", "B", 1000, 3, 15000);
    const q3 = new qs("What type of trains do converted stand-ups usually receive?", "Floorless", "Spinning", "Wing", "Inverted", "A", 2000, 3, 10000);
    const q4 = new qs("How many inversions does holder of the North American inversion record have?", "14", "10", "9", "7", "C", 2000, 3, 10000);
    const q5 = new qs("What is the name of an element commonly found on B&M flyers", "pretzel knot", "pretzel turn", "pretzel loop", "pretzel roll", "C", 2000, 3, 10000);
    const q6 = new qs("How many rails are on a 4-Dimension Coaster such as X2?", "5", "1", "4", "2", "C", 2000, 3, 10000);
    const q7 = new qs("How many Batman The Ride clones have been built, both identical and mirror?", "12", "10", "15", "8", "A", 3000, 3, 5000);
    const q8 = new qs("Before its current SW number, which was Galactica's planned SW number?", "2", "5", "1", "4", "D", 3000, 3, 5000);
    const q9 = new qs("Which of these coasters has an identical clone?", "Takabisha", "Manta (SeaWorld Orlando)", "Medusa (Six Flags Great Adventure)", "Oblivion", "B", 3000, 3, 5000);
    const array = [q0]
    // const array = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];

    class player {
        name;
        score;
        constructor() {
            this.score = 0;
        }
    }

    class game {
        currentQ;
        constructor(qArr) {
            this.qArr = qArr
            this.currentQ = 0;
        }
    }

    //</classes>
    //<gameplay>

    //<prelude>

    let preQ = document.getElementById("preQ");
    let preCD = document.getElementById("preCD");
    let qNum = document.getElementById("qNum");

    /**
     * Introduces the question.
     */
    function qPrelude() {
        qNum.innerHTML = "Question " + (match.currentQ + 1)
        question = match.qArr[match.currentQ];
        prelude.style.display = "block";
        preQ.innerHTML = question.q;
        preCD.innerHTML = question.timeP;
        timerID = setInterval(cdPrelude, 1000);
    }

    /**
     * Timer for the question introduction page
     */
    function cdPrelude() {
        question.timeP -= 1;
        preCD.innerHTML = question.timeP;

        if (question.timeP <= 0) {
            clearInterval(timerID);
            prelude.style.display = "none";
            loadQuestion();
        }
    }
    //</prelude>
    //<question>

    let theQ = document.getElementById("theQ");
    let choiceA = document.getElementById("choiceA");
    let choiceB = document.getElementById("choiceB");
    let choiceC = document.getElementById("choiceC");
    let choiceD = document.getElementById("choiceD");

    let opA = document.getElementById("opA");
    let opB = document.getElementById("opB");
    let opC = document.getElementById("opC");
    let opD = document.getElementById("opD");

    let countdown = document.getElementById("countdown");

    /**
     * Shows the question along with potential answers and the buttons to submit an answer
     */
    function loadQuestion() {
        questions.style.display = "block";
        theQ.innerHTML = question.q;
        choiceA.innerHTML = "A) " + question.A;
        choiceB.innerHTML = "B) " + question.B;
        choiceC.innerHTML = "C) " + question.C;
        choiceD.innerHTML = "D) " + question.D;

        countdown.innerHTML = question.time;
        timerID = setInterval(tickTock, interval);
    }

    const interval = 100;
    /**
     * Countdown for the question page. The timer here is involved in calculating score
     */
    function tickTock() {
        question.time -= interval;
        show = question.time / 1000.0;
        countdown.innerHTML = show;

        if (question.time <= 0) {
            clearInterval(timerID);
            correctAns("E")
        }
    }

    opA.addEventListener("click", function () {
        correctAns("A");
    });

    opB.addEventListener("click", function () {
        correctAns("B");
    });

    opC.addEventListener("click", function () {
        correctAns("C");
    });

    opD.addEventListener("click", function () {
        correctAns("D");
    });

    //</question>
    //<result>


    let disp = document.getElementById("disp");
    let nextQ = document.getElementById("nextQ");
    let scoreDisp = document.getElementById("scoreDisp");

    /**
     * Appears after the question is answered/time runs out. Shows whether the user is correct or not
     */
    function correctAns(answer) {
        clearInterval(timerID);
        questions.style.display = "none";
        resultQ.style.display = "block";
        match.currentQ += 1;

        if (question.correctAns == answer) {
            disp.innerHTML = "CORRECT!";
            fraction = question.time * 1.0 / question.timeR;
            points = Math.round(question.maxScore * fraction);
            person.score += points;
        }
        else if (answer == "E") {
            disp.innerHTML = "OUT OF TIME";
        }
        else {
            disp.innerHTML = "incorrect";
        }
        scoreDisp.innerHTML = "Score: " + person.score;

        if (match.currentQ < match.qArr.length) {
            nextQ.value = "Next Question";
        }
        else {
            nextQ.value = "Finish";
        }

        question.timeP = question.timePR;
        question.time = question.timeR

    }

    nextQ.addEventListener("click", function () {
        resultQ.style.display = "none";
        if (nextQ.value == "Finish") {
            gameEnd();
        }
        else {
            qPrelude();
        }
    });

    //</result>
    //</gameplay>

    //<endpage>
    const leaderboard = [];
    const topNum = 20;
    const colLen = 10;
    let totalScore = document.getElementById("totalScore");
    let name = document.getElementById("name");
    let send = document.getElementById("send");
    let errorMSG = document.getElementById("errorMSG");
    let newGame = document.getElementById("newGame");
    let ranks = document.getElementById("rank1");
    let ranks2 = document.getElementById("rank2");
    let end = document.getElementById("end");
    let score = document.getElementById("score");

    /**
     * Displays the game over page. Appears after all questions have been answered
     */
    function gameEnd() {
        gameOver.style.display = "block";
        totalScore.innerHTML = person.score;
        // if (localStorage.topPlayers) {
        //     retrieve = [];
        //     retrieve = JSON.parse(localStorage.topPlayers);

        //     for (i = 0; i < retrieve.length; i++) {
        //         leaderboard[i] = retrieve[i];
        //     }
        //     displayBoard();
        // }
        // checkRank();
    }

    end.addEventListener("submit", function(){
        score.value = person.score;
    });

    /**
     * Checks whether the player made it onto the leaderboard
     */
    // function checkRank() {
    //     if (leaderboard.length < topNum || person.score >= leaderboard[topNum - 1].score) {
    //         errorMSG.innerHTML = "You made it into the top " + topNum + "! You can enter your name and submit your score!";
    //         send.disabled = false;
    //     }
    //     else {
    //         send.disabled = true;
    //         errorMSG.innerHTML = "Unfortunately, you aren't in the top " + topNum + ". Try again and see if you can make it!";
    //     }
    // }


    // newGame.addEventListener("click", function () {
    //     gameOver.style.display = "none";
    //     homePage();
    // })

    //<scoreboard>

    /**
     * Displays leaderboard
     */
    function displayBoard() {
        ranks.innerHTML = "";
        ranks2.innerHTML = "";
        let len;
        let len2;
        if (leaderboard.length < colLen) {
            len = leaderboard.length;
            len2 = colLen;
        }
        else {
            len = colLen;
            len2 = leaderboard.length;
        }

        for (i = 0; i < len; i++) {
            ranks.innerHTML += "<p>" + parseInt(1 + i) + ") " + leaderboard[i].name + ": " + leaderboard[i].score + "</p>";
        }

        for (i = colLen; i < len2; i++) {
            ranks2.innerHTML += "<p>" + parseInt(i + 1) + ") " + leaderboard[i].name + ": " + leaderboard[i].score + "</p>";
        }
    }

    // send.addEventListener("click", function () {
    //     errorMSG.innerHTML = "Name has been submitted. See if you can get a better score!";
    //     if (name.value == "") {
    //         errorMSG.innerHTML = "Your name needs at least one charcter";
    //     }
    //     else {
    //         person.name = name.value;

    //         if (leaderboard.length < topNum) {
    //             leaderboard[leaderboard.length] = person;
    //         }
    //         else {
    //             leaderboard[topNum - 1] = person;
    //         }
    //         name.value = "";
    //         send.disabled = true;
    //         sort();
    //         console.log(leaderboard);
    //         displayBoard();
    //         localStorage.topPlayers = JSON.stringify(leaderboard);

    //     }
    // })

    /**
     * Sorts the list from highest to lowest score
     */
    function sort() {
        for (i = 1; i < leaderboard.length; i += 1) {
            for (j = i; j > 0; j -= 1) {
                if (leaderboard[j].score >= leaderboard[j - 1].score) {
                    temp = leaderboard[j];
                    leaderboard[j] = leaderboard[j - 1];
                    leaderboard[j - 1] = temp;
                }
                else {
                    break;
                }
            }
        }
    }
    //</scoreboard>
    //</endpage>

    //email = document.getElementById("email").innerHTML;
    //hide = document.getElementById("hide");
    email = document.getElementById("hide").value;
    problem = document.getElementById("errMsg");

    
    if (email !== ""){
        begin();
        console.log("start");
    }
    else{
        problem.style.display = "block";
    }

})