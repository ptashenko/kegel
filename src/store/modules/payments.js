import {
    initPayment,
    acceptPayment,
    appleInitPayment,
    appleAcceptPayment,
    payPalInitPayemnt,
    payPalAcceptPayment,
    addonFetch
} from "@/api";

const defaultState = {}
const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
    async initPayment(_, payload) {
        const response = await initPayment(payload)
        return response
    },

    async acceptPayment(_, payload) {
        const response = await acceptPayment(payload)
        return response
    },

    async appleInitPayment(_, payload) {
        const response = await appleInitPayment(payload)
        return response
    },

    async appleAcceptPayment(_, payload) {
        const response = await appleAcceptPayment(payload)
        return response
    },

    async payPalInitPayemnt(_, payload) {
        const response = await payPalInitPayemnt(payload)
        return response
    },

    async payPalAcceptPayemnt(_, payload) {
        const response = await payPalAcceptPayment(payload)
        return response
    },

    async addonFetch(_, payload) {
        const response = await addonFetch(payload)
        return response
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}
