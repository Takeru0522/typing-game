console.log('Hello')
let enemyHp = 100
const wordsList = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf'];
let spans;
let typed;
const words = $('.words');
const game = $('.game');
// let userHp, enemyHp, exp;
let exp = 0;

// let level = 1;
const gameBtn = $('#game-btn');

/////////////////
const numArray = [];

for(let n = 0; n < 10; n++){
  
  let gap = 100 * Math.pow(1.5, n) // 1.5^n
  // console.log(gap);
  numArray.push(gap); 
}

let eachExp = 0;
const expArray = [];

for(let i = 0; i < numArray.length; i++){
  eachExp += numArray[i];
  // console.log(eachExp);
  expArray.push(eachExp);
}
console.log(expArray);
////////////////////
////////////////////////////////////////////////////






class User {
	constructor(level, hp, attack, img){

		this.level = level;
		this.hp = hp;
		this.attack = attack;
		this.img = img;
	}
};


const level1 = new User(1, 1000, 100, ''); // 100
const level2 = new User(2, 2000, 200, ''); // 250
const level3 = new User(3, 3000, 300, ''); // 475
const level4 = new User(4, 4000, 400, '');
const level5 = new User(5, 5000, 500, '');
const level6 = new User(6, 6000, 600, '');
const level7 = new User(7, 7000, 700, '');
const level8 = new User(8, 8000, 800, '');
const level9 = new User(9, 9000, 900, '');
const level10 = new User(10, 10000, 1000, '');
const level11 = new User(11, 11000, 1100, '');
const level12 = new User(12, 12000, 1200, '');
const level13 = new User(13, 13000, 1300, '');
const level14 = new User(14, 14000, 1400, '');
const level15 = new User(15, 15000, 1500, '');

// console.log(level2);
// console.log(level1.level);
let currentUser = level1;

if(exp >= 0 && exp < expArray[0]){ // 0 <= exp < 100 ... level 1
	currentUser = level1
} else if(exp >= expArray[0] && exp < expArray[1]){ // 100 <= exp < 250  ... level 2
	currentUser = level2;
} else if(exp >= expArray[1] && exp < expArray[2]){ // 
	currentUser = level3;
} else if(exp >= expArray[2] && exp < expArray[3]){
	currentUser = level4;
} else if(exp >= expArray[3] && exp < expArray[4]){
	currentUser = level5;
} else if(exp >= expArray[4] && exp < expArray[5]){
	currentUser = level6;
} else if(exp >= expArray[5] && exp < expArray[6]){
	currentUser = level7;
} else if(exp >= expArray[6] && exp < expArray[7]){
	currentUser = level8;
} else if(exp >= expArray[7] && exp < expArray[8]){
	currentUser = level9;
} else if(exp >= expArray[8] && exp < expArray[9]){
	currentUser = level10;
} else if(exp >= expArray[9] && exp < expArray[10]){
	currentUser = level11;
} else if(exp >= expArray[10] && exp < expArray[11]){
	currentUser = level12;
} else if(exp >= expArray[11] && exp < expArray[12]){
	currentUser = level13;
} else if(exp >= expArray[12] && exp < expArray[13]){
	currentUser = level14;
} else if(exp >= expArray[13] && exp < expArray[14]){
	currentUser = level15;
}





console.log(currentUser, ' current');
console.log(currentUser.hp);


class Monster extends User {
	constructor(level, hp, attack, img, expMonster, name){
		super(level, hp, attack, img)
		this.name = name
		this.expMonster = expMonster
	}
};

