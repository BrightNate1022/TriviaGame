
    $(function () {
        var timeout = 30;
        setInterval(function () {
            document.getElementById('timer').innerHTML = timeout;
            if (timeout > 0) {
                timeout--;
            } else {
                grade();
                window.location = 'page2.html';
            }
        }, 1000);
    });

$(function () {
    $('#button').mousedown(function () {
    localStorage.clear();
    var correct = 0;
    var wrong = 0;
    var unanswerd = 0;
    
    var question1 = $("input[name='question1']:checked").val();
    if (question1 == "1-B") {
        correct++;
        localStorage.setItem("correct", correct);
    } else if (question1 == null) {
        unanswerd++
        localStorage.setItem("unanswered", unanswerd);
    } else {
        wrong++;
        localStorage.setItem("wrong", wrong);
    }

    var question2 = $("input[name='question2']:checked").val();
    if (question2 == "2-C") {
        correct++;
        localStorage.setItem("correct", correct);
    } else if (question2 == null) {
        unanswerd++
        localStorage.setItem("unanswered", unanswerd);
    } else {
        wrong++;
        localStorage.setItem("wrong", wrong);
    }

    var question3 = $("input[name='question3']:checked").val();
    if (question3 == "3-D") {
        correct++;
        localStorage.setItem("correct", correct);
    } else if (question3 == null) {
        unanswerd++
        localStorage.setItem("unanswered", unanswerd);
    } else {
        wrong++;
        localStorage.setItem("wrong", wrong);
    }

    var question4 = $("input[name='question4']:checked").val();
    if (question4 == "4-B") {
        correct++;
        localStorage.setItem("correct", correct);
    } else if (question4 == null) {
        unanswerd++
        localStorage.setItem("unanswered", unanswerd);
    } else {
        wrong++;
        localStorage.setItem("wrong", wrong);
    }

    var question5 = $("input[name='question5']:checked").val();
    if (question5 == "5-C") {
        correct++;
        localStorage.setItem("correct", correct);
    } else if (question5 == null) {
        unanswerd++
        localStorage.setItem("unanswered", unanswerd);
    } else {
        wrong++;
        localStorage.setItem("wrong", wrong);
    }


});
    
    document.getElementById('correct').innerHTML = localStorage.getItem("correct");
    document.getElementById('incorrect').innerHTML = localStorage.getItem("wrong");
    document.getElementById('missed').innerHTML = localStorage.getItem("unanswered");
});
