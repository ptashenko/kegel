import { uuid } from 'vue-uuid'
import { addItem, getItem } from '@/common/localStorage';


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export default {
    state: {
        dataPP1: "",
        dataPP2: "",
        emailUser: "",
        timerLand: "",
        addpurpose: false
    },
    getters: {
        DATAPP1: (state) => state.dataPP1,
        DATAPP2: (state) => state.dataPP2,
        EMAILUSER: (state) => state.emailUser,
        TIMERLAND: (state) => state.timerLand,
        ADDPURPOSE: (state) => state.addpurpose,
    },
    mutations: {
        SET_DATAPP1: (state, payload) => {
            state.dataPP1 = payload;
        },
        SET_DATAPP2: (state, payload) => {
            state.dataPP2 = payload;
        },
        SET_TIMERLAND: (state, payload) => {
            state.timerLand = payload;
        },
        SET_EMAILUSER: (state, payload) => {
            state.emailUser = payload;
        },
        SET_ADDPURPOSE: (state, payload) => {
            state.addpurpose = payload;
        },
    },
    actions: {

        setEmail({ commit, dispatch }, email) {
            commit('SET_EMAILUSER', email)
            const UUID = getItem('web_user_uuid')
            if (!UUID.length) {
                dispatch('generatUUID');
            }

            dispatch('sendEMAILUUID');
        },

        sendEMAILUUID({ dispatch, getters }) {
            const UUID = getItem('web_user_uuid');
            const UserEmail = getters.EMAILUSER;
            const params = {
                web_user_uuid: UUID,
                email: UserEmail,
            }
            const url = 'https://int2.kegel.men/api/web-payment/init-user/';
            postData(url, params)
        },

        generatUUID() {
            const UUID = uuid.v4();
            addItem('web_user_uuid', UUID);
        }
    },
}