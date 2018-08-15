export const PLAYER_ACTIONS = {
    FETCH_RB: 'FETCH_RB',
    SET_RB: 'SET_RB',
    FETCH_QB: 'FETCH_QB',
    SET_QB: 'SET_QB',
}

export function fetchQB() {
    return { type: PLAYER_ACTIONS.FETCH_QB }
};

export function fetchRB() {
    return { type: PLAYER_ACTIONS.FETCH_RB }
};