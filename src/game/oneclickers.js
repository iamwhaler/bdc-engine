//import _ from 'lodash';

export const oneclickers = {
    fluctuating: {
        name: 'String convertor', text: 'Strings will automatically convert into quarks or leptons',
        cost: {strings: 10}, locked: false, onClick: (state) => {
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