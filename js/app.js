
let enemyHp;
const wordsList = ['aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa'];
let spans;
let typed;
const words = $('.words');
const game = $('.game');
let monsterHp;



// Define expArray that holds required Exp to go to next level
const numArray = [];
for(let n = 0; n < 10; n++){  
  let gap = 100 * Math.pow(1.5, n) // 1.5^n
  numArray.push(gap); 
}
let eachExp = 0;
const expArray = [];
for(let i = 0; i < numArray.length; i++){
  eachExp += numArray[i];
  eachExp = Math.floor(eachExp);
  expArray.push(eachExp);
}
console.log(expArray);
// [100, 250, 475, 812.5, 1318.75, 2078.125, 3217.1875, 4925.78125, 7488.671875, 11333.0078125]


class User {
	constructor(level, hp, attack, img){
		this.level = level;
		this.hp = hp;
		this.attack = attack;
		this.img = img;
	}
};

const level1 = new User(1, 1000, 100, '');
const level2 = new User(2, 2000, 200, '');
const level3 = new User(3, 3000, 300, '');
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


let currentUser;  // you need to change Exp if you want to change Level

let exp = 240;
function setUserLevel(){
if(exp >= 0 && exp < expArray[0]){ // 0 <= exp < 100 ... level 1
	currentUser = level1
} else if(exp >= expArray[0] && exp < expArray[1]){ // 100 <= exp < 250  ... level 2
	currentUser = level2;
} else if(exp >= expArray[1] && exp < expArray[2]){ 
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



}
setUserLevel();





class Monster extends User {
	constructor(level, hp, attack, img, expMonster, name){
		super(level, hp, attack, img)
		this.name = name;
		this.expMonster = expMonster;
	}
};

const Slime = new Monster(1, 1000, 100, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_001.png', expArray[0], 'Slime');
const KillerPanther = new Monster(2, 2000, 200, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_075.png', expArray[1], 'KillerPanther');
const Kandata = new Monster(3, 3000, 300, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_200.png', expArray[2], 'Kandata'); // Boss1
const Golem = new Monster(4, 4000, 400, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_123.png', expArray[3], 'Golem');
const AkumaShinkan = new Monster(5, 5000, 500, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_155.png', expArray[4], 'AkumaShinkan');
const MilledEarth = new Monster(6, 6000, 600, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_209.png', expArray[5], 'MilledEarth'); // Boss2
const KillerMachine = new Monster(7, 7000, 700, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_164.png', expArray[6], 'KillerMachine');
const Gigantes = new Monster(8, 8000, 800, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_169.png', expArray[7], 'Gigantes');
const MilledEarthX = new Monster(9, 9000, 900, 'https://iso-labo.com/labo/images/dragon_quest/dq5/5_210.png', expArray[8], 'MilledEarthX'); // Boss3
const Ryuoh = new Monster(10, 10000, 1000, 'https://iso-labo.com/labo/images/dragon_quest/boss/1-1_boss.png', expArray[9], 'Ryuoh');
// https://iso-labo.com/labo/images/dragon_quest/boss/1-2_boss.png // transformed
// final Boss
let currentMonster = Slime;




// let fixedHpM = currentMonster.hp;
function render (){
	let userHp = currentUser.hp;
	let monsterHp = currentMonster.hp;
	console.log('monsterHp ', monsterHp);
	let expBar;
	let hpBarM = monsterHp / currentMonster.hp * 100;
	if(currentUser.level === 1){
		expBar = exp / expArray[0] * 100;
	} else {
		let num1 = exp - expArray[currentUser.level - 2]; 
		let num2 = expArray[currentUser.level-1] - expArray[currentUser.level-2];
		let num3 = num1 / num2;
		expBar = Math.floor(num3 * 100);
	}
	

	$('.exp-inner').css('width', `${expBar}%`);
	$('.exp-inner').velocity({width: `${expBar}%`}, 1000);
	$('.hp-inner').velocity({width: '100%'}, 1000);
	$('.hp-inner').css('width', '100%');
	$('.hp-num').text(`${userHp}/${currentUser.hp}`);
	$('.exp-num').text(`${exp}/${expArray[currentUser.level - 1]}`);

	$('.hp-inner-m').velocity({width: `${hpBarM}%`}, 1000);
    $('#monsterImg').effect('shake', {times:2,distance:16}, 200);
    

	$('#statusLevel').text(`Level.${currentUser.level}`);
	$('#statusAttack').text(`Attack:${currentUser.attack}`);

	$('.userLevel').text(`Level.${currentUser.level}`)

}
render();


$('#one').on('click', () => {
	currentMonster = Slime;
	// $('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
	render();
})

$('#two').on('click', () => {
	currentMonster = KillerPanther;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#three').on('click', () => {
	currentMonster = Kandata;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#four').on('click', () => {
	currentMonster = Golem;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#five').on('click', () => {
	currentMonster = AkumaShinkan;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#six').on('click', () => {
	currentMonster = MilledEarth;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#seven').on('click', () => {
	currentMonster = KillerMachine;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#eight').on('click', () => {
	currentMonster = Gigantes;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#nine').on('click', () => {
	currentMonster = MilledEarthX;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})

$('#ten').on('click', () => {
	currentMonster = Ryuoh;
	$('#monsterName').text(`<${currentMonster.name}>`);
	$('#monsterImg').attr('src', currentMonster.img);
})







const changeName = (e) => {
	e.preventDefault();
	let userName = $("input[name='userName']").val();
	$('.userName').text(`<${userName}>`);
} 
$('form').on('submit', changeName)


$('#submit-btn').on('click', () => {
	$('.first-page').toggleClass('remove');
	$('.second-page').toggleClass('remove');
})






// enemy attacks every 2s until a user dies. 
function setTimer() {
	let userHp = currentUser.hp;
	
	// let monsterHp = currentMonster.hp;
	const startGame = setInterval(function() {
		userHp -= currentMonster.attack; // 
		let hpBar = userHp / currentUser.hp * 100;


		// $('.hp-inner').css('width', `${hpBar}%`);
		$('.hp-inner').velocity({width: `${hpBar}%`}, 1000);
		$('.hp-num').text(`${userHp}/${currentUser.hp}`);



		if(userHp <= 0){  // Lose
			clearInterval(startGame);			
			console.log('You lose.');


			$('#game-btn').css('visibility', 'visible');
			exp += currentMonster.expMonster * 0.7;
			setUserLevel();
			console.log('user level changed? ' + currentUser.level)

			
		}



		if(monsterHp <= 0){ // Win
			clearInterval(startGame);
			console.log('You win.');

			$('#game-btn').css('visibility', 'visible');
			console.log('USER WINS! Increase Exp by ', currentMonster.expMonster)
			exp += currentMonster.expMonster;
			setUserLevel();
			console.log('user level changed? ' + currentUser.level)
			

			console.log('User EXP after Win', exp);		
		}
		if(monsterHp <= 0 && currentMonster.level === 2){
			$('#three').toggleClass('remove');
			$('#three').velocity('slideDown');
		}
		if(monsterHp <= 0 && currentMonster.level === 3){
			$('#four').toggleClass('remove');
			$('#four').velocity('slideDown');
			$('#five').toggleClass('remove');
			$('#five').velocity('slideDown');
		}
		if(monsterHp <= 0 && currentMonster.level === 5){
			$('#six').toggleClass('remove');
			$('#six').velocity('slideDown');
		}

		if(monsterHp <= 0 && currentMonster.level === 6){
			$('#seven').toggleClass('remove');
			$('#seven').velocity('slideDown');
			$('#eight').toggleClass('remove');
			$('#eight').velocity('slideDown');
		}
		if(monsterHp <= 0 && currentMonster.level === 9){
			$('#ten').toggleClass('remove');
			$('#ten').velocity('slideDown');

		}


		if(game.hasClass('remove')){
			clearInterval(startGame);
			render();			
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
        	console.log(numOfWords);
        	console.log('UserAttack.............')
        	// $('.hp-inner-m').velocity({width: `${hpBarM}%`}, 1000);
        	$('#monsterImg').effect('shake', {times:2,distance:16}, 200);
        	let monsterHp = currentMonster.hp
			let hpBarM = monsterHp / currentMonster.hp * 100;
			console.log('Monster HP : ' + monsterHp);
    		monsterHp -= currentUser.attack;
			$('.hp-inner-m').css('width', `${hpBarM}%`);
			$('.hp-inner-m').velocity({width: `${hpBarM}%`}, 1000);
			
			
			
    		

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
	render(); // Idk if I need this.
})




$('#before-btn').on('click', () => {
	$('.before-game').toggleClass('remove'); //  - before-game
	$('.game').toggleClass('remove'); //  + game
	render();
})





$('#game-btn').on('click', () => {
	$('.game').toggleClass('remove'); //  - game
	$('.after-game').toggleClass('remove');	//  + after-game
	render();
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
	render();
		// console.log('closed before-game')
		// 	console.log('The battle is closed.');
		// 	userHp = currentUser.hp;
		// 	monsterHp = currentMonster.hp;
		// 	console.log('healed HP (user)', userHp);
		// 	console.log('healed HP (monster)', monsterHp);
		// 	let num1 = exp - expArray[currentUser.level - 2]; 
		// 	let num2 = expArray[currentUser.level-1] - expArray[currentUser.level-2];
		// 	let num3 = num1 / num2;
		// 	let expBar = Math.floor(num3 * 100);
		// 	$('.hp-inner').velocity({width: '100%'}, 1000);
		// 	$('.hp-inner').css('width', '100%');
		// 	$('.exp-inner').velocity({width: `${expBar}`}, 1000);
			// $('.exp-inner').css('width', '100%');		



			// clearInterval(startGame);
		


})
$('#close-after-game').on('click', () => {
	$('.after-game').toggleClass('remove');
	$('.game-modal').toggleClass('remove');
})



$('#setting').on('click', () => {
	
	if($('.profile-wrapper').hasClass('remove')){
		$('.profile-wrapper').toggleClass('remove');
		$('.profile-wrapper').velocity('slideDown');
		$('#setting').velocity({rotateX: -180}, 500)
	} else {
		$('.profile-wrapper').toggleClass('remove');
		$('.profile-wrapper').velocity('slideUp');
		$('#setting').velocity({rotateX: +180}, 500)
	}

})


$('#aaa').on('click', () => {
	$('#slimeImg').velocity({
		left: "300px",
	}, {
		duration: 1500,
		easing: "linear"
	});
})


// $( "#d1" ).effect( "shake",{times:2,distance:6},200);
$('#d1').click(function(){
	$("#d1").velocity({
    left: "500px",
}, {
    duration: 3000, 
    easing: "linear"
});  

})




// $('#nine').css('visibility', 'hidden')

$('#bbb').on('click', () => {
	$('#nine').toggleClass('remove');
	$('#nine').velocity('slideDown', 3000);
})



/////////////////////////////////////////////////////








