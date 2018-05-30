

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


function createNewCake(cake) {
    return {
        type: 'CREATE_CAKE',
        cake
    }
}


function resetCake() {
    return {
        type: "RESET_CAKE",
    }
}

function createCakeSuc(status) {

    return {

        type: 'CREATE_CAKE_SUC',
        status: 201
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

export function createCake(cake) {

    return async function (dispatch) {

        try {

            const method_post = 'POST';
            const cake_req = {
                ...cake,
                yumFactor: Number(cake.yumFactor),
                id: Math.floor((Math.random() * 1000) + 1)
            };

            const response = await fetch(`http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`, {

                method: method_post,
                body: JSON.stringify(cake_req),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
            });

            if (response.status === 201) {
                dispatch(createCakeSuc(201));
                dispatch(resetCake());
            }
        }
        catch (error) {
            dispatch(fetchError());
        }
    }
}