import { addItem, getItem } from '@/common/localStorage';
import router from '@/router';

const state = () => ({
    history: {},
    track: {},
    content: {},
    separations: [],
    tracks: [{
            id: 1,
            title: 'Treat ED',
            text: 'Get & stay hard easier',
            layouts: [
                { id: 1, separation: true },
                { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
                { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
                { id: 11 }, { id: 12 }, { id: 13 },
                { id: 14, separation: true },
                { id: 15 },
                { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 },
                { id: 21 }, { id: 22 }, { id: 23 },
                { id: 24, separation: true },
                { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 },
                { id: 29 }, { id: 30 },
                { id: 31 }, { id: 32 }, { id: 33 },
                { id: 34, separation: true },
            ],
        },
        {
            id: 2,
            title: 'Treat PE',
            text: 'Last up to 7x longer',
            layouts: [
                { id: 1, separation: true },
                { id: 35 }, { id: 3 }, { id: 21 }, { id: 22 },
                { id: 6 }, { id: 37 }, { id: 38 }, { id: 39 },
                { id: 40 }, { id: 41 },
                { id: 15, separation: true },
                { id: 17 }, { id: 42 }, { id: 43 }, { id: 56 },
                { id: 20 }, { id: 44 }, { id: 45 }, { id: 8 }, { id: 46 },
                { id: 47, separation: true },
                { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 },
                { id: 30 }, { id: 31 }, { id: 32 }, { id: 33 },
                { id: 34, separation: true },
            ],
        },
        {
            id: 3,
            title: 'I’m ok',
            text: 'I just want to maximize my intimate wellness',
            layouts: [
                { id: 1, separation: true },
                { id: 35 }, { id: 48 }, { id: 3 }, { id: 49 },
                { id: 50 }, { id: 21 }, { id: 22 }, { id: 51 },
                { id: 44 }, { id: 45 }, { id: 8 }, { id: 13 },
                { id: 15, separation: true },
                { id: 17 }, { id: 52 }, { id: 53 }, { id: 20 },
                { id: 54 }, { id: 26 }, { id: 55 },
                { id: 28, separation: true },
                { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 },
                { id: 28 }, { id: 33 },
                { id: 34, separation: true },
            ],
        },
    ],
    reviews: {
        1: {
            title: 'The effect is great',
            text: 'After 4 weeks of kegels, I have no trouble getting and maintaining erection. If you’re struggling as I did, try these exercises',
            name: 'Chauchooo',
            rating: 4,
        },
        2: {
            title: 'The effect is great',
            text: 'After 4 weeks of kegels, I have no trouble getting and maintaining erection. If you’re struggling as I did, try these exercises',
            name: 'Chauchooo',
            rating: 2,
        },
        3: {
            title: 'I’m glad I found these exercises',
            text: 'I’ve been doing Kegel exercises for 2 weeks now and I increased my stamina for real! I feel more confident with my partner. You should try Kegels as well',
            name: 'JiggySpot',
            rating: 5,
        },
    },
    contents: [{
            id: 1,
            title: 'Do you know about Pelvic Floor (PF) muscles?',
            thumbnail: '1.jpg',
            steps: false,
            answer: {
                style: 'radio',
                answerList: ['Yes, I know all about them', 'I\'ve heard about them', 'No, I don\'t'],
            },
        },
        {
            id: 2,
            title: 'The quality of your erection depends on the Pelvic Floor (PF) muscle tone',
            text: 'The PF muscles help to fill penis with blood and prevent its outflow, so you can get & maintain hard erection',
            thumbnail: '2.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 3,
            title: 'How old are you?',
            answer: {
                style: 'radio',
                answerList: [
                    '18 - 24',
                    '25 - 34',
                    '35 - 44',
                    '45 - 54',
                    '55 - 64',
                    '65+',
                ],
            },
        },
        {
            id: 4,
            title: 'Which one best describes your problem?',
            answer: {
                style: 'radio',
                answerList: [
                    'Difficulty achieving erection',
                    'Difficulty maintaining erection',
                    'Both',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 5,
            title: 'How long have you been experiencing problems with erection?',
            answer: {
                style: 'radio',
                answerList: [
                    'Less than 1 year',
                    'From 1 to 5 years',
                    'From 5 to 10 years',
                    'More than 10 years',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 6,
            title: 'Just like any other muscle in the body, your PF muscles weaken without training',
            text: 'Weak PF muscles can\'t hold blood in penis well. This leads to erection problems',
            thumbnail: '2.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 7,
            title: 'How often do you experience problems with erection?',
            answer: {
                style: 'radio',
                answerList: [
                    'All the time',
                    'Most of the times',
                    'Half the time',
                    'Rarely',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 8,
            title: 'Can you have sex 2 times in a row?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, but I must try hard',
                    'No, I can\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 9,
            title: 'You can strengthen your PF muscles & improve erection by doing Kegel exercises',
            layoutName: 'standart',
            thumbnail: 's3.svg',
            buttons: [{
                id: 1,
                logo: '1',
                title: 'The Nuffield Somerset Hospital',
                text: 'Source:',
            }, ],
        },
        {
            id: 10,
            title: 'How often do you experience morning erections?',
            answer: {
                style: 'radio',
                answerList: [
                    'All the time',
                    'Most of the times',
                    'Half the time',
                    'Rarely',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 11,
            title: 'How hard is your erection during masturbation?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 12,
            title: 'How hard is your erection during sex?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 13,
            title: '75.5% of men improved their erections with Kegel exercises',
            layoutName: 'KegelReview',
            reviews: [1, 2],
        },
        {
            id: 14,
            title: 'How satisfied were you with your sex life this month?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 15,
            title: 'How satisfied were you with your sex life 6 months ago?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 16,
            title: 'How much do you worry about having problems with erection?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 17,
            title: 'How satisfied were you with your sex life this month?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 18,
            title: 'How much erection problems affect your relationship with your partner?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 19,
            title: 'How strongly problems with erection affect your quality of life?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 20,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            thumbnail: 'OK_pp1.png',
            reviews: [1, 2],
        },
        {
            id: 21,
            title: 'How long does your sex last on average?',
            layoutName: 'Reviews',
            answer: {
                style: 'radio',
                answerList: [
                    'Less than 2 minutes',
                    '2-7 minutes',
                    '7-15 minutes',
                    '15 or more minutes',
                ],
            },
        },
        {
            id: 22,
            title: 'How often does it happen that your sex lasts less than 2 minutes?',
            layoutName: 'Reviews',
            answer: {
                style: 'radio',
                answerList: [
                    'Never',
                    'Rarely',
                    'Half of the time',
                    'Most of the time',
                    'All the time',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 23,
            title: 'Do you want to increase your sexual stamina?',
            layoutName: 'Reviews',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, I\'d like to',
                    'No, I don\'t want to',
                ],
            },
        },
        {
            id: 24,
            title: 'Men who perform Kegel exercises can increase their sexual stamina up to 7x',
            layoutName: 'standart',
            thumbnail: '4.jpg',
            buttons: [{
                id: 1,
                logo: '1',
                title: 'the Sapienza University',
                text: 'Source:',
            }, ],
        },
        {
            id: 25,
            title: 'How would you rate your libido (sex drive) 1 year ago?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 26,
            title: 'How would you rate your libido now?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 27,
            title: 'Do you take any medications to improve erection?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, every time',
                    'I take them sometimes',
                    'Yes, but rarely',
                    'No, I don\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 28,
            title: 'Kegel exercises are better than medications',
            thumbnail: 'OK_s6.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 29,
            title: 'How often do you drink alcohol?',
            answer: {
                style: 'radio',
                answerList: [
                    'Every day',
                    'Several times a week',
                    'Once a week',
                    'Once a month',
                    'I don\'t drink at all',
                ],
            },
        },
        {
            id: 30,
            title: 'Do you smoke?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, I do',
                    'No, I don\'t',
                    'Sometimes',
                ],
            },
        },
        {
            id: 31,
            title: 'How healthy is your diet?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 32,
            layoutName: 'Processing',
        },
        {
            id: 33,
            title: 'How often do you exercise?',
            answer: {
                style: 'radio',
                answerList: [
                    'Every day',
                    'Several times a week',
                    'Once a week',
                    'Once a month',
                    'I don\'t drink at all',
                ],
            },
        },
        {
            id: 34,
            title: 'How often do you get stressed?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 35,
            title: 'Your sexual stamina depends on the Pelvic Floor (PF) muscle tone',
            thumbnail: '2.png',
            layoutName: 'standart',
            text: 'Thanks to the strong PF muscles you can delay ejaculation as long as you want',
        },
        {
            id: 36,
            title: 'When was the first time you\'ve experienced premature ejaculation?',
            text: 'Weak PF muscles can\'t let you compress the urethra enough to delay ejaculation as long as you want',
            thumbnail: '9.png',
            layoutName: 'standart',
        },
        {
            id: 37,
            title: 'When was the first time you\'ve experienced premature ejaculation?',
            answer: {
                style: 'radio',
                answerList: [
                    'From the 1st time I started having sex',
                    'It started recently',
                    'It happened after a certain experience',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 38,
            title: 'How long would you like your sex to last?',
            answer: {
                style: 'radio',
                answerList: [
                    'About 10 min',
                    'About 20 min',
                    'About 30 min',
                    'More than 30 min',
                ],
            },
        },
        {
            id: 39,
            title: 'You can strengthen your PF muscles & increase sexual stamina up to 7x by doing Kegel exercises',
            layoutName: 'standart',
            thumbnail: '4.jpg',
            buttons: [{
                id: 1,
                logo: '1',
                title: 'the Sapienza University',
                text: 'Source:',
            }, ],
        },
        {
            id: 40,
            title: 'How hard is it for you to control your ejaculation during masturbation?',
            answer: {
                style: 'buttons',
                answerList: [1, 2, 3, 4, 5],
            },
        },
        {
            id: 41,
            title: '8/10 men improved their stamina with Kegel exercises',
            layoutName: 'KegelReview',
            reviews: [3],
        },
        {
            id: 42,
            title: 'How much do you worry about ejaculating earlier than you want?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 43,
            title: 'Does early ejaculation worsen the relationship with your partner?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, it does',
                    'No, it doesn\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 43,
            title: 'Does early ejaculation worsen the relationship with your partner?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, it does',
                    'No, it doesn\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 44,
            title: 'How would you describe your Erectile function?',
            answer: {
                style: 'radio',
                answerList: [
                    'Everything\'s great',
                    'Mostly fine, but sometimes I have problems',
                    'I often have problems',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 45,
            title: 'Have you ever failed to get a full erection for sex?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, I have',
                    'No, I haven\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 46,
            title: 'Do you want to strengthen your erection?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, I\'d like to',
                    'No, I don\'t want to',
                ],
            },
        },
        {
            id: 47,
            title: '75.5% of men improved their erections with Kegel exercises',
            layoutName: 'standart',
            thumbnail: 'PE_s5.png',
            buttons: [{
                id: 1,
                logo: '1',
                title: 'The Nuffield Somerset Hospital',
                text: 'Source:',
            }, ],
        },
        {
            id: 48,
            title: 'The quality of your erection also depends on the Pelvic Floor (PF) muscle tone',
            thumbnail: '2.png',
            layoutName: 'standart',
            text: 'Thanks to the strong PF muscles you can delay ejaculation as long as you want',
        },
        {
            id: 49,
            title: 'How satisfied are you with your sexual performance?',
            answer: {
                style: 'buttons',
                answerList: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                ],
            },
        },
        {
            id: 50,
            title: 'You can strengthen your PF muscles & improve sexual performance by doing Kegel exercises',
            layoutName: 'standart',
            thumbnail: 's3.svg',
            buttons: [{
                    id: 1,
                    logo: '1',
                    title: 'The Nuffield Somerset Hospital',
                    text: 'Source:',
                },
                {
                    id: 2,
                    logo: '1',
                    title: 'the Sapienza University',
                    text: 'Source:',
                },
            ],
        },
        {
            id: 51,
            title: 'Men who perform Kegel exercises can increase their stamina up to 7 times',
            layoutName: 'standart',
            thumbnail: '6.svg',
            buttons: [{
                id: 1,
                logo: '1',
                title: 'the Sapienza University',
                text: 'Source:',
            }, ],
        },
        {
            id: 52,
            title: 'Do you have a regular sexual partner?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, I do',
                    'I have a partner, but not regular',
                    'No, I don\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 53,
            title: 'How often do you have sex?',
            answer: {
                style: 'radio',
                answerList: [
                    'Every day',
                    'Several times a week',
                    'Once a week',
                    'Once a month',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 54,
            title: 'How would you rate your libido (sex drive) 1 years ago?',
            answer: {
                style: 'buttons',
                answerList: ['1', '2', '3', '4', '5'],
            },
        },
        {
            id: 55,
            title: 'Do you take any medications to improve sexual performance?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, every time',
                    'I take them sometimes',
                    'Yes, but rarely',
                    'No, I don\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 56,
            title: 'Does your self-esteem suffer from ejaculating earlier than you want to?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, it does',
                    'No, it doesn\'t',
                    'I don\'t want to answer',
                ],
            },
        },
    ],
});

const mutations = {
    saveVariant(state, variant) {
        state.activeVariant = variant;
    },
    setHistory(state, props) {
        const {
            anchor,
            selected,
        } = props;
        state.history[anchor] = selected;
        addItem('history', state.history);
    },
    setSeparator(state, separator) {
        state.separations.push(separator);
        addItem('separations', state.separations);
    },
    clearHistory(state) {
        state.history = {};
        addItem('history', {});
        state.track = {};
        addItem('track', {});
        state.content = {};
        addItem('content', {});
        state.separations = [];
        console.log(state.separations);
        addItem('separations', []);
    },
    saveTrack(state, track) {
        addItem('track', track);
        state.track = track;
    },
    saveContent(state, content) {
        addItem('content', content);
        state.content = content;
    },
    saveSeparation(state, separations) {
        addItem('separations', separations);
        state.separations = separations;
    },
};

const getters = {
    tracks: (state) => state.tracks,
    history: (state) => (questionAnchor) => state.history[questionAnchor],
    content: (state) => state.content,
    track: (state) => state.track,
    contentBy: (state) => (props) => {
        const {
            field,
            value,
        } = props;
        return state.contents.find((content) => content[field] === Number(value));
    },
    nextContentId: (state) => {
        const {
            track,
            content,
            contents,
        } = state;
        let index = null;
        track.layouts.forEach((layout) => {
            if (layout.id === content.id) {
                index = track.layouts.indexOf(layout);
            }
        });
        const nextContent = contents.find((content) => {
            let result = null;

            if (track.layouts[index + 1]) {
                if (track.layouts[index + 1].id === content.id) {
                    result = content;
                }
            }

            return result;
        });

        return nextContent ? nextContent.id : false;
    },
    review: (state) => (id) => state.reviews[id],
    layoutSeparations: (state) => {
        const ids = [];
        state.track.layouts.forEach((layout) => {
            if (layout.separation) {
                console.log(ids.indexOf(layout.id) === -1);
                if (ids.indexOf(layout.id) === -1) {
                    ids.push(layout.id);
                }
            }
        });
        console.log(ids);
        return ids;
    },
    separations: (state) => state.separations,
};

const actions = {
    getTrack({ commit }) {
        const track = getItem('track');
        commit('saveTrack', track);
    },
    getContent({ commit }) {
        const content = getItem('content');
        commit('saveContent', content);

        if (Object.values(content).length === 0) {
            router.push({ name: 'home' });
        }
    },
    getHistory({ commit }) {
        const history = getItem('history');
        commit('setHistory', history);
    },
    getSeparators({ commit }) {
        const separators = getItem('separations');
        commit('saveSeparation', separators);
    },
};

export default {
    state,
    mutations,
    getters,
    actions,
};