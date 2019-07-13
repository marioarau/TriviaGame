

var trivia = {
	question: 
		["What is an array?",
		"How do you access an array element?",
		"What is the index value of the first element?"],
	answers: 
		["A random integer",
		"A program that you can use to execute another program and anlyze its run-time behavior",
		"A sequence of values"]
		["By the name of the array followed by the index value in brackets",
		"By the name of the array followed by a dot and then the index value",
		"By the index value followed by a dot and then the name of the array"]
		["-1","0","1","2"]
}

function init() {
	countdown = 60; // seconds
	$("#start-button").hide();
	start_timer();
   
   //$(".img1A").show();
   //console.log("score[0]="+score[0]);
};

function times_up() {
	alert("Times up");
};

function start_timer() {
	timer_interval = 1000; // 1 second
	var timeInterval = setInterval(function () {
        console.log('it works' + new Date());
		countdown = countdown - 1;
		$("#countDown").text("Time Remaining: "+countdown+" Seconds");
		if (countdown == 0) {
			times_up();
			clearInterval(timeInterval);
		}
    }, timer_interval);

};

$('#start-button').click(function(){

init();

});
