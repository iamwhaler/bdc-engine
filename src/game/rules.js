import _ from 'lodash';
import {frame} from "./frame";

export const rules = {

    strings_rule: {
        onTick: (state) => {
            state.strings++;
            if (state.fluctuating) {

                let randomNumber = Math.random() * (100 - 1) + 1;

                if (randomNumber < 33.3) {
                    state.up_quarks += 1
                }
                else if (randomNumber < 66.6) {
                    state.down_quarks += 1
                }
                else {
                    state.electrons += 1
                }

            }
            else {return state}
            return state;

        }
    },

    up_quarks_rule: {
        onTick: (state) => {
            if (state.fluctuating) {
                if (state.strings > 4 && _.random(1, 2) === 1) {
                    state.strings -= 4;
                    state.up_quarks++;
                }
            }
            return state;
        }
    },

    temperature_rule: {
        onTick: (state) => {
            state.temperature+= _.random(-10, state.strings);
            return state;
        }
    }
};

