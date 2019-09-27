const SET_BACK_URL = (state, payload) => {
    console.log("set backurl");
    state.backUrl = payload;
};

const SET_DATA = (state, payload) => {
    console.log("set data");
    const token = document.head.querySelector('meta[name="csrf-token]');

    if (token) {
        payload.csrfToken = token.content;
        // in typescript you can add type casting like (<HTMLMetaElement>token).content
        // the above may through an error
    }

    Object.assign(state, { ...payload });
};

const SET_MENU = (state, payload) => {
    state.menu = payload;
};

const SET_DIALOG_MESSAGE = (state, payload) => {
    state.dialogMessage = payload;
};
