export const techTagColors = {
	React: 'rgb(150, 130, 100)',
	Vue: 'rgb(66, 151, 23)',
	PixiJS: 'rgb(88, 88, 207)',
	MySQL: 'rgb(32, 73, 8)',
	PHP: 'rgb(61, 9, 9)',
	Webpack: 'rgb(100, 100, 255)',
	NPM: 'rgb(12, 24, 67)'
}
export const projects = [
	{
		'id': 0,
		'name': 'Wagsworth Grooming',
		'url': 'https://eggborne.com/wag',
		'repo': 'https://github.com/eggborne/wagsworth',
		'description': 'Website for Wagsworth Grooming in Lake Oswego, Oregon',
		'technologies': [
			'React',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'Website for Wagsworth Grooming',
			'Website for Wagsworth Grooming'
		],
		'directory':'wagsworth',
		'screenshots': {
			portrait: 2,
			desktop: 1,
			tablet: 1,
		},
		iconUrl: 'https://wagsworthgrooming.com/favicon.ico'
	},
	{
		'id': 1,
		'name': 'Chicken Bingo',
		'url': 'https://chicken.bingo',
		'repo': 'https://github.com/eggborne/chicken-bingo',
		'description': 'A Bingo game I made for my mom to play',
		'technologies': [
			'React',
			'PHP',
			'MySQL',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'Secure login/registration system',
			'Modeled after those awful Bingo mobile apps'
		],
		'directory':'chickenbingo',
		'screenshots': {
			portrait: 1,
			desktop: 2,
			tablet: 2,
		},
		iconUrl: 'https://chicken.bingo/android-chrome-192x192.png'
	},
	{
		'id': 2,
		'name': 'Pazaak Online',
		'url': 'https://pazaak.online',
		'repo': 'https://github.com/eggborne/pazaak',
		'description': 'The card game from Star Wars',
		'technologies': [
			'React',
			'PHP',
			'MySQL',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'Secure login/registration system',
			'Online leaderboards'
		],
		'directory':'pazaak',
		'screenshots': {
			portrait: 3,
			desktop: 0,
			tablet: 0,
		},
		iconUrl: 'https://pazaak.online/dist/favicon.png'
	},
	{
		'id': 3,
		'name': 'Name Generator',
		'url': 'https://www.eggborne.com/namegenerator',
		'repo': 'https://github.com/eggborne/customizable-name-generator',
		'description': 'Generates random names according to user-specified rules',
		'technologies': [
			'React',
			'PHP',
			'MySQL',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'Syllable-based word construction',
			'Avoids awkward or unpronouncable combinations'
		],
		'directory':'namegenerator',
		'screenshots': {
			portrait: 1,
			desktop: 1,
			tablet: 1,
		},
		iconUrl: 'https://pazaak.online/assets/images/loadingicon.png'
	},
	{
		'id': 4,
		'name': 'Brutal Kung Fu',
		'url': 'https://brutalkungfu.com',
		'repo': 'https://github.com/eggborne/brutal-kung-fu',
		'description': 'A gritty sequel to the 1984 NES classic',
		'technologies': [
			'PixiJS',
			'PHP',
			'MySQL',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'Gamepad support',
			'Online leaderboard'
		],
		'directory':'brutalkungfu',
		'screenshots': {
			portrait: 4,
			desktop: 4,
			tablet: 1,
		},
		iconUrl: 'https://eggborne.com/icons/bkficon.png'
	},
	{
		'id': 5,
		'name': 'Tetro',
		'url': 'https://eggborne.com/tetro',
		'repo': 'https://github.com/eggborne/tetro',
		'description': 'NES Tetris with new features and game modes',
		'technologies': [
			'PixiJS',
			'PHP',
			'MySQL'
		],
		'descriptionBullets': [
			'Online leaderboard',
		],
		'directory':'tetro',
		'screenshots': {
			portrait: 5,
			desktop: 2,
			tablet: 3,
		},
		iconUrl: 'https://eggborne.com/tetro/favicon.bmp'
	},
	{
		'id': 6,
		'name': 'Frog Racer 2019',
		'url': 'https://eggborne.com/frogracer',
		'repo': 'https://github.com/eggborne/frog-racer',
		'description': 'Endless randomized Battletoads Turbo Tunnel level',
		'technologies': [
			'PixiJS',
			'PHP',
			'MySQL'
		],
		'descriptionBullets': [
			'Gamepad support',
			'Online leaderboard'
		],
		'directory':'frogracer',
		'screenshots': {
			portrait: 2,
			desktop: 3,
			tablet: 2,
		},
		iconUrl: 'https://eggborne.com/frogracer/assets/favicon-med.png'
	},
	{
		'id': 7,
		'name': 'Random Metroid',
		'url': 'https://eggborne.com/metroid',
		'repo': 'https://github.com/eggborne/random-metroid',
		'description': 'Randomly generated NES Metroid',
		'technologies': [
			'PixiJS'
		],
		'descriptionBullets': [
			'Uses the structure of the original map, but randomizes the contents',
		],
		'directory':'metroid',
		'screenshots': {
			portrait: 2,
			desktop: 2,
			tablet: 2,
		},
		iconUrl: 'https://eggborne.com/icons/metroidicon.png'
	},
	{
		'id': 8,
		'name': 'Cellular Automata Sandbox',
		'url': 'https://eggborne.com/tca',
		'repo': 'https://github.com/eggborne/cellular-automata-sandbox',
		'description': 'Creates cool quasi-3D designs using procedural generation',
		'technologies': [
			'PixiJS'
		],
		'descriptionBullets': [
			"Highly customizable in logic and appearance",
		],
		'directory':'cas',
		'screenshots': {
			portrait: 1,
			desktop: 1,
			tablet: 1,
		},
		iconUrl: 'https://eggborne.com/icons/casicon.png'
	},
	{
		'id': 9,
		'name': 'Toad\'s Odyssey',
		'url': 'https://eggborne.com/toad',
		'repo': 'https://github.com/eggborne/toad-game',
		'description': 'A narrative platforming adventure starring Super Mario\'s Toad',
		'technologies': [
			'PixiJS'
		],
		'descriptionBullets': [
			'A narrative platforming adventure starring Super Mario\'s Toad'
		],
		'directory':'toadgame',
		'screenshots': {
			portrait: 6,
			desktop: 2,
			tablet: 2,
		},
		iconUrl: 'https://eggborne.com/icons/toadicon.png'
	},
	
	{
		'id': 10,
		'name': 'Donald Trump\'s Punch-Out',
		'url': 'https://eggborne.com/punchout',
		'repo': 'https://github.com/eggborne/donald-trump-punch-out',
		'description': 'Mike Tyson\'s Punch-Out except you beat up the President',
		'technologies': [
			'React',
			'PHP',
			'MySQL'
		],
		'descriptionBullets': [
			'Makes you feel better temporarily',
		],
		'directory':'punchout',
		'screenshots': {
			portrait: 2,
			desktop: 2,
			tablet: 2,
		},
		iconUrl: 'https://eggborne.com/icons/boxinggloveicon.png'
	},
	{
		'id': 11,
		'name': 'Egg Protector',
		'url': 'https://eggborne.com/eggprotector',
		'repo': 'https://github.com/eggborne/egg-protector',
		'description': 'A fast-paced Missile Command/tower defense mashup',
		'technologies': [
			'React',
			'PHP',
			'MySQL'
		],
		'descriptionBullets': [
			'A fast-paced Missile Command/tower defense mashup'
		],
		'directory':'eggprotector',
		'screenshots': {
			portrait: 1,
			desktop: 1,
			tablet: 1,
		},
		iconUrl: 'https://eggborne.com/icons/fetusicon.jpg'
	},
	{
		'id': 12,
		'name': 'This very website',
		'url': 'https://mikedonovan.dev',
		'repo': 'https://github.com/eggborne/vue-portfolio',
		'description': 'This selfsame website which you are currently visiting',
		'technologies': [
			'Vue',
			'NPM',
			'Webpack'
		],
		'descriptionBullets': [
			'This selfsame website which you are currently visiting',
		],
		'directory':'mikedonovandev',
		'screenshots': {
			portrait: 1,
			desktop: 1,
			tablet: 1,
		},
		iconUrl: 'https://eggborne.com/icons/chickenicon.png'
	},
];

