var questions = ["Who's your favorit comic book hero?", "Are you a dog or cat person?","What's your favorite book?","What's your favorite movie?","What's your favorite band?","What sport did you play the most growing up?","Where were you born?","Where will your greatest accomplishment happen?","What's your spirit animal?","Are you a ron, harry, or hermioni?", "Team Edward or team Jacob?", "Plane, train or automobile?", "City, suburbs or country?", "Roller coaster or water slide?", "Your next vacation spot?", "Mountains or Beach?", "Cake or pie?", "Would you have a person chef or private plan?", "What did you want to be when you grew up?", "Skateboard, roller blades, or bicycle?", "Would you rather own a pet dragon or a flying car?", "Would you rather fight a shark in water or a bear on land?", "Star wars or star trek?", "Would you trade 5 years of your life for 1 billion dollars?", "Would you rather have 1 trillion dollars or a warp drive powered space ship?", "Jet pack or rocket boots?", "Would you rather never use a chair or never use a table?", "Favorite toy as a kid?", "Halloween or new years?", "Tree fort or snow fort?"]

//populate questions onload
var pickOne = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions1").innerHTML = pickOne
for(i = 0; i < questions.length; i++) {
	if(pickOne == questions[i]) {
		questions.splice(i, 1)
	}
}

var pickTwo = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions2").innerHTML = pickTwo
for(i = 0; i < questions.length; i++) {
	if(pickTwo == questions[i]) {
		questions.splice(i, 1)
	}
}

var pickThree = questions[Math.floor(Math.random()*questions.length)]
document.getElementById("questions3").innerHTML = pickThree
for(i = 0; i < questions.length; i++) {
	if(pickThree == questions[i]) {
		questions.splice(i, 1)
	}
}

var students = 10
var redTeam = 0
var blueTeam = 0

function sortingHat() {
	changeVars()

	//start new questions on click
	var pickOne = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions1").innerHTML = pickOne
	document.getElementById("input1").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickOne == questions[i]) {
			questions.splice(i, 1)
		}
	}
	var pickTwo = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions2").innerHTML = pickTwo
	document.getElementById("input2").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickTwo == questions[i]) {
			questions.splice(i, 1)
		}
	}

	var pickThree = questions[Math.floor(Math.random()*questions.length)]
	document.getElementById("questions3").innerHTML = pickThree
	document.getElementById("input3").value = ""
	for(i = 0; i < questions.length; i++) {
		if(pickThree == questions[i]) {
			questions.splice(i, 1)
		}
	}

	if(document.getElementById("questions1").innerHTML == "undefined") {
		document.getElementById("form").style.display = "none"
	}
}

function onRedTeam() {
	document.getElementById("redTeam").style.display = "block"
}

function onBlueTeam() {
	document.getElementById("blueTeam").style.display = "block"
}



//sorts students into team vars
function changeVars() {
	if(students == 10) {
		students = students - 1
		redTeam = redTeam + 1
		onRedTeam()
	} else if(students == 9) {
		students = students - 1
		blueTeam = blueTeam + 1
		onBlueTeam()
	} else if(students == 8) {
		students = students - 1
		blueTeam = blueTeam + 1
		onBlueTeam()
	} else if(students == 7) {
		students = students - 1
		redTeam = redTeam + 1
		onRedTeam()
	} else if(students == 6) {
		students = students - 1
		redTeam = redTeam + 1
		onRedTeam()
	} else if(students == 5) {
		students = students - 1
		blueTeam = blueTeam + 1
		onBlueTeam()
	} else if(students == 4) {
		students = students - 1
		redTeam = redTeam + 1
		onRedTeam()
	} else if(students == 3) {
		students = students - 1
		blueTeam = blueTeam + 1
		onBlueTeam()
	} else if(students == 2) {
		students = students - 1
		redTeam = redTeam + 1
		onRedTeam()
	} else if(students == 1) {
		students = students - 1
		blueTeam = blueTeam + 1
		onBlueTeam()
	}
}

function sortAnotherStudent() {
	document.getElementById("blueTeam").style.display = "none"
	document.getElementById("redTeam").style.display = "none"
	if(students == 0) {
		sortingComplete()
		console.log("complete")
	}
}

function sortingComplete() {
	document.getElementById("sortingComplete").style.display = "block"
}


