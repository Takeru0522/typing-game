
let enemyHp;
const wordsList = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff', 'ggg'];
let spans;
let typed;
const words = $('.words');
const game = $('.game');
// let userHp, enemyHp, exp;
let exp = 700;
let userName = null;
// let level = 1;
const gameBtn = $('#game-btn');

/////////////////
const numArray = [];

for(let n = 0; n < 10; n++){
  
  let gap = 100 * Math.pow(1.5, n) // 1.5^n
  // console.log(gap);
  numArray.push(gap); 
}
// console.log(numArray);

let eachExp = 0;
const expArray = [];

for(let i = 0; i < numArray.length; i++){
  eachExp += numArray[i];
  // console.log(eachExp);
  expArray.push(eachExp);
}
// console.log(expArray);


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
let currentUser = level1;  // you need to change Exp if you want to change Level

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


// Define something related to User class

userHp = currentUser.hp;
fixedHp = currentUser.hp;


$('#statusLevel').text(`Level.${currentUser.level}`);
$('#statusAttack').text(`Attack:${currentUser.attack}`);

$('.userLevel').text(`Level.${currentUser.level}`)



class Monster extends User {
	constructor(level, hp, attack, img, expMonster, name){
		super(level, hp, attack, img)
		this.name = name;
		this.expMonster = expMonster;
	}
};

