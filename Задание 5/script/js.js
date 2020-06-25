const animals = {
	text  : 'Животные',
	childs: [
		{
			text  : 'Млекопитающие',
			childs: [
				{
					text: 'Коровы',
				},
				{
					text: 'Ослы',
				},
				{
					text: 'Собаки',
				},
				{
					text: 'Тигры',
				},
			],
		},
		{
			text  : 'Другие',
			childs: [
				{
					text: 'Змеи',
				},
				{
					text: 'Птицы',
				},
				{
					text: 'Ящерицы',
				},
			],
		},
	],
};

const fish = {
	text  : 'Рыбы',
	childs: [
		{
			text  : 'Аквариумные',
			childs: [
				{
					text: 'Гуппи',
				},
				{
					text: 'Скалярии',
				},
			],
		},
		{
			text  : 'Морские',
			childs: [
				{
					text: 'Морская форель',
				},
			],
		},
	],
};

const formation = (top, block) => {
	let current = document.createElement('li');

	current.innerHTML = block.text;

	if (block.hasOwnProperty('childs')) {
		let child = document.createElement('ul');

		for (let i of block.childs){
			formation(child, i);
		}

		current.appendChild(child);
	}
	top.appendChild(current);
};

const recursion = (parent_node) => {
	console.log(parent_node);
	let s = parent_node.children;

	if (s.length > 0) {
		for (let i = 0; i < s.length; i++) {
			recursion(s[i]);
		}
	}
};


window.onload = () => {
	let tree = document.createElement('ul');
	let body = document.getElementsByTagName('body');

	formation(tree, animals);
	formation(tree, fish);

	body[0].appendChild(tree);
	recursion(document.getElementsByTagName('html')[0]);
};