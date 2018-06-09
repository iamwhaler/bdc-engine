//import _ from 'lodash';

export const oneclickers = {
    fluctuating: {
        name: 'String convertor', text: 'Strings will automatically convert into quarks or leptons',
        cost: {strings: 10}, locked: (state) => !state.strings_miner, onClick: (state) => {
            state.fluctuating = true;
            return state;
        }
    }

};