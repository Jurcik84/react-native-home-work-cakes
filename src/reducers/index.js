

export function reducer(state, action) {

    switch (action.type) {
        case "LOAD_START":
            return {
                ...state,
                cakes: [],
                isLoaded: false,
                error: false
            };
        case "LOAD_SUCCSESFULL":
            return {
                ...state,
                cakes: action.cakes,
                isLoaded: true,
                error: false
            };
        case "LOAD_ERROR":
            return {
                ...state,
                error: true,
                cakes: []
            };
        default:
            return state;
    }
}