export const optionData = [
	{
		id: 0,
		inputType: 'toggle',
		defaultValue: true,
		name: 'noScroll',
		title: 'Traditional scrolling',
		cssVar: ''
	},
	// {
	// 	id: 1,
	// 	inputType: 'toggle',
	// 	defaultValue: true,
	// 	name: 'wavyMode',
	// 	title: 'Waviness',
	// 	cssVar: ''
	// },
	{
		id: 2,
		inputType: 'toggle',
		defaultValue: true,
		name: 'darkMode',
		title: 'Space Mode',
		cssVar: ''
	},
	{
		id: 3,
		inputType: 'toggle',
		defaultValue: true,
		name: 'animations',
		title: 'Animations',
		cssVar: '--animations'
	},
	{
		id: 1,
		inputType: 'range',
		step: 1,
		minValue: 0,
		maxValue: 100,
		unitSuffix: '%',
		defaultValue: 50,
		name: 'waveRadius',
		title: 'Waviness',
		cssVar: '--arc-radius'
	},
	{
		id: 4,
		inputType: 'range',
		step: 1,
		minValue: 0,
		maxValue: 6,
		unitSuffix: '',
		defaultValue: 1,
		name: 'borderSize',
		title: 'Border size',
		cssVar: '--highlight-width'
	},
	{
		id: 44,
		inputType: 'range',
		step: 1,
		minValue: 0,
		maxValue: 10,
		unitSuffix: '',
		defaultValue: 4,
		name: 'footerHeight',
		title: 'Footer size',
		cssVar: '--footer-height'
	},
	{
		id: 5,
		inputType: 'color',
		defaultValue: '#2d382a',
		name: 'headerColor',
		title: 'Header / Menu',
		cssVar: '--header-color'
	},
	{
		id: 6,
		inputType: 'color',
		defaultValue: '#33323b',
		name: 'cardBgColor',
		title: 'Card background',
		cssVar: '--card-bg-color'
	},
	{
		id: 7,
		inputType: 'color',
		defaultValue: '#080808',
		name: 'mainBgColor',
		title: 'Main background',
		cssVar: '--main-bg-color'
	},
	{
		id: 8,
		inputType: 'color',
		defaultValue: '#252f33',
		name: 'cardHeaderColor',
		title: 'Card header',
		cssVar: '--card-header-color'
	},
	{
		id: 9,
		inputType: 'color',
		defaultValue: '#4e5c40',
		name: 'highlightColor',
		title: 'Border',
		cssVar: '--highlight-color'
	},
	{
		id: 10,
		inputType: 'color',
		defaultValue: '#d8d8d8',
		name: 'textColor',
		title: 'Text',
		cssVar: '--main-text-color'
	},
];

console.info(projects)
