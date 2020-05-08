export const createReducer = (intitialState, fnMap) => {
    return (state = intitialState, {type, payload})=> {
        const handler = fnMap[type];

        return handler ? handler(state, payload) : state
    }
}