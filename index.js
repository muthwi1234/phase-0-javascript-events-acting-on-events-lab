let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4";

function moveDodgerLeft() {
	let leftValue = dodger.style.left.replace("px", "");
	let leftInt = parseInt(leftValue, 10);

	if (leftInt > 0) {
		dodger.style.left = `${leftInt - 1}px`;
	}
}

function moveDodgerRight() {
	var rightvalue = dodger.style.left.replace("px", "");
	var rightInt = parseInt(rightvalue, 10);

	if (rightInt < 360) {
		dodger.style.left = `${rightInt + 1}px`;
	}
}

document.addEventListener("keydown", function (e) {
	if (e.which === 37) {
		moveDodgerLeft();
	}
	if (e.which === 39) {
		moveDodgerRight();
	}
});
