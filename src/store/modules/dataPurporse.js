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
        addpurpose: false,
        subscription: '',
    },
    getters: {
        DATAPP1: (state) => state.dataPP1,
        DATAPP2: (state) => state.dataPP2,
        EMAILUSER: (state) => state.emailUser,
        TIMERLAND: (state) => state.timerLand,
        ADDPURPOSE: (state) => state.addpurpose,
        SUBSCRIPTION: (state) => state.subscription,
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
        SET_SUBSCRIPTION: (state, payload) => {
            state.subscription = payload
        }
    },
    actions: {

        setEmail({ commit, dispatch }, email) {
            commit('SET_EMAILUSER', email)
            addItem('email', email)
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
                platform: window.navigator.platform == "iPhone" ? "ios" : "android",
                ga_gclid: Array.isArray(getItem('ga_gclid')) ? "" : getItem('ga_gclid'),
                ga_gbraid: Array.isArray(getItem('ga_gbraid')) ? "" : getItem('ga_gbraid'),
                ga_wbraid: Array.isArray(getItem('ga_wbraid')) ? "" : getItem('ga_wbraid'),
                ga_user_id: Array.isArray(getItem('ga_user_id')) ? "" : getItem('ga_user_id'),
                fbp: Array.isArray(getItem('fbp')) ? "" : getItem('fbp'),
                fbc: Array.isArray(getItem('fbc')) ? "" : getItem('fbc'),
                click_id: Array.isArray(getItem('b_click_id')) ? "" : getItem('b_click_id'),
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            const url = 'https://int2.kegel.men/api/web-payment/init-user/';
            postData(url, params)
        },

        generatUUID() {
            const UUID = getItem('web_user_uuid')
            if (!UUID.length) {
                const UUID = uuid.v4().replaceAll('\"', '');
                addItem('web_user_uuid', UUID);
            }
        }
    },
}