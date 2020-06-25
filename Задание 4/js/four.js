function calc() {
	const n = document.getElementById('n').value;
	const min = document.getElementById('min').value;
	const max = document.getElementById('max').value;

	if (valid(true, n) && valid(false, min, max) && Number(min) < Number(max)) {
		let i = 0;
		let j = 0;
		let sum = 0;
		let offset = 1;

		const
			arr = getResultArray(getArray(Number(n) ** 2, Number(min), Number(max))),
			resArr = Array(Number(n))
				.fill()
				.map(() => Array(Number(n)).fill(0));

		for (i = 0; sum !== arr.length; sum++) {
			resArr[i][j] = arr[sum];
			i += offset;

			if (i == n || i < 0) {
				offset *= -1;
				j++;
				i += offset;
			}
		}

		console.log(resArr.map(el => el.join('\t')).join('\n'));
		document.getElementById('answer').innerHTML = `<pre>${resArr.map(el => el.join('\t')).join('\n')}</pre>`
	} else {
		alert('Некорректные данные')
	}
}