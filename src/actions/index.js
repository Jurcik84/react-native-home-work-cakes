

function fetchStart() {

    return {
        type: "LOAD_START",
    }
}


function fetchAllCakes(cakes) {

    return {
        type: "LOAD_SUCCSESFULL",
        cakes
    }
}


function fetchError() {
    return {
        type: "LOAD_ERROR"
    }

}

export function loadAllCakes() {

    return async function (dispatch) {

        dispatch(fetchStart());

        try {

            const response = await fetch(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`);

            const cakes = await response.json();

            dispatch(fetchAllCakes(cakes));
        }
        catch (error) {

            dispatch(fetchError());
        }
    }
}