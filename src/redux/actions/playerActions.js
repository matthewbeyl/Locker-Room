export const PLAYER_ACTIONS = {
    FETCH_PLAYERS: 'FETCH_PLAYERS',
    SET_PLAYERS: 'SET_PLAYERS',
    DISPLAY_PLAYERS: 'DISPLAY_PLAYERS',
}

export function fetchPlayers() {
    return { type: PLAYER_ACTIONS.FETCH_PLAYERS }
};