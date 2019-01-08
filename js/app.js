console.log('Hello')

const wordsList = ['apple', 'bee', 'chick', 'delta', 'echo', 'fox', 'golf'];


// const $body = $('body')
// $body.on('keypress', (e) => {
//     const $typed = String.fromCharCode(e.which);
//     console.log($typed);

//     if($typed === wordsList[0]){
//       console.log('You typed a');
//     }
//   });




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



// const arry = ['apple', 'bee'];

// const letter = arry[0].split('');

// console.log(letter);

// for(let i = 0; i < letter.length; i++){
//   console.log(letter[i]);
// }















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



const array = ['cat', 'dog', 'bird'];

const wordArray = array[0].split('');
console.log(wordArray);


const words = document.querySelector('.words');

for(let i=0; i < wordArray.length; i++){
  let span = document.createElement('span');
  span.classList.add('span');
  span.innerHTML = wordArray[i];
  words.append('span');
}
let $spans = $('.span');
console.log($spans);



