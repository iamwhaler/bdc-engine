import _ from 'lodash';

export const automators = {
    strings_miner: {
        name: 'Strings Miner',
        cost: {strings: 10},
        locked: (state) => state.creativity,
        onClick: (state) => {
            state.strings_miner++;
            return state;
        },
        onTick: (state) => {
            state.strings += _.random(0, state.strings_miner);
            return state;
        }
    },
    up_quarks_miner: {
        name: 'Up Quarks Miner', cost: {up_quarks: 8}, locked: (state) => !state.design, onClick: (state) => {
            state.up_quarks_miner++;
            return state;
        }, onTick: (state) => {
            state.up_quarks += Math.round(_.random(0, state.up_quarks_miner / 2));
            return state;
        }
    }
};