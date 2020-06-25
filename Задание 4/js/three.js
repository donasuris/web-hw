function calc() {
	const arr = Array(8).fill().map((x, i) => {
		let subArr = Array(8).fill().map((y, j) => Number(document.getElementById(`a${i * 8 + j}`).value));
		return subArr.sort((a, b) => a - b);
	});
	const ans = arr.map(x => x.join('\t')).join('\n');

	console.log(ans);
	document.getElementById('answer').innerHTML = `<pre>${ans}</pre>`;
}