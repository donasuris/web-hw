function calc() {
	const x = document.getElementById("input_x").value;
	const getAnswer = (x) => {
		let res = 0;
		
		for(let i = 1, k = 1; i <= 100; i++, k += 2) {
			res += (x ** k) / factorial(k) * (-1 + 2 * (i % 2));
		}

		return res;
	};

	document.getElementById("answer").innerText = `Ответ: ${String(getAnswer(x))}`;
}