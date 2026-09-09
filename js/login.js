window.addEventListener("load", function(){
    email = document.getElementById("email");
    bday = document.getElementById("bday");
    //email = document.getElementById("email2");
    
    landing = document.getElementById("landing");
    msg = document.getElementById("msg");
//    bill = document.getElementById("inputs");

    landing.addEventListener("submit", function(event){
        console.log("hello");
        inEmail = email.value;
        inBDay = bday.value;

        hasAt = false;
        hasDot = false;
        validDate = false;
        slashCount = 0;

//        if()

        for(i = 0; i < inEmail.length; i++){
            if (inEmail[i] === "@"){
                hasAt = true;
            }
            if(inEmail[i] === "." && hasAt){
                hasDot = true;
            }
        }
        
        // if(bday.length == 10){
        //     for(i = 0; i < inBDay.length; i++){
        //         if(inBDay[i] === "/"){
        //             if(i == 2 && substring){

        //             }
        //             else if(){

        //             }
        //             else if(){

        //             }
        //         }
        //     }
        // }

        if(!hasAt && !hasDot){
            event.preventDefault();
            msg.innerHTML = "error: email must be in form a@b.c";
        }

        // // num = card.value;
        // if(email1.value != email2.value){
        //     console.log("emails don't match");
        //     event.preventDefault();
        // }
    })
});