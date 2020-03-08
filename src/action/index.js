// THIS ARE ALL THE TYPE SELECTORS

export const GETTEST = "GETTEST";
export const getTest = payload => ({
    type: GETTEST,
    payload: payload
});

export const setTest = state => dispatch => {
    console.log("triggered set state view", state)
    dispatch(getTest(state))
}

