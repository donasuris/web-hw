function calc() {
	const a = document.getElementById("input_a").value;
	const b = document.getElementById("input_b").value;
	const getAnswer = (...array) => {
		let arr = array.map(el => Number(el));
		return Math.PI * arr[0] * arr[1];
	};

	if (valid(true, a, b) && Number(a) != Number(b)) {
		let temp = getAnswer(a, b);
		if (temp)
			document.getElementById("answer").innerText = `Ответ: ${String(temp)}`;
		else 
			alert("Такого эллипса не существует");
	} else {
		alert("Некорректные входные данные");
	}
}