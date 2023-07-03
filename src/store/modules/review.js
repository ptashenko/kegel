export default {
    state: {
        msgOK: [{
                title: 't_1',
                text: 'txt_1',
                name: 'TopicSilly',
                rating: 5,
            },
            {
                title: 't_2',
                text: 'txt_2',
                name: 'Will123Darth368',
                rating: 5,
            },
            {
                title: 't_3',
                text: 'txt_3',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 't_4',
                text: 'txt_4',
                name: 'Armando A.',
                rating: 5,
            },
            {
                title: 't_5',
                text: 'txt_5',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
        msgPE: [{
                title: 't_6',
                text: 'txt_6',
                name: 'TopicSilly',
                rating: 5,
            },
            {
                title: 't_7',
                text: 'txt_7',
                name: 'Neo_Treasure',
                rating: 5,
            },
            {
                title: 't_8',
                text: 'txt_8',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 't_9',
                text: 'txt_9',
                name: 'Armando A.',
                rating: 5,
            },
            {
                title: 't_10',
                text: 'txt_10',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
        msgED: [{
                title: 't_11',
                text: 'txt_11',
                name: 'Will123Darth368',
                rating: 5,
            },
            {
                title: 't_12',
                text: 'txt_12',
                name: 'Neo_Treasure',
                rating: 5,
            },
            {
                title: 't_13',
                text: 'txt_13',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 't_14',
                text: 'txt_14',
                name: 'IanVital',
                rating: 5,
            },
            {
                title: 't_15',
                text: 'txt_15',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
        msgOkLand: [{
                title: 't_16',
                text: 'txt_16',
                name: 'MasterBest069',
                rating: 5,
            },
            {
                title: 't_17',
                text: 'txt_17',
                name: 'RpgEpic123',
                rating: 5,
            },
            {
                title: 't_18',
                text: 'txt_18',
                name: 'Amteleronnnnn',
                rating: 5,
            },
            {
                title: 't_19',
                text: 'txt_19',
                name: 'UgaraticKroolKat',
                rating: 5,
            },
            {
                title: 't_20',
                text: 'txt_20',
                name: 'RawJunky',
                rating: 5,
            },
            {
                title: 't_21',
                text: 'txt_21',
                name: 'FizzliviSphema',
                rating: 5,
            },
        ],
        msgPeLand: [{
                title: 't_22',
                text: 'txt_22',
                name: 'MasterBest069',
                rating: 5,
            },
            {
                title: 't_23',
                text: 'txt_23',
                name: 'UgaraticKroolKat',
                rating: 5,
            },
            {
                title: 't_24',
                text: 'txt_24',
                name: 'Amteleronnnnn',
                rating: 5,
            },
            {
                title: 't_25',
                text: 'txt_25',
                name: 'RpgEpic123',
                rating: 5,
            },
            {
                title: 't_26',
                text: 'txt_26',
                name: 'RawJunky',
                rating: 5,
            },
            {
                title: 't_27',
                text: 'txt_27',
                name: 'FizzliviSphema',
                rating: 5,
            },
        ],
        msgEdLand: [{
                title: 't_28',
                text: 'txt_28',
                name: 'RpgEpic123',
                rating: 5,
            },
            {
                title: 't_29',
                text: 'txt_29',
                name: 'RawJunky',
                rating: 5,
            },
            {
                title: 't_30',
                text: 'txt_30',
                name: 'FizzliviSphema',
                rating: 5,
            },
            {
                title: 't_31',
                text: 'txt_31',
                name: 'MasterBest069',
                rating: 5,
            },
            {
                title: 't_32',
                text: 'txt_32',
                name: 'UgaraticKroolKat',
                rating: 5,
            },
            {
                title: 't_33',
                text: 'txt_33',
                name: 'Amteleronnnnn',
                rating: 5,
            },
        ],
        fpl_land: [
            {
                title: 't_34',
                text: 'txt_34',
                name: 'TopicSilly',
                rating: 5,
            },
            {
                title: 't_35',
                text: 'txt_35',
                name: 'Will123Darth368',
                rating: 5,
            },
            {
                title: 't_36',
                text: 'txt_36',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 't_37',
                text: 'txt_37',
                name: 'Armando A.',
                rating: 5,
            },
            {
                title: 't_38',
                text: 'txt_38',
                name: 'JackSUN.X0X367',
                rating: 5,
            }
        ]
    },
    getters: {
        get_msg(state) {
            return state.msgOK
        },
        get_msgPE(state) {
            return state.msgPE
        },
        get_msgED(state) {
            return state.msgED
        },
        get_msgOkLand(state) {
            return state.msgOkLand
        }
    },
    actions: {
        add_new_msg(context, data) {
            context.commit('add_msg', data)
        },
        add_new_msgPE(context, data) {
            context.commit('add_msgPE', data)
        },
        add_new_msgED(context, data) {
            context.commit('add_msgED', data)
        },
        add_new_msgOkLand(context, data) {
            context.commit('add_msgOkLand', data)
        },
    },
    mutations: {
        add_msg(state, data) {
            state.msgOK.push(data.msgOK)
        },
        add_msgPE(state, data) {
            state.msgPE.push(data.msgPE)
        },
        add_msgED(state, data) {
            state.msgPE.push(data.msgED)
        },
        add_msgOkLand(state, data) {
            state.msgOkLand.push(data.msgOkLand)
        },
    }
}
