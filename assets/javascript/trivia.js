
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
	["Hawaii", "Java", "Martinique"]
];

var correctAnswers = [3, 3, 3];
var correct = 0;
var wrong = 0;
var unAnswered = 0;
var ans=[-1,-1,-1]; // -1 means not set

function init() {
	countdown = 60; // seconds
	$("#start-button").show();
	$("#finished-button").hide();
	console.log("hide finished button");

	//$("#start-button").hide();
	$("#questions").hide();

	console.log("init function finished");
};

function start() {

	var answerText = "";
	$("#start-button").hide();
	$("#questions").show();
	questionLength = question.length + 1;
	j = 1;
	for (i = 1; i < question.length + 1; i++) {
		var divQuestion = $("<div>");
		//divQuestion.attr("data-name", question[i]);
		divQuestion.attr("id", "question" + i);
		divQuestion.text(question[i - 1]);
		$("#questions").append(divQuestion);
		$("#question" + i).show();
		console.log("#question" + i + "=" + question[i-1]);
		//console.log(answers[0].length)
		var divAnswers = $("<div>");
		//divQuestion.attr("data-name", question[i]);
		divAnswers.attr("id", "answers" + i);
		$("#question" + i).append(divAnswers);
		var formElem = $("<form>");
		formElem.attr("id", "radioAnswers" + i);
		$("#answers" + i).append(formElem);
		$("#answers" + i).show();
		for (j = 1; j < answers[0].length + 1; j++) {
			var inputTag = $("<input>");
			inputTag.attr("type", "radio");
			inputTag.attr("id", "radioBtn");
			inputTag.attr("data-name", "answer" + i + j);
			inputTag.attr("name", "answerBtn" + i);
			inputTag.attr("value", "" + j);
			inputTag.attr("z-index", 2);
			inputTag.attr("class", "radioBtn");
			$("#radioAnswers" + i).append(inputTag);
			var spanTag = $("<span>");
			spanTag.attr("class", ".answer");
			spanTag.text(answers[i - 1][j - 1]);
			$("#radioAnswers" + i).append(spanTag);
			//console.log("answerText=" + answers[i - 1][j - 1]);
		}
		$("#finished-button").show();

	}
	countdown = 600; // 
	start_timer();
	console.log("start function finished");
};

function times_up() {

console.log("ans[0]="+typeof(ans[0]));	alert("Times up");
};

function start_timer() {
	timer_interval = 1000; // 1 second
	var timeInterval = setInterval(function () {
		//console.log('it works' + new Date());
		countdown = countdown - 1;
		$("#countDown").text("Time Remaining: " + countdown + " Seconds");
		if (countdown == 0) {
			times_up();
			clearInterval(timeInterval);
		}
	}, timer_interval);

};

$('#finished-button').click(function () {
	var ansTemp;
	
	ans[0] = $("input[name=answerBtn1]:checked").val(); 
	console.log("ans[0]="+typeof(ans[0]));
	ans[1] = $("input[name=answerBtn2]:checked").val(); 
	console.log("ans[1]="+typeof(ans[1]));
	ans[2] = $("input[name=answerBtn3]:checked").val(); 
	console.log("ans[2]="+typeof(ans[2]));
	console.log("ans[]="+ans);
	//console.log("correctAnswers[]="+correctAnswers);

	for (i=0; i < 3; i++) {
		if (ans[i] == correctAnswers[i]) {
			correct++;
			//console.log("correct="+correct+" ans["+i+"]="+ans[i]);
		}
		else if (typeof(ans[i]) == "undefined") {
			unAnswered++;
		}
		else {
			wrong++;
			//console.log("wrong="+wrong+" ans["+i+"]="+ans[i]);
		}
	}	
	console.log("correct="+correct);
	console.log("wrong="+wrong);
	console.log("unAnswered="+unAnswered);
	$("#questions").detach();
	$("#finished-button").detach();

	var divResults = $("<div>");
	//divQuestion.attr("data-name", question[i]);
	divResults.attr("id", "results");
	results = "<h2>All Done!</h2>";
	results += "Correct Answers: "+ correct;
	results += "<br>Incorrect Answers: "+ wrong;
	results += "<br>Unanswered Answers: "+ unAnswered;
	results += "<br></p>";
	divResults.html(results);
	$("#canvas").append(divResults);
	$("#canvas").show();


});

//$("#start-button").hide();
init();
$('#start-button').click(function () {
	start();
});
