import _ from 'lodash';

export const rules = {

    strings_rule: {
        onTick: (state) => {
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