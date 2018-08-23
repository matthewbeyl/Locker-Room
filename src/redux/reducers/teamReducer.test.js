import teamReducers from "./teamReducer";

describe('testing teamReducers', () => {
    test('the initial state should be what I expect', () => {
        let action = {}
        let returnedState = teamReducers(undefined, action)
        console.log(returnedState);
    })

})