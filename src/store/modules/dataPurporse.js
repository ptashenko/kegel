export default {
    state: {
        dataPP1: "",
        dataPP2: "",
        emailUser: "",
        addpurpose: false
    },
    getters: {
        DATAPP1: state => {
            return state.dataPP1;
        },
        DATAPP2: state => {
            return state.dataPP2;
        },
        EMAILUSER: state => {
            return state.emailUser;
        },
        ADDPURPOSE: state => {
            return state.addpurpose;
        },
    },
    mutations: {
        SET_DATAPP1: (state, payload) => {
            state.dataPP1 = payload;
        },
        SET_DATAPP2: (state, payload) => {
            state.dataPP2 = payload;
        },
        SET_EMAILUSER: (state, payload) => {
            state.emailUser = payload;
        },
        SET_ADDPURPOSE: (state, payload) => {
            state.addpurpose = payload;
        },
    }
}