//import _ from 'lodash';

export const oneclickers = {
    fluctuating: {
        name: 'Fluctuating', cost: {strings: 10}, locked: false, onClick: (state) => {
            state.fluctuating = true;
            return state;
        }
    },
    drawing: {
        name: 'Drawing', cost: {up_quarks: 10}, locked: (state) => !state.fluctuating, onClick: (state) => {
            state.drawing = true;
            return state;
        }
    }
};