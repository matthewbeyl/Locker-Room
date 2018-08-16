export const PLAYER_ACTIONS = {
    FETCH_QB: 'FETCH_QB',
    SET_QB: 'SET_QB',
    FETCH_RB: 'FETCH_RB',
    SET_RB: 'SET_RB',
    FETCH_WR: 'FETCH_WR',
    SET_WR: 'SET_WR',
    FETCH_TE: 'FETCH_TE',
    SET_TE: 'SET_TE',
    FETCH_K: 'FETCH_K',
    SET_K: 'SET_K',
    FETCH_DEF: 'FETCH_DEF',
    SET_DEF: 'SET_DEF'
}

export function fetchQB() {
    return { type: PLAYER_ACTIONS.FETCH_QB }
};

export function fetchRB() {
    return { type: PLAYER_ACTIONS.FETCH_RB }
};

export function fetchWR() {
    return { type: PLAYER_ACTIONS.FETCH_WR }
};

export function fetchTE() {
    return { type: PLAYER_ACTIONS.FETCH_TE }
};

export function fetchK() {
    return { type: PLAYER_ACTIONS.FETCH_K}
};

export function fetchDEF() {
    return { type: PLAYER_ACTIONS.FETCH_DEF }
};
