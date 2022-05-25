export default {
    state: {
        dataPP1: "",
        dataPP2: "",
        addpurpose: false
    },
    getters: {
        DATAPP1: state => {
            return state.dataPP1;
        },
        DATAPP2: state => {
            return state.dataPP2;
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
        SET_ADDPURPOSE: (state, payload) => {
            state.addpurpose = payload;
        },
    }
}