export const techTagColors = {
	'React': 'rgb(150, 130, 100)',
	'Vue': 'rgb(66, 151, 23)',
	'VueX': 'rgb(80, 100, 0)',
	'PixiJS': 'rgb(88, 88, 207)',
	'MySQL': 'rgb(32, 73, 8)',
	'PHP': 'rgb(61, 9, 9)',	
	'Brain.js': 'rgb(200, 150, 100)',
	'Webpack': 'rgb(100, 100, 255)',
	'NPM': 'rgb(12, 24, 67)'
}
export const projects = [
	{
		'id': 0,
		'name': 'Wagsworth Grooming',
		'url': 'https://wagsworthgrooming.com',
		'repo': 'https://github.com/eggborne/wagsworth',
		'description': 'Website for Wagsworth Grooming in Lake Oswego, Oregon',
		'technologies': [
			'React',
		],
		'descriptionBullets': [
			'Website for Wagsworth Grooming',
			'Website for Wagsworth Grooming'
		],
		'directory':'wagsworth',
		'screenshots': {
			portrait: 3,
			desktop: 3,
			tablet: 0,
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
		'id': 252,
		'name': 'AI Shape Detector',
		'url': 'https://eggborne.com/diagrammer',
		'repo': 'https://github.com/eggborne/shape-detector',
		'description': 'Identifies user-drawn shapes using machine learning',
		'technologies': [
			'Vue',
			'PixiJS',
			'Brain.js',
			'PHP',
			'MySQL',
		],
		'descriptionBullets': [
			'Includes interface for training custom models',
		],
		'directory':'shapedetector',
		'screenshots': {
			portrait:2,
			desktop: 2,
			tablet: 0,
		},
		iconUrl: 'https://eggborne.com/diagrammer/img/icons/favicon-32x32.png'
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
		'name': 'Crossword Creator',
		'url': 'https://crosswords.cc',
		'repo': 'https://github.com/eggborne/crossword-vue',
		'description': 'Full-featured crossword puzzle creator',
		'technologies': [
			'Vue',
			'PHP',
			'MySQL',
			'Brain.js',
		],
		'descriptionBullets': [
			'Generates puzzle diagrams according to defined constraints',
			'Uses machine learning to avoid offensive patterns'
		],
		'directory':'crosswordscc',
		'screenshots': {
			portrait: 5,
			desktop: 0,
			tablet: 0,
		},
		iconUrl: 'https://crosswords.cc/img/icons/favicon192.png'
	},
	{
		'id': 4,
		'name': 'Name Generator',
		'url': 'https://eggborne.com/namegenerator',
		'repo': 'https://github.com/eggborne/customizable-name-generator',
		'description': 'Generates random names according to user-specified rules',
		'technologies': [
			'React',
			'PHP',
			'MySQL',			
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
		'id': 5,
		'name': 'Brutal Kung Fu',
		'url': 'https://brutalkungfu.com',
		'repo': 'https://github.com/eggborne/brutal-kung-fu',
		'description': 'A gritty sequel to the 1984 NES classic',
		'technologies': [
			'PixiJS',
			'PHP',
			'MySQL',			
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
		'id': 6,
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
			'Gamepad support',
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
		'id': 7,
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
		'id': 8,
		'name': 'Random Metroid',
		'url': 'https://eggborne.com/metroid',
		'repo': 'https://github.com/eggborne/random-metroid',
		'description': 'Randomly generated NES Metroid',
		'technologies': [
			'PixiJS'
		],
		'descriptionBullets': [
			'',
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
		'id': 9,
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
		'id': 10,
		'name': 'Toad\'s Odyssey',
		'url': 'https://eggborne.com/toad',
		'repo': 'https://github.com/eggborne/toad-game',
		'description': 'A narrative platforming adventure starring Super Mario\'s Toad',
		'technologies': [
			'PixiJS'
		],
		'descriptionBullets': [
			''
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
		'id': 11,
		'name': 'Donald Trump\'s Punch-Out',
		'url': 'https://eggborne.com/punchout',
		'repo': 'https://github.com/eggborne/donald-trump-punch-out',
		'description': 'Mike Tyson\'s Punch-Out except you beat up the President',
		'technologies': [
			'PixiJS'
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
		iconUrl: 'https://eggborne.com/icons/dtpoicon.png'
	},
	{
		'id': 12,
		'name': 'Egg Protector',
		'url': 'https://eggborne.com/eggprotector',
		'repo': 'https://github.com/eggborne/egg-protector',
		'description': 'A fast-paced Missile Command/tower defense game',
		'technologies': [
			'PixiJS',
			'PHP',
			'MySQL'
		],
		'descriptionBullets': [
			''
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
		'id': 13,
		'name': 'This very website',
		'url': 'https://mikedonovan.dev',
		'repo': 'https://github.com/eggborne/vue-portfolio',
		'description': 'The selfsame website which you are currently visiting',
		'technologies': [
			'Vue',
			
		],
		'descriptionBullets': [
			'',
		],
		'directory':'mikedonovandev',
		'screenshots': {
			portrait: 2,
			desktop: 0,
			tablet: 0,
		},
		iconUrl: 'https://eggborne.com/icons/chickenicon.png'
	},
];

export const userOptionData = {
	noScroll: {
		id: 0,
		inputType: 'toggle',
		defaultValue: true,
		name: 'noScroll',
		title: 'Traditional scrolling',
		cssVar: ''
	},
	darkMode: {
		id: 2,
		inputType: 'toggle',
		defaultValue: false,
		name: 'darkMode',
		title: 'Space Mode',
		cssVar: ''
	},
	animations: {
		id: 3,
		inputType: 'toggle',
		defaultValue: true,
		name: 'animations',
		title: 'Animations',
		cssVar: '--animations'
	},
	waveRadius: {
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
	borderSize: {
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
	footerHeight: {
		id: 44,
		inputType: 'range',
		step: 0,
		minValue: 0,
		maxValue: 6,
		unitSuffix: '',
		defaultValue: 2,
		name: 'footerHeight',
		title: 'Footer size',
		cssVar: '--footer-height'
	},
	// screenshotCycleDuration: {
	// 	id: 55,
	// 	inputType: 'range',
	// 	step: 500,
	// 	minValue: 1000,
	// 	maxValue: 8000,
	// 	unitSuffix: ' sec.',
	// 	defaultValue: 4000,
	// 	name: 'screenshotCycleDuration',
	// 	title: 'Screenshot cycle time',
	// 	cssVar: ''
	// },
	headerColor: {
		id: 5,
		inputType: 'color',
		defaultValue: '#2d382a',
		name: 'headerColor',
		title: 'Header / Menu',
		cssVar: '--header-color'
	},
	cardBgColor: {
		id: 6,
		inputType: 'color',
		defaultValue: '#33323b',
		name: 'cardBgColor',
		title: 'Card background',
		cssVar: '--card-bg-color'
	},
	mainBgColor: {
		id: 7,
		inputType: 'color',
		defaultValue: '#080808',
		name: 'mainBgColor',
		title: 'Main background',
		cssVar: '--main-bg-color'
	},
	cardHeaderColor: {
		id: 8,
		inputType: 'color',
		defaultValue: '#252f33',
		name: 'cardHeaderColor',
		title: 'Card header',
		cssVar: '--card-header-color'
	},
	highlightColor: {
		id: 9,
		inputType: 'color',
		defaultValue: '#4e5c40',
		name: 'highlightColor',
		title: 'Border',
		cssVar: '--highlight-color'
	},
	textColor: {
		id: 10,
		inputType: 'color',
		defaultValue: '#d8d8d8',
		name: 'textColor',
		title: 'Text',
		cssVar: '--main-text-color'
	},
};

console.info(projects)
