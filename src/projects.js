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
		'id': 3,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/desktop/wagsworthscreend1.jpg', 'https://eggborne.com/screenshots/portrait/wagsworthscreenp1.jpg'],
			portrait: ['https://eggborne.com/screenshots/portrait/wagsworthscreenp1.jpg', 'https://eggborne.com/screenshots/portrait/wagsworthscreenp2.jpg', 'https://eggborne.com/screenshots/desktop/wagsworthscreend1.jpg'],
			desktop: ['https://eggborne.com/screenshots/desktop/wagsworthscreend1.jpg', 'https://eggborne.com/screenshots/portrait/wagsworthscreenp1.jpg']
		},
		iconUrl: 'https://wagsworthgrooming.com/favicon.ico'
	},
	{
		'id': 0,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/desktop/chickenbingoscreend2.jpg', 'https://eggborne.com/screenshots/desktop/chickenbingoscreend1.jpg'],
			portrait: ['https://eggborne.com/screenshots/portrait/chickenbingoscreenp1.jpg','https://eggborne.com/screenshots/portrait/chickenbingoscreenp1.jpg'],
			desktop: ['https://eggborne.com/screenshots/desktop/chickenbingoscreend1.jpg','https://eggborne.com/screenshots/desktop/chickenbingoscreend2.jpg']
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/portrait/pazaakscreenp1.jpg','https://eggborne.com/screenshots/portrait/pazaaktitlep.jpg'],
			portrait: ['https://eggborne.com/screenshots/portrait/pazaaktitlep.jpg','https://eggborne.com/screenshots/portrait/pazaakscreenp1.jpg'],
			desktop: ['https://eggborne.com/screenshots/portrait/pazaaktitlep.jpg','https://eggborne.com/screenshots/portrait/pazaaktitlep.jpg']
		},
		iconUrl: 'https://pazaak.online/dist/favicon.png'
	},
	{
		'id': 4,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/desktop/namegeneratortitled.png'],
			portrait: ['https://eggborne.com/screenshots/portrait/namegeneratortitlep.jpg'],
			desktop: ['https://eggborne.com/screenshots/desktop/namegeneratortitled.png']
		},
		iconUrl: 'https://pazaak.online/assets/images/loadingicon.png'
	},
	{
		'id': 1,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/desktop/kungfuscreend2.png','https://eggborne.com/screenshots/desktop/kungfutitled.jpg'],
			portrait: [
				'https://eggborne.com/screenshots/portrait/kungfuscreenp1.jpg',
				'https://eggborne.com/screenshots/portrait/kungfutitlep.jpg',
				'https://eggborne.com/screenshots/portrait/kungfuscreenp2.jpg',
				'https://eggborne.com/screenshots/portrait/kungfuscreenp3.jpg'
			],
			desktop: ['https://eggborne.com/screenshots/desktop/kungfutitled.jpg', 'https://eggborne.com/screenshots/desktop/kungfuscreend2.png', 'https://eggborne.com/screenshots/desktop/kungfuscreend3.jpg']
		},
		iconUrl: 'https://brutalkungfu.com/favicon.png'
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/landscape/tetroscreenl1.png', 'https://eggborne.com/screenshots/landscape/tetroscreenl3.png', 'https://eggborne.com/screenshots/landscape/tetroscreenl2.png'],
			portrait: [
				'https://eggborne.com/screenshots/portrait/tetroscreenp2.jpg', 
				'https://eggborne.com/screenshots/portrait/tetroscreenp4.jpg', 
				'https://eggborne.com/screenshots/portrait/tetroscreenp3.jpg',
				'https://eggborne.com/screenshots/portrait/tetrotitlep.jpg'
			],
			desktop: ['https://eggborne.com/screenshots/desktop/tetroscreend1.jpg', 'https://eggborne.com/screenshots/desktop/tetrotitled.jpg']
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
			'Onscreen touch controls adapt to right- or left-handed play',
			'Online leaderboard'
		],
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/landscape/frogracertitlel.png', 'https://eggborne.com/screenshots/landscape/frogracerscreenl1.png'],
			portrait: [
				'https://eggborne.com/frogracer/assets/screenshot1.png', 
				'https://eggborne.com/screenshots/portrait/frogracertitlep.jpg'
			],
			desktop: ['https://eggborne.com/screenshots/desktop/frogracertitled.png', 'https://eggborne.com/screenshots/desktop/frogracerscreend1.png', 'https://eggborne.com/frogracer/assets/screenshot2.png']
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
		'screenshots': {
			tablet: [
				'https://eggborne.com/screenshots/landscape/metroidscreenl2.png', 
				'https://eggborne.com/screenshots/landscape/metroidtitlel.png'
			],
			portrait: [
				'https://eggborne.com/screenshots/portrait/metroidscreenp1.jpg', 
				'https://eggborne.com/screenshots/portrait/metroidtitlep.jpg'
			],
			desktop: [
				'https://eggborne.com/screenshots/desktop/metroidtitled.png',
				'https://eggborne.com/screenshots/desktop/metroidscreend1.png'
			]
		},
		iconUrl: 'https://eggborne.com/icons/metroidicon.png'
	},
	{
		'id': 100,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/desktop/casscreend1.jpg'],
			portrait: ['https://eggborne.com/screenshots/portrait/casscreenp1.jpg'],
			desktop: ['https://eggborne.com/screenshots/desktop/casscreend1.jpg']
		},
		iconUrl: 'https://eggborne.com/icons/casicon.png'
	},
	{
		'id': 101,
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
		'screenshots': {
			tablet: [
				'https://eggborne.com/screenshots/landscape/toadgamescreenl2.jpg',
				'https://eggborne.com/screenshots/landscape/toadgamescreenl1.jpg'
			],
			portrait: [
				'https://eggborne.com/screenshots/portrait/toadgamescreenp1.jpg', 
				'https://eggborne.com/screenshots/portrait/toadgamescreenp2.jpg',
				'https://eggborne.com/screenshots/portrait/toadgamescreenp3.jpg',
				'https://eggborne.com/screenshots/portrait/toadgamescreenp4.jpg',
				'https://eggborne.com/screenshots/portrait/toadgamescreenp5.jpg',
				'https://eggborne.com/screenshots/portrait/toadgamescreenp6.jpg',
			],
			desktop: [
				'https://eggborne.com/screenshots/desktop/toadgamescreend1.jpg',
				'https://eggborne.com/screenshots/desktop/toadgamescreend2.jpg'
			]
		},
		iconUrl: 'https://eggborne.com/icons/toadicon.png'
	},
	
	{
		'id': 8,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/landscape/punchoutscreenl1.png','https://eggborne.com/screenshots/landscape/punchouttitlel.png'],
			portrait: ['https://eggborne.com/screenshots/portrait/punchoutscreenp1.jpg', 'https://eggborne.com/screenshots/portrait/punchoutscreenp2.jpg'],
			desktop: ['https://eggborne.com/screenshots/desktop/punchouttitled.png', 'https://eggborne.com/screenshots/desktop/punchoutscreend1.jpg'],
		},
		iconUrl: 'https://eggborne.com/icons/boxinggloveicon.png'
	},
	{
		'id': 9,
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
		'screenshots': {
			tablet: ['https://eggborne.com/screenshots/landscape/eggprotectorscreenl1.jpg'],
			portrait: ['https://eggborne.com/screenshots/portrait/eggprotectorscreenp1.jpg'],
			desktop: ['https://eggborne.com/screenshots/landscape/eggprotectorscreenl1.jpg']
		},
		iconUrl: 'https://eggborne.com/icons/fetusicon.jpg'
	},
	{
		'id': 10,
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
		'screenshots': {
				tablet: ['https://eggborne.com/screenshots/landscape/portscreenl1.png'],
				portrait: ['https://eggborne.com/screenshots/portrait/portscreenp1.png', 'https://eggborne.com/screenshots/portrait/portscreenp2.png'],
				desktop: ['https://eggborne.com/screenshots/desktop/portscreend1.png', 'https://eggborne.com/screenshots/desktop/portscreend2.png']
		},
		iconUrl: 'chicken.png'
	},
];
