player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
var num_1, num_2;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function send(){
    num_1 = document.getElementById("num1").value;
    num_2 = document.getElementById("num2").value;
    console.log("num1 = " + num1);
    console.log("num2 = " + num2);

    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    question_word = "<h4 id='word_display'> Question: " + num_1 + " × " + num_2 + "</h4>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Submit & Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = num_1 * num_2;
    console.log("the answer is: " + answer);
    if(get_answer == answer){
        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
    }


    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name;
    }
}