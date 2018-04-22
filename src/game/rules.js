
import _ from 'lodash';

export const rules = {
    ideas_rule: {onTick: (state) => { state.ideas++; return state; }},
    cards_rule: {onTick: (state) => { if (state.ideas > 4 && _.random(1, 4) === 1) { state.ideas-=4; state.cards++;} return state; }},
    decks_rule: {onTick: (state) => { if (state.cards > 4 && _.random(1, 16) === 1) { state.cards-=4; state.decks++;} return state; }},
    games_rule: {onTick: (state) => { if (state.decks > 4 && _.random(1, 64) === 1) { state.decks-=4; state.games++;} return state; }}
};