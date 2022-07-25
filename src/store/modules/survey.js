import { addItem, getItem } from '@/common/localStorage';
import router from '@/router';

const state = () => ({
    history: {},
    track: {},
    content: {},
    separations: [],
    layotStep: 1,
    loader: true,
    tracks: [{
            id: 1,
            title: 'Treat ED',
            purpose: 'Strengthen erection',
            addpurpose: 'Increase sexual stamina',
            text: 'Get & stay hard easier',
            layouts: [
                { id: 1, separation: true },
                { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
                { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
                { id: 11 }, { id: 12 },
                { id: 333, separation: true },
                { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 },
                { id: 18 }, { id: 20 }, { id: 21 }, { id: 22 },
                { id: 23 },
                { id: 24, separation: true }, { id: 25 }, { id: 26 }, { id: 27 },
                { id: 28 }, { id: 29 }, { id: 30 }, { id: 31 },
                { id: 32 }, { id: 322 }, { id: 33 },
                { id: 34, separation: true }
            ],
        },
        {
            id: 2,
            title: 'Treat PE',
            purpose: 'Increase sexual stamina',
            addpurpose: 'Strengthen erection',
            text: 'Last up to 7x longer',
            layouts: [
                { id: 1, separation: true },
                { id: 35 }, { id: 3 }, { id: 21 }, { id: 351 },
                { id: 352 }, { id: 37 }, { id: 38 }, { id: 39 },
                { id: 40 }, { id: 401 },
                { id: 41, separation: true },
                { id: 14 }, { id: 15 }, { id: 42 }, { id: 43 },
                { id: 56 }, { id: 57 }, { id: 44 }, { id: 45 }, { id: 451 }, { id: 46 },
                { id: 47, separation: true },
                { id: 25 }, { id: 26 }, { id: 272 }, { id: 282 }, { id: 29 },
                { id: 30 }, { id: 31 }, { id: 32 },
                { id: 321 }, { id: 33 },
                { id: 34, separation: true }
            ],
        },
        {
            id: 3,
            title: 'I’m ok',
            purpose: 'Improve sexual performance',
            addpurpose: 'Strengthen erection',
            text: 'I just want to maximize my intimate wellness',
            layouts: [
                { id: 1, separation: true },
                { id: 353 }, { id: 61 }, { id: 3 }, { id: 49 },
                { id: 50 }, { id: 21 }, { id: 22 }, { id: 51 },
                { id: 44 }, { id: 450 }, { id: 453 },
                { id: 333, separation: true },
                { id: 14 }, { id: 15 }, { id: 52 },
                { id: 53 }, { id: 201 },
                { id: 54 }, { id: 26 }, { id: 55 },
                { id: 28, separation: true },
                { id: 29 }, { id: 30 }, { id: 31 },
                { id: 32 }, { id: 323 }, { id: 33 },
                { id: 34, separation: true }
            ],
        },
    ],
    reviews: {
        1: {
            title: 'Nice',
            text: 'Just 1 month of training and my erection is stronger. I’m happy with the results',
            name: 'RpgEpic123',
            rating: 5,
        },
        2: {
            title: 'Best of the best',
            text: 'My erection is getting harder with each training day',
            name: 'RawJunky',
            rating: 5,
        },
        3: {
            title: 'Thank you Kegel',
            text: 'As I reached my 50s I thought my heydays were over. But thanks to kegels I feel like I’m 20 again!',
            name: 'FizzliviSphema',
            rating: 5,
        },
        4: {
            title: 'Sex booster',
            text: 'Doing Kegels for about 2 months and I can definitely tell that my stamina has really increased. Now I can last for an entire night',
            name: 'MasterBest069',
            rating: 5,
        },
        5: {
            title: 'Daily training paid off',
            text: 'Now I last sooo much longer. This is amazing!',
            name: 'UgaraticKroolKat',
            rating: 5,
        },
        6: {
            title: 'Guys, you must try it',
            text: 'I followed this kegel plan and now my performance is at its peak! Guys, this is a real game-changer - don’t sleep on it',
            name: 'Amteleronnnnn',
            rating: 5,
        },
        7: {
            title: 'I’m glad I found these exercises',
            text: 'I’ve been doing Kegel exercises for 2 weeks now and I increased my stamina for real! I feel more confident with my partner. You should try Kegels as well',
            name: 'JiggySpot',
            rating: 5,
        },
        8: {
            title: 'The effect is great',
            text: 'After 4 weeks of kegels, I have no trouble getting and maintaining erection. If you’re struggling as I did, try these exercises',
            name: 'Chauchooo',
            rating: 5,
        },
    },
    contents: [{
            id: 1,
            title: 'Do you know about Pelvic Floor (PF) muscles?',
            video: 'ED_q1.mp4',
            poster: 'ED_q1.png',
            layoutName: 'standart',
            steps: false,
            answer: {
                style: 'radio',
                answerList: ['Yes, I know all about them', 'I\'ve heard about them', 'No, I don\'t'],
            },
        },
        {
            id: 2,
            title: 'The quality of your erection depends on the Pelvic Floor (PF) muscle tone',
            text: 'The PF muscles help to fill the penis with blood and prevent its outflow, so you can get & maintain a ',
            textBold: 'hard erection',
            video: 'ED_s1.mp4',
            poster: 'ED_s1.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 3,
            title: 'How old are you?',
            steps: true,
            active: true,
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
            text: 'Weak PF muscles ',
            textBold: ' can\'t hold blood ',
            AfterTextBold: ' in penis well. This leads to erection problems',
            video: 's2.mp4',
            poster: 'ED_s2.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 61,
            title: 'The quality of your erection also depends on the Pelvic Floor (PF) muscle tone',
            text: 'The PF muscles help to fill the penis with blood and prevent its outflow, so you can get & maintain a ',
            textBold: ' strong erection',
            video: 'ED_s1.mp4',
            poster: 'ED_s1.png',
            layoutName: 'StandartTwo',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 7,
            title: 'How often do you experience problems with erection?',
            answer: {
                style: 'radio',
                answerList: [
                    'All the time',
                    'Most of the time',
                    'Half the time ',
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
            thumbnail: 'ED_s3_img.png',
            buttons: [{
                id: 1,
                logo: 'logo_source_1',
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
                    'Most of the time',
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
                textLeft: 'Not hard',
                textRight: 'Very hard',
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
                textLeft: 'Not hard',
                textRight: 'Very hard',
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
            id: 333,
            active: true,
            title: ' of men improved their erections with Kegel exercises',
            tilteRed: '75.5% ',
            thumbnail: 'ED_s4.json',
            layoutName: 'KegelReview',
            reviews: [8],
            proc: 'Connecting to the database'
        },
        {
            id: 14,
            title: 'How satisfied were you with your sex life 6 months ago?',
            layoutName: 'Questions',
            answer: {
                style: 'buttons',
                textLeft: 'Not satisfied',
                textRight: 'Very satisfied',
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
            title: 'How satisfied were you with your sex life last month?',
            layoutName: 'Questions',
            answer: {
                style: 'buttons',
                textLeft: 'Not satisfied',
                textRight: 'Very satisfied',
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
            layoutName: 'Questions',
            answer: {
                style: 'buttons',
                textLeft: 'I don\'t  worry',
                textRight: 'I\'m very worried',
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
            title: 'How much do erection problems affect the relationship with your partner?',
            answer: {
                style: 'buttons',
                textLeft: 'They don\'t affect',
                textRight: 'They affect a lot',
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
            title: 'How much do problems with erection affect your quality of life?',
            answer: {
                style: 'buttons',
                textLeft: 'They don\'t affect',
                textRight: 'They affect a lot',
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
            ref: "EDcan",
            thumbnail: 'ED.json',
            reviews: [1, 2, 3, 4, 5, 6],
        },
        {
            id: 201,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            ref: "EDcan",
            thumbnail: 'PE.json',
            reviews: [4, 1, 6, 5, 2, 3],
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
                    '15 minutes or more',
                ],
            },
        },
        {
            id: 22,
            title: 'How often does your sex last less than 2 minutes?',
            layoutName: 'Reviews',
            answer: {
                style: 'radio',
                answerList: [
                    'Never',
                    'Rarely',
                    'Half of the time',
                    'Most of the time',
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
                answerClass: 'sexual',
                answerList: [
                    'Yes, I\'d like to',
                    'No, I don\'t want to',
                ],
            },
        },
        {
            id: 24,
            title: `Men who perform Kegel exercises can increase their sexual stamina up to `,
            afterTilteRed: '7x',
            layoutName: 'standart',
            thumbnail: 'ED_s5.png',
            buttons: [{
                id: 1,
                logo: 'logo_source_2',
                title: 'the Sapienza University',
                text: 'Source:',
            }, ],
        },
        {
            id: 25,
            title: 'How would you rate your libido (sex drive) 1 year ago?',
            answer: {
                style: 'buttons',
                textLeft: 'Low',
                textRight: 'High',
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
                textLeft: 'Low',
                textRight: 'High',
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
                    'No, I don\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 272,
            title: 'Do you take any medications to increase stamina?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, every time',
                    'I take them sometimes',
                    'No, I don\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 28,
            title: 'Kegel exercises are better than medications',
            thumbnail: 'ED_s6.png',
            layoutName: 'standart',
            buttonsText: ['Back', 'I got it'],
        },
        {
            id: 282,
            title: 'Kegel exercises are better than medications',
            thumbnail: 'PE_s6.png',
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
                textLeft: 'Unhealthy',
                textRight: 'Healthy',
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
            id: 321,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            thumbnail: 'PE.json',
            reviews: [4, 5, 6, 1, 2, 3],
        },
        {
            id: 322,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            thumbnail: 'ED.json',
            reviews: [1, 2, 3, 4, 5, 6],
        },
        {
            id: 323,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            thumbnail: 'ED.json',
            reviews: [4, 1, 6, 5, 2, 3],
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
                    'Several times a month',
                    'I don\'t exercise at all',
                ],
            },
        },
        {
            id: 34,
            title: 'How often do you get stressed?',
            answer: {
                style: 'buttons',
                textLeft: 'I don\'t stress',
                textRight: 'I stress a lot',
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
            video: 'PE_s1.mp4',
            poster: 'PE_s1.png',
            layoutName: 'standart',
            aftertext: 'Thanks to the strong PF muscles you can ',
            textbold: ' delay ejaculation ',
            text: ' for as long as you want',
        },
        {
            id: 353,
            title: 'Your sexual stamina depends on the Pelvic Floor (PF) muscle tone',
            video: 'PE_s1.mp4',
            poster: 'PE_s1.png',
            layoutName: 'standart',
            aftertext: 'Thanks to the strong PF muscles you can ',
            textbold: ' delay ejaculation ',
            text: ' for as long as you want',
            buttonsText: ['Back', 'Continue'],
        },
        {
            id: 351,
            title: 'How often does your sex last less than 2 minutes?',
            layoutName: 'Reviews',
            answer: {
                style: 'radio',
                answerList: [
                    'Never',
                    'Rarely',
                    'Half of the time',
                    'Most of the time',
                    'All the time',
                ],
            },
        },
        {
            id: 352,
            title: 'Just like any other muscle in the body, your PF muscles weaken without training',
            video: 's2.mp4',
            poster: 'ED_s2.png',
            layoutName: 'standart',
            aftertext: 'Weak PF muscles ',
            textbold: ' can\'t let you compress the urethra enough ',
            text: ' to delay ejaculation for as long as you want',
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
            title: 'How long should ideal sex last, in your opinion?',
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
            title: 'You can strengthen your PF muscles & increase sexual stamina up to ',
            afterTilteRed: '7x',
            afterTilteText: ' by doing Kegel exercises',
            layoutName: 'standart',
            thumbnail: 'ED_s5_img.png',
            buttons: [{
                id: 1,
                logo: 'logo_source_2',
                title: 'the Sapienza University',
                text: 'Source:',
            }, ],
        },
        {
            id: 40,
            title: 'How hard is it for you to control your ejaculation during masturbation?',
            answer: {
                style: 'buttons',
                textLeft: 'Not hard',
                textRight: 'Very hard',
                answerList: [1, 2, 3, 4, 5],
            },
        },
        {
            id: 401,
            title: 'How hard is it for you to control your ejaculation during sex?',
            answer: {
                style: 'buttons',
                textLeft: 'Not hard',
                textRight: 'Very hard',
                answerList: [1, 2, 3, 4, 5],
            },
        },
        {
            id: 41,
            title: ' men improved their stamina with Kegel exercises',
            tilteRed: '8/10 ',
            thumbnail: 'ED_s4.json',
            layoutName: 'KegelReview',
            reviews: [7],
        },
        {
            id: 42,
            title: 'How much do you worry about ejaculating earlier than you want?',
            answer: {
                style: 'buttons',
                textLeft: 'I don\'t  worry',
                textRight: 'I\'m very worried',
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
            id: 450,
            title: 'Have you ever failed to get a full erection for sex?',
            answer: {
                style: 'radio',
                answerList: [
                    'It never happened',
                    'It happens rarely',
                    'It happens often',
                    'It happens always',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 451,
            title: 'Can you have sex 2 times in a row?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, without any problems',
                    'Yes, but I must try hard',
                    'No, I can\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 453,
            title: 'Can you have sex 2 times in a row?',
            answer: {
                style: 'radio',
                answerList: [
                    'Yes, without any problems',
                    'Yes, but I must try hard',
                    'No, I can\'t',
                    'I don\'t want to answer',
                ],
            },
        },
        {
            id: 46,
            title: 'Do you want to strengthen your erection?',
            answer: {
                style: 'radio',
                answerClass: 'sexual',
                answerList: [
                    'Yes, I\'d like to',
                    'No, I don\'t want to',
                ],
            },
        },
        {
            id: 47,
            afterTilteRed: '75.5%',
            afterTilteText: ' of men improved their erection with Kegel exercises',
            layoutName: 'standart',
            thumbnail: 'PE_s5.png',
            buttons: [{
                id: 1,
                logo: 'logo_source_1',
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
                textLeft: 'Not satisfied',
                textRight: 'Very satisfied',
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
            thumbnail: 'OK_s3.png',
            buttons: [{
                    id: 1,
                    logo: 'logo_source_1',
                    title: 'The Nuffield Somerset Hospital',
                    text: 'Source:',
                },
                {
                    id: 2,
                    logo: 'logo_source_2',
                    title: 'the Sapienza University',
                    text: 'Source:',
                },
            ],
        },
        {
            id: 51,
            title: 'Men who perform Kegel exercises can increase their stamina up to ',
            afterTilteRed: '7 times',
            layoutName: 'standart',
            thumbnail: 'ED_s5_img.png',
            buttons: [{
                id: 1,
                logo: 'logo_source_2',
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
            title: 'How would you rate your libido (sex drive) 1 year ago?',
            answer: {
                style: 'buttons',
                textLeft: 'Low',
                textRight: 'High',
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
        {
            id: 57,
            title: 'Based on your personal goals you can',
            layoutName: 'Reviews',
            thumbnail: 'PE.json',
            reviews: [4, 5, 6, 1, 2, 3],
        },
    ],
});

const mutations = {
    setLOADER: (state, payload) => {
        state.loader = payload;
    },
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
    LOADER: state => {
        return state.loader;
    },
    contentBy: (state) => (props) => {
        const {
            field,
            value,
        } = props;
        return state.contents.find((content) => content[field] === Number(value));
    },
    myPrewTwoContentId: (state) => {
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
        const myPrewTwoContentId = contents.find((content) => {
            let result = null;
            if (track.layouts[index - 2]) {
                if (track.layouts[index - 2].id === content.id) {
                    result = content;
                }
            }
            return result;
        });
        return myPrewTwoContentId.id;
    },
    myPrewContentId: (state) => {
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
        const myPrewContentId = contents.find((content) => {
            let result = null;
            if (track.layouts[index - 1]) {
                if (track.layouts[index - 1].id === content.id) {
                    result = content;
                }
            }
            return result;
        });
        return myPrewContentId.id;
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
    prevContentId: (state) => {
        const mas = [];
        state.track.layouts.forEach((layout) => {
            if (layout.id) {
                console.log(layout.id);
                if (mas.indexOf(layout.id) === -1) {
                    mas.push(layout.id);
                }
            }
        })
        return mas
    },
    review: (state) => (id) => state.reviews[id],
    layoutSeparations: (state) => {
        const ids = [];
        const xxx = [];
        const res = [];
        state.track.layouts.forEach((layout) => {
            if (layout.separation) {
                if (ids.indexOf(layout.id) === -1) {
                    ids.push(layout.id);
                }
            }
        });
        state.track.layouts.forEach((layout) => {
            if (layout.id) {
                if (xxx.indexOf(layout.id) === -1) {
                    xxx.push(layout.id);
                }
            }
        });

        function findMatch(arraySmall, arrayLarge) {
            for (var i = 0; i < arrayLarge.length; i++) {
                for (var j = 0; j < arraySmall.length; j++) {
                    if (arrayLarge[i] === arraySmall[j]) {
                        res.push(i);
                    }
                }
            }
            return res;
        }
        findMatch(ids, xxx);
        return res;
    },
    layoutSeparationsIds: (state) => {
        const rob = [];
        state.track.layouts.forEach((layout) => {
            if (layout.separation) {
                if (rob.indexOf(layout.id) === -1) {
                    rob.push(layout.id);
                }
            }

        });
        return rob;
    },
    separations: (state) => state.separations,
};

const actions = {
    LOADER(context, data) {
        context.commit('LOADER', data)
    },
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