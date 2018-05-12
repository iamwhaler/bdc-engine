//import _ from 'lodash';

export const clickers = {
    strings_clicker: {
        name: 'Fluctuate string', cost: false, locked: (state) => !state.fluctuating, onClick: (state) => {
            state.strings++;
            return state;
        }
    },

    up_quarks_clicker: {
        name: 'Gain Up Quark',
        cost: {strings: 4},
        text: 'Information about Cards resource which also explains its functionality. Information about Cards resource which also explains its functionality',
        locked: (state) => !state.drawing,
        onClick: (state) => {
            state.up_quarks++;
            return state;
        }
    },
    down_quarks_clicker: {
        name: 'Gain Down Quark', cost: {up_quarks: 4}, locked: (state) => !state.making, onClick: (state) => {
            state.down_quarks++;
            return state;
        }
    },
    electrons_clicker: {
        name: 'Gain Electron', cost: {down_quarks: 4}, locked: (state) => !state.packing, onClick: (state) => {
            state.electrons++;
            return state;
        }
    }
};