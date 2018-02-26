console.log("working");

let gamePlay = document.getElementsByClassName('cell');
for (let x=0; x > gamePlay.length; x++) {
	let XO = gamePlay[x];
	XO.onClick = function(){
		console.log("test");
		return true;
	};
}