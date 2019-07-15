
var question = [
		"What is an array?", 		
		"What are Kirin, Sapporo, Asahi, and Suntory?",
		"When Mt. Pelee erupted it killed 40,000 people. On what island is Mt. Pelee located?"	
	];
	
var answers = [
		["A random integer",
		"A program that you can use to execute another program and anlyze its run-time behavior",
		"A sequence of values"],
		["four Japanese car makers",
		"four dangerous creatures of mythology",
		"four brands of Japanese beer"],
		["Hawaii","Java","Martinique"]
	];

	function init() {
	countdown = 60; // seconds
	$("#start-button").show();
	$("#finished-button").hide();
	//$("#start-button").hide();
	$("#questions").hide();
   
   console.log("init function finished");
};

function start() {

	var answerText = "";
	$("#start-button").hide();
	$("#questions").show();
	questionLength = question.length+1;
	j = 1;
	for (i=1; i < question.length+1; i++) {
		var divQuestion = $("<div>");
		//divQuestion.attr("data-name", question[i]);
		divQuestion.attr("id", "question"+i);
		divQuestion.text(question[i-1]);
		$("#questions").append(divQuestion);
		$("#question"+i).show();
		console.log("#question"+i+"="+question[i]);
		//console.log(answers[0].length)
		var divAnswers = $("<div>");
		//divQuestion.attr("data-name", question[i]);
		divAnswers.attr("id", "answers"+i);
		$("#question"+i).append(divAnswers);
		$("#answers"+i).show();
		for (j=1; j<answers[0].length+1; j++) {
			var inputTag = $("<input>");
			inputTag.attr("type","radio");
			inputTag.attr("id", "answer"+i+j);
			inputTag.attr("name", "answer"+i+j);
			$("#answers"+i).append(inputTag);
			var spanTag = $("<span>");
			spanTag.attr("class", ".answer");
			spanTag.text(answers[i-1][j-1]);
			$("#answers"+i).append(spanTag);
			$("#answers"+i).show();
			//var divAnswer = $("<div>");
			//divAnswer.attr("id", "answerText");
			//divAnswer.text(answers[i-1][j-1]);
			//$("#answer"+i+j).append(divAnswer);
			//answerText = answers[i-1][j-1];
			console.log("answerText="+answers[i-1][j-1]);
			//$(answer).text(answers[i-1][j-1]);
		}
		$("#finished-button").show();

	}
	countdown = 600; // 
	start_timer();
	console.log("start function finished");
};

function times_up() {
	alert("Times up");
};

function start_timer() {
	timer_interval = 1000; // 1 second
	var timeInterval = setInterval(function () {
        //console.log('it works' + new Date());
		countdown = countdown - 1;
		$("#countDown").text("Time Remaining: "+countdown+" Seconds");
		if (countdown == 0) {
			times_up();
			clearInterval(timeInterval);
		}
    }, timer_interval);

};

init();
$('#start-button').click(function(){

start();

});
