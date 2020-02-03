import { userOptionData } from '../projects.js';

const userOptions = {
	namespaced: true,
	state: {
		// noScroll: userOptionData.noScroll.defaultValue,
		// darkMode: userOptionData.darkMode.defaultValue,
		// animations: userOptionData.animations.defaultValue,
		// waveRadius: userOptionData.waveRadius.defaultValue,
		// borderSize: userOptionData.borderSize.defaultValue,
		// footerHeight: userOptionData.footerHeight.defaultValue,
		// headerColor: userOptionData.headerColor.defaultValue,
		// cardBgColor: userOptionData.cardBgColor.defaultValue,
		// mainBgColor: userOptionData.mainBgColor.defaultValue,
		// cardHeaderColor: userOptionData.cardHeaderColor.defaultValue,
		// highlightColor: userOptionData.highlightColor.defaultValue,
		// textColor: userOptionData.textColor.defaultValue
		screenshotCycleDuration: 3500,
	},
	mutations: {
		toggleOption(state, optionName) {
			const newValue = !state[optionName];
			state[optionName] = newValue;
		},
		setOption(state, payload) {
			console.warn('setoprion setting', payload.optionName, 'to', payload.value);
			state[payload.optionName] = payload.value;
			if (payload.optionName.indexOf('Color') > -1) {
				let cssVar = userOptionData[payload.optionName].cssVar;
				document.documentElement.style.setProperty(cssVar, payload.value);
				if (state.darkMode) {
					
				}
			}
		},
		adjustSliderOption(state, payload) {
			console.log('adjusting', payload.option, payload.byAmount ? 'by' : 'to', payload.value);
			let newValue = payload.byAmount ? state[payload.option] + payload.value : payload.value;
			state[payload.option] = newValue;
		}
	}
};
for (let optionName in userOptionData) {
	userOptions.state[optionName] = userOptionData[optionName].defaultValue;
}

export default userOptions;
