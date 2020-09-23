let number = Math.floor(Math.random() * 101);
let counter = 0;

document.getElementById("check").addEventListener(
    "click",
    function() {
        let num = document.getElementById("nr_gamer").value;
        counter++;
        document.getElementById("count").innerHTML= ("This is your " + counter + ". try.");

        if (num == number) {
            alert("Congratulation! You are the winner! This is your " + counter + ". try.");
            document.getElementById("result").innerHTML = ("You are right!")
            
            let new_game = confirm("Do you wanna play again??");
            if (new_game == true){
                number = Math.floor(Math.random() * 101);
                counter = 0;
                document.getElementById("result").innerHTML = ("");
                document.getElementById("count").innerHTML= ("");
            } else {
                document.getElementById("count").innerHTML= ("");
                document.getElementById("result").innerHTML = ("");
                alert("Thanks for game!!!")
            }

        } else if (num > number) {
            // counter ++;
            document.getElementById("result").innerHTML = ("A lower number please! ");
        } else if (num < number) {
            // counter++;
            document.getElementById("result").innerHTML = ("A higher number please! ");
        } else if(isNaN(num)) {
            counter --;
            document.getElementById("result").innerHTML = ("Are you sure that this is a number?");
        }
        document.getElementById("nr_gamer").value='';   // Oyun bittikten sonra input icini sifirliyor..
        document.getElementById("nr_gamer").focus();   // input u focusluyor..
    }
)
