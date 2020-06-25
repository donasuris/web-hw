const animals = {
		text    : 'Животные',
		children: [
			{
				text    : 'Млекопитающие',
				children: [
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
				text    : 'Другие',
				children: [
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
		text    : 'Рыбы',
		children: [
			{
				text    : 'Аквариумные',
				children: [
					{
						text: 'Гуппи',
					},
					{
						text: 'Скалярии',
					},
				],
			},
			{
				text    : 'Морские',
				children: [
					{
						text: 'Морская форель',
					},
				],
			},
		],
	};

const all = [
		animals,
		fish,
	];

const generate = (structure, parent) => {
		parent.append('<ul></ul>');

		if (structure) {
			for (let i = 0; i < structure.length; i++) {
				parent.children('ul').append(`<li><span>${structure[i].text}</span> <span class='count'></span></li>`);
				generate(structure[i].children, parent.children('ul').children('li:last-child'));
			}
		}
	};

const count = (element) => element.find('li').length;
const root = $('#root');

window.onload = () => {
	generate(all, root);

	$("li").each(function () {
		const counter = count($(this));
		console.log(counter);
		$(this)
			.children(".count")
			.html(`: ${counter} elems`);
	});

	$('li').click(function () {
		$(this)
			.children()
			.not('span')
			.slideToggle();
		event.stopPropagation();
	});
};

