console.log('Hello')

const wordsList = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf'];
let spans;
const words = $('.words');
// const $body = $('body')
// $body.on('keypress', (e) => {
//     const $typed = String.fromCharCode(e.which);
//     console.log($typed);

//     if($typed === wordsList[0]){
//       console.log('You typed a');
//     }
//   });
let userHp, enemyHp, exp;
let level = 1;

userHp = 100 
enemyHp = 100


// enemy attacks every 2s until a user dies. 
function setTimer() {
	const startGame = setInterval(function() {
		userHp-= 10; // 
		console.log(userHp);
		if(userHp === 0){
			clearInterval(startGame);
			console.log('You win');

			// userHp = //
			// exp += //
		}
	}, 2000);
}
// setTimer();


$('#before-btn').on('click', random);

function random() {
	words.html('');
	let random = Math.floor(Math.random() * 7);
	// console.log(random)
	const wordArray = wordsList[random].split(''); // wordArray = ['a', 'l', 'p', 'h', 'a']
	console.log(wordArray)
	for(let i = 0; i < wordArray.length; i++){
		const span = $('<span/>');
		span.addClass('span');
		span.html(wordArray[i]);
		console.log(wordArray[i]);
		words.append(span);
	}
	spans = $('.span');
}
// random();









// function typing(e) {
//     typed = String.fromCharCode(e.which);
//     for (var i = 0; i < spans.length; i++) {
//       if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
//         if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
//            continue;
//         } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
//           spans[i].classList.add("bg");
//           break;
//         }
//       }
//     }
//     var checker = 0;
//     for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
//       if (spans[j].className === "span bg") {
//         checker++;
//       }
//       // after one word
//       if (checker === spans.length) { // if so, animate the words with animate.css class
//         spark.pause();
//         spark.currentTime = 0;
//         spark.play();
//         words.classList.add("animated");
//         words.classList.add("fadeOut");
//         points++; // increment the points
//         scoreDiv.innerHTML = points; //add points to the points div
//         document.removeEventListener("keydown", typing, false);
        
//         setTimeout(function(){
//           words.className = "words"; // restart the classes
//           random(); // give another word
//           document.addEventListener("keydown", typing, false);
//         }, 400);

//       }

//     }
// }

// document.addEventListener("keydown", typing, false);

/*

let userHp = 100 
let enemyHp = 100



const check = () => {


	random = Math.floor(Math.random() * 7);
	const randomWord = wordsList[random];
	console.log('randomWord : ' + randomWord);	

	const splitedWordArry = wordsList[random].split(''); 
	console.log('splitedWordArry : ' + splitedWordArry); // ['a', 'p', 'p', 'l', 'e']

	const $body = $('body')
	$body.on('keypress', (e) => {
		const $typed = String.fromCharCode(e.which);
		console.log($typed);

		while(userHp <= 0 || enemyHp <= 0){
			if($typed === splitedWordArry[0]){
				enemyHp -= 10
				console.log('Enemy HP : ' + enemyHp);
			}
			
		} // while() ends
	})
}





$('#before-btn').on('click', () => {

	const setTimer = () => {

		const startGame = setInterval(() => {
			userHp -= 5
			console.log(`User HP:${userHp}`)

		check();





			    	




				    
				    
				 //    if(let i = 0; i < splitedWordArry.length; i++){
				 //    	const letter = splitedWordArry[i];
					//     if($typed === letter){
					//       console.log(`You typed ${letter}`);
					//       enemyHp -= 10; // '10' is temporary
					//       console.log(`Enemy HP:${enemyHp}`)
					//     }	
				 //    }
					// if(enemyHp <= 0){
					// 	console.log('You win!');
					// 	clearInterval(startGame);
					// }
					// if(userHp <= 0){
					// 	console.log('You lose!');
					// 	clearInterval(startGame);
					// }				    




			



		}, 2000);

	}
	setTimer();
});




*/










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

















$('#test').on('click', () => {
	console.log('clicked');
	$('#test').toggleClass('remove');
})





