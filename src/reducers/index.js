

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

        case "RESET_CAKE":
            return {
                ...state,
                cake: {
                    name: '',
                    imageUrl: '',
                    yumFactor: 1,
                    comment: '',
                    id: 0
                }
            };

        case "CREATE_CAKE_SUC":
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}