const slime = new Monster(1, 1000, 100, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_001.png', expArray[0], 'slime');
const killerPanther = new Monster(2, 2000, 200, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_075.png', expArray[1], 'killerPanther');
const kandata = new Monster(3, 3000, 300, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_200.png', expArray[2], 'kandata'); // Boss1
const golem = new Monster(4, 4000, 400, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_123.png', expArray[3], 'golem');
const akumaShinkan = new Monster(5, 5000, 500, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_155.png', expArray[4], 'akumaShinkan');
const milledEarth = new Monster(6, 6000, 600, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_209.png', expArray[5], 'milledEarth'); // Boss2
const killerMachine = new Monster(7, 7000, 700, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_164.png', expArray[6], 'killerMachine');
const gigantes = new Monster(8, 8000, 800, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_169.png', expArray[7], 'gigantes');
const milledEarthX = new Monster(9, 9000, 900, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_210.png', expArray[8], 'milledEarthX'); // Boss3
const ryuoh = new Monster(10, 10000, 1000, 'https://iso-labo.com/labo/images/dragon_quest/boss/1-1_boss.png', expArray[9], 'ryuoh');
// https://iso-labo.com/labo/images/dragon_quest/boss/1-2_boss.png // transformed
// final Boss
let currentMonster = slime;
// let fixedHpM = currentMonster.hp;

$('#one').on('click', () => {
	currentMonster = slime;
	// $('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#two').on('click', () => {
	currentMonster = killerPanther;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', killerPanther.img);
})

$('#three').on('click', () => {
	currentMonster = kandata;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#four').on('click', () => {
	currentMonster = golem;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#five').on('click', () => {
	currentMonster = akumaShinkan;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#six').on('click', () => {
	currentMonster = milledEarth;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#seven').on('click', () => {
	currentMonster = killerMachine;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#eight').on('click', () => {
	currentMonster = gigantes;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#nine').on('click', () => {
	currentMonster = milledEarthX;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#ten').on('click', () => {
	currentMonster = ryuoh;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})




$('.hp-num').text(`${userHp}/${currentUser.hp}`);
$('.exp-num').text(`${exp}/${expArray[currentUser.level - 1]}`);

// expArray[currentUser.level - 1]
////////////////////////////////




let newName;
const changeName = (e) => {
	e.preventDefault();
	const newName = $("input[name='userName']").val();
	console.log(newName, ': This is name');
	$("input[name='newName']").val('');
	$('#userName').text(`<${newName}>`);
	$('#userName2').text(`<${newName}>`);
	$('#userName3').text(`<${newName}>`);

} 
$('form').on('submit', changeName)

// if(userName === null){

// }
$('#submit-btn').on('click', () => {
	$('.first-page').toggleClass('remove');
	$('.second-page').toggleClass('remove');
	console.log('userName', userName);
	console.log('newName', newName)
})



// only if user level >= 3
let num1 = exp - expArray[currentUser.level - 2]; 
// console.log('level : ',currentUser.level); // 4
// console.log('exp : ', exp) //500

// console.log('475 : ', expArray[currentUser.level - 2]);
// console.log(num1); //25

let num2 = expArray[currentUser.level-1] - expArray[currentUser.level-2];
// console.log('812.5 : ', expArray[currentUser.level-1]) //
// console.log('475 : ', expArray[currentUser.level-2]) //
// console.log(num2);

let num3 = num1 / num2;
let expBar = Math.floor(num3 * 100);


$('.exp-inner').css('width', `${expBar}%`);

// function init() { // line 109
	
// 	let userHp = currentUser.hp;
// 	let monsterHp = currentMonster.hp;
// 	let userHp = currentUser.hp;
// 	let fixedHp = currentUser.hp;
// 	let hpBar = userHp / fixedHp * 100;
// }
// init();

// enemy attacks every 2s until a user dies. 
function setTimer() {
	$('.hp-inner').css('width', '100%');
	const startGame = setInterval(function() {
		userHp-= currentMonster.attack; // 
		let hpBar = userHp / fixedHp * 100;
		// $('.hp-inner').css('width', `${hpBar}%`);
		$('.hp-inner').velocity({width: `${hpBar}%`}, 1000);
		console.log('userHp', hpBar);

		console.log('User HP : ' + userHp);
		console.log('hpBar ' + hpBar);
		if(userHp <= 0){
			clearInterval(startGame);
			console.log('You lose.');
			userHp = currentUser.hp; // reset HP
			monsterHp = currentMonster.hp;
			console.log('healed HP (user)', userHp);
			console.log('healed HP (monster)', monsterHp);
			gameBtn.css('visibility', 'visible');
			$('.hp-inner').css('width', '100%');

			
			exp += currentMonster.expMonster * 0.7;
			
		}

		if(monsterHp <= 0){
			clearInterval(startGame);
			console.log('You win.');
			userHp = currentUser.hp;
			monsterHp = currentMonster.hp;
			console.log('healed HP (user)', userHp);
			console.log('healed HP (monster)', monsterHp);
			$('.hp-inner').css('width', '100%');
			gameBtn.css('visibility', 'visible');
			exp += currentMonster.expMonster;
			
		}
		if(game.hasClass('remove')){
			clearInterval(startGame);
			userHp = currentUser.hp;
			monsterHp = currentMonster.hp;
			console.log('healed HP (user)', userHp);
			console.log('healed HP (monster)', monsterHp);
			$('.hp-inner').css('width', '100%');
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


let monsterHp = currentMonster.hp;



let hpBarM = 100;

function typing(e) {
    typed = String.fromCharCode(e.which);
	
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
    let numOfWords = 0;
    for (let j = 0; j < spans.length; j++) { //checking if all the letters are typed
      	if (spans[j].className === "span bg") {
        checker++;
      	}  
      // after one word   // replaced 'spans' to 'wordArray'
     	if (checker === spans.length) { // if so, animate the words with animate.css class
        	numOfWords++;
        	monsterHp -= currentUser.attack;
        	$('#monsterImg').effect('shake', {times:2,distance:16}, 200);
        	// {times:2,distance:6},200

// $('#monsterImg').velocity({
// 	perspective: [0, 50],
// 	rotateX: 360,
// 	translateX: 60, 
// 	opacity: [1, 0.55],
// 	height: "+=350",
// 	width: "+=350"
// 	shake: 
// }, {
// 	duration: 3000,
// 	loop: 4,
// 	delay: 20
// })
			hpBarM = monsterHp / currentMonster.hp * 100;
			// $('.hp-inner-m').css('width', `${hpBarM}%`);
			$('.hp-inner-m').velocity({width: `${hpBarM}%`}, 1000);
			console.log('Monster HP Bar ', hpBarM);
    		console.log('Monster HP : ' + monsterHp);

        	$(document).off("keypress", typing);
        
        	setTimeout(function(){
        		words.className = "words"; // restart the classes
          		random(); // give another word
          		$(document).on("keypress", typing);
        	}, 400);

    	}


    }

}

    	
$('#numOfWords').text(`words`);

// hpBarM =  monsterHp / fixedHpM * 100;

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










$('#d1').click(function(){
$( "#d1" ).effect( "shake",{times:2,distance:6},200);
})










/////////////////////////////////////////////////////








