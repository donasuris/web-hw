function valid(moreZero, ...array) {
	return array.map(elem => Boolean(elem && (!moreZero || Number(elem) > 0))).reduce((a, b) => a && b);
}

function factorial(x) {
	return Array(x).fill().map((x, i) => i + 1).reduce((a, b) => a * b);
}

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getArray (n, min, max) {
	return Array(n).fill().map(() => getRandomInt(min || 1, max || 100));
}

function getResultArray (a) {
	return Array.from(a).sort((a, b) => b - a);
}