const slime = new Monster(1, 1000, 100, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_001.png', expArray[0], 'slime');
const killerPanther = new Monster(2, 2000, 200, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_075.png', expArray[1]);
const kandata = new Monster(3, 3000, 300, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_200.png', expArray[2]); // Boss1
const golem = new Monster(4, 4000, 400, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_123.png', expArray[3]);
const akumaShinkan = new Monster(5, 5000, 500, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_155.png', expArray[4]);
const milledEarth = new Monster(6, 6000, 600, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_209.png', expArray[5]); // Boss2
const killerMachine = new Monster(7, 7000, 700, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_164.png', expArray[6]);
const gigantes = new Monster(8, 8000, 800, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_169.png', expArray[7]);
const milledEarthX = new Monster(9, 9000, 900, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_210.png', expArray[8]); // Boss3
const ryuoh = new Monster(10, 10000, 1000, 'https://iso-labo.com/labo/images/dragon_quest/boss/1-1_boss.png', expArray[9]);
// https://iso-labo.com/labo/images/dragon_quest/boss/1-2_boss.png // transformed
// final Boss
console.log(slime.name);

////////////////////////////////




userHp = currentUser.hp;



// enemy attacks every 2s until a user dies. 
function setTimer() {
	const startGame = setInterval(function() {
		userHp-= akumaShinkan.attack; // 
		console.log('User HP : ' + userHp);
		if(userHp <= 0){
			clearInterval(startGame);
			console.log('You win');
			userHp = currentUser.hp; // reset HP
			gameBtn.css('visibility', 'visible');
			console.log('healed HP', userHp);
		}

		if(enemyHp <= 0){
			clearInterval(startGame);
			console.log('You win.');
			userHp = currentUser.hp;
			gameBtn.css('visibility', 'visible');
		}
		if(game.hasClass('remove')){
			clearInterval(startGame);
			console.log('The battle is closed.');
		}
	}, 2000);
}





function random() {
	words.html('');
	let random = Math.floor(Math.random() * 7);
	// console.log(random)
	const wordArray = wordsList[random].split(''); // wordArray = ['a', 'l', 'p', 'h', 'a']
	// console.log(wordArray)
	for(let i = 0; i < wordArray.length; i++){
		const span = $('<span/>');
		span.addClass('span');
		span.html(wordArray[i]);
		// console.log(wordArray[i]);
		words.append(span);
	}
	spans = $('.span');
	// console.log(spans);
}





$('#before-btn').on('click', (e) => {
	setTimer();
	random();
});




function typing(e) {
	// console.log('typing is working')
	// console.log(e.which)
    typed = String.fromCharCode(e.which);
    // console.log(typed); // ok
    // console.log(spans);
    // console.log(spans[0]); // => <span class="span">g</span>
    // console.log('innerHTML : ' + spans[0].innerHTML); // => e
    // console.log('html : ' + spans[0].html); // => undefined
    // console.log(typed);
    // console.log('length : ' + spans.length);

    for (let i = 0; i < spans.length; i++) {
    	if (spans[i].innerHTML == typed) { // if typed letter is the one from the word

    		if (spans[i].classList.contains("bg")) {
    			continue;
    		} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
    			spans[i].classList.add("bg");
    			break;
    		}
    	}
    }
// if it dont have class, if it is not first letter or if the letter before it dont have class 
// (this is done to avoid marking the letters who are not in order for being checked, 
// for example if you have two "A"s so to avoid marking both of them 
// if the first one is at the index 0 and second at index 5 for example)

    let checker = 0;
    for (let j = 0; j < spans.length; j++) { //checking if all the letters are typed
      if (spans[j].className === "span bg") {
        checker++;
        // console.log(checker);
      }  
      // after one word   // replaced 'spans' to 'wordArray'
      if (checker === spans.length) { // if so, animate the words with animate.css class
        // spark.pause();
        // spark.currentTime = 0;
        // spark.play();
        // words.classList.add("animated");
        // words.classList.add("fadeOut");
        // points++; // increment the points
        // scoreDiv.innerHTML = points; //add points to the points div
        enemyHp -= 20;
    	console.log('Enemy HP : ' + enemyHp);

        $(document).off("keypress", typing);
        
        setTimeout(function(){
          words.className = "words"; // restart the classes
          random(); // give another word
          $(document).on("keypress", typing);
        }, 400);

      }

    }
}


$(document).on('keypress', typing); // console shows error when I type




$('.open-game').on('click', () => {
	$('.game-modal').toggleClass('remove'); //  + game-modal
	$('.before-game').toggleClass('remove'); //  + before-game modal
})

$('#before-btn').on('click', () => {
	$('.before-game').toggleClass('remove'); //  - before-game
	$('.game').toggleClass('remove'); //  + game

})

$('#game-btn').on('click', () => {
	$('.game').toggleClass('remove'); //  - game
	$('.after-game').toggleClass('remove');	//  + after-game
})

$('#after-btn').on('click', () => {
	$('.after-game').toggleClass('remove'); //  - after-game
	$('.game-modal').toggleClass('remove');  //  - game-modal
})



// close modal by '×' mark
$('#close-before-game').on('click', () => {
	$('.before-game').toggleClass('remove');
	$('.game-modal').toggleClass('remove');
})
$('#close-game').on('click', () => {
	$('.game').toggleClass('remove');
	$('.game-modal').toggleClass('remove');
})
$('#close-after-game').on('click', () => {
	$('.after-game').toggleClass('remove');
	$('.game-modal').toggleClass('remove');
})






















const changeName = (e) => {
	e.preventDefault();
	const newName = $("input[name='userName']").val();
	console.log(newName, ': This is name');
	$('.testDiv').text(`New name is "${newName}"`);
	$("input[name='newName']").val('');
	return newName;
}
$('form').on('submit', changeName)





// const nameFunction = (e) => {
// 	// e.preventDefault();
// 	const newName = $("input[name='userName']").val();
// 	$('#test').text(`new name is ${newName}`);

// 	$("input[name='newName']").val('');
// }

// const nameFunction = (e) => {
// 	// e.preventDefault();
// 	const newName = $("#inputName").val();
// 	console.log(newName);

// 	// $('#test').text(`new name is ${newName}`);

// 	// $("input[name='newName']").val('');
// }


// nameFunction();

$('#nameBtn').on('click', () => {
	const newName = $("#inputName").val();
	console.log(newName);
	User.name = newName;
	console.log(User.name);
})



// const changeName = (e) => {
// 	e.preventDefault();
// 	const newName = $("input[name='newName']").val();
// 	console.log(newName, ': This is name');
// 	$('.showName').text(`New name is "${newName}"`);
// 	// comment out due to problem
// 	name = newName;

// 	$('#status-name').text(`Name:${newName}`);
	

// 	$("input[name='newName']").val('');
// 	console.log(name);
// }







/////////////////////////////////////////////////////
const monsterImage = $('<img/>').attr('src', ryuoh.img);
const $testDiv = $('#testDiv')
$testDiv.append(monsterImage);


$('#test').on('click', () => {
	console.log('clicked');
	$('#test').toggleClass('remove');
})





