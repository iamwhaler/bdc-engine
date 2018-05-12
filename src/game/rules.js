import _ from 'lodash';

export const rules = {

    strings_rule: {
        onTick: (state) => {
            let randomNumber = Math.random() * (100 - 1) + 1;

            if (randomNumber < 33.3) { state.up_quarks += 1 }
            else if (randomNumber < 66.6) { state.down_quarks += 1 }
            else { state.electrons += 1 }

            state.strings++;
            return state;
        }
    },

    up_quarks_rule: {
        onTick: (state) => {
            if (state.strings > 4 && _.random(1, 2) === 1) {
                state.strings -= 4;
                state.up_quarks++;
            }
            return state;
        }
    }
};