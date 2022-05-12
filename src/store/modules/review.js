export default {
    state: {
        msgOK: [{
                title: 'Super',
                text: 'I’ve only started recently but the results are incredible! I can tell that my stamina and performance improved a lot',
                name: 'TopicSilly',
                rating: 5,
            },
            {
                title: 'Kegel really works',
                text: 'I’ve had some erection problems before. But after a while with kegel training, it has become much harder! It’s amazing',
                name: 'Will123Darth368',
                rating: 5,
            },
            {
                title: 'Works perfectly',
                text: 'I decided to give it a try and the results are incredible! You should definitely try Kegel exercises.',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 'Great training',
                text: 'Kegel Training has changed my sex life. Now I have absolute control and I decide when I want to finish. This training really worth it',
                name: 'Armando A.',
                rating: 5,
            },
            {
                title: 'Amazing results',
                text: 'It’s been only a couple of weeks with Kegel exercises but I can already see a huge difference in my sex life. I’m happy with my results!',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
        msgPE: [{
                title: 'Super',
                text: 'I’ve only started recently but the results are incredible! I can tell that my stamina and performance improved a lot',
                name: 'TopicSilly',
                rating: 5,
            },
            {
                title: 'Real gains',
                text: 'Kegel exercises are great. The gains are real and every man needs to try it',
                name: 'Neo_Treasure',
                rating: 5,
            },
            {
                title: 'Works perfectly',
                text: 'I decided to give it a try and the results are incredible! You should definitely try Kegel exercises.',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 'Great training',
                text: 'Kegel Training has changed my sex life. Now I have absolute control and I decide when I want to finish. This training really worth it',
                name: 'Armando A.',
                rating: 5,
            },
            {
                title: 'Amazing results',
                text: 'It’s been only a couple of weeks with Kegel exercises but I can already see a huge difference in my sex life. I’m happy with my results!',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
        msgED: [{
                title: 'Kegel really works',
                text: 'I’ve had some erection problems before. But after a while with kegel training, it has become much harder! It’s amazing',
                name: 'Will123Darth368',
                rating: 5,
            },
            {
                title: 'Real gains',
                text: 'Kegel exercises are great. The gains are real and every man needs to try it',
                name: 'Neo_Treasure',
                rating: 5,
            },
            {
                title: 'Works perfectly',
                text: 'I decided to give it a try and the results are incredible! You should definitely try Kegel exercises.',
                name: 'Hamilton_KingLw33es',
                rating: 5,
            },
            {
                title: 'Solved my problems',
                text: 'My urologist advised me to do Kegels to fix some below belt problems. 6 weeks in and I have no problems at all. If you’re looking to improve your men’s health - try it, you won’t regret it',
                name: 'IanVital',
                rating: 5,
            },
            {
                title: 'Amazing results',
                text: 'It’s been only a couple of weeks with Kegel exercises but I can already see a huge difference in my sex life. I’m happy with my results!',
                name: 'JackSUN.X0X367',
                rating: 5,
            },
        ],
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
        }
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
        }
    }
}