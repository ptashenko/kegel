const versionName = localStorage.getItem('ver')
const isBaseline = versionName === 'baseline'
export default [{
  id: 1,
  title: 'title',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  steps: false,
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3'
    ],
  },
},
{
  id: 2,
  title: 'title',
  text: 'text',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 3,
  title: 'title',
  steps: true,
  active: true,
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
      'answers.a_6',
    ],
  },
},
{
  id: 4,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 5,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 6,
  title: 'title',
  text: 'text',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 61,
  title: 'title',
  text: 'text',
  video: 'video',
  poster: 'poster',
  layoutName: 'StandartTwo',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 7,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 8,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
    ],
  },
},
{
  id: 9,
  title: 'title',
  layoutName: 'standart',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  buttons: [{
    id: 1,
    logo: 'logo_source_1',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 10,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 11,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 12,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 333,
  active: true,
  title: 'title',
  thumbnail: 'image',
  layoutName: 'KegelReview',
  reviews: [8],
  proc: 'proc',
  buttons: [{
    id: 1,
    logo: 'logo_source_3',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 14,
  title: 'title',
  layoutName: 'Questions',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 15,
  title: 'title',
  layoutName: 'Questions',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 16,
  title: 'title',
  layoutName: 'Questions',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 17,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 18,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 20,
  title: 'title',
  layoutName: 'Reviews',
  thumbnail: 'image',
  reviews: [1, 2, 3, 4, 5, 6],
},
{
  id: 201,
  title: 'title',
  layoutName: 'Reviews',
  ref: "EDcan",
  thumbnail: 'image',
  reviews: [4, 1, 6, 5, 2, 3],
},
{
  id: 21,
  title: 'title',
  layoutName: 'Reviews',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 22,
  title: 'title',
  layoutName: 'Reviews',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 23,
  title: 'title',
  layoutName: 'Reviews',
  answer: {
    style: 'radio',
    answerClass: 'sexual',
    answerList: [
      'answers.a_1',
      'answers.a_2',
    ],
  },
},
{
  id: 24,
  title: isBaseline
    ? 'title.t_1'
    : 'title.t_2',
  layoutName: 'standart',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  buttons: [{
    id: 1,
    logo: 'logo_source_2',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 25,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 26,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 27,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 272,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 28,
  title: 'title',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  layoutName: 'standart',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 282,
  title: 'title',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  layoutName: 'standart',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 283,
  title: 'title',
  thumbnail: 'image',
  layoutName: 'standart',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 29,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 30,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
    ],
  },
},
{
  id: 31,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 32,
  layoutName: isBaseline ? 'Processing' : 'Processing_v2',
  dark: true,
},
{
  id: 321,
  title: 'title',
  layoutName: 'Reviews',
  thumbnail: 'image',
  reviews: [4, 5, 6, 1, 2, 3],
},
{
  id: 322,
  title: 'title',
  layoutName: 'Reviews',
  thumbnail: 'image',
  reviews: [1, 2, 3, 4, 5, 6],
},
{
  id: 323,
  title: 'title',
  layoutName: 'Reviews',
  thumbnail: 'image',
  reviews: [4, 1, 6, 5, 2, 3],
},
{
  id: 33,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 34,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 35,
  title: 'title',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  text: 'text',
  dark: true,
},
{
  id: 353,
  title: 'title',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  text: 'text',
  buttonsText: ['buttons.back', 'buttons.forward'],
  dark: true,
},
{
  id: 351,
  title: 'title',
  layoutName: 'Reviews',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 352,
  title: 'title',
  video: 'video',
  poster: 'poster',
  layoutName: 'standart',
  text: 'text',
  dark: true,
},
{
  id: 37,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 38,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 39,
  title: isBaseline
    ? 'title.t_1'
    : 'title.t_2',
  layoutName: 'standart',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  buttons: [{
    id: 1,
    logo: 'logo_source_2',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 40,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 401,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 41,
  title: 'title',
  tilteRed: '8/10 ',
  thumbnail: 'image',
  layoutName: 'KegelReview',
  reviews: [7],
  buttons: [{
    id: 1,
    logo: 'logo_source_4',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 42,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 43,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
    ],
  },
},
{
  id: 44,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 45,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
    ],
  },
},
{
  id: 450,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 451,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 453,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 46,
  title: 'title',
  answer: {
    style: 'radio',
    answerClass: 'sexual',
    answerList: [
      'answers.a_1',
      'answers.a_2',
    ],
  },
},
{
  id: 47,
  title: isBaseline
    ? 'title.t_1'
    : 'title.t_2',
  layoutName: 'standart',
  thumbnail: 'image',
  buttons: [{
    id: 1,
    logo: 'logo_source_1',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 49,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5',
    ],
  },
},
{
  id: 50,
  title: 'title',
  layoutName: 'standart',
  thumbnail: 'image',
  buttons: [{
    id: 1,
    logo: 'logo_source_1',
    title: 'titles.t_1',
    text: 'text',
  },
  {
    id: 2,
    logo: 'logo_source_2',
    title: 'titles.t_2',
    text: 'text',
  },
  ],
  dark: true,
},
{
  id: 51,
  title: isBaseline
    ? 'title.t_1'
    : 'title.t_2',
  layoutName: 'standart',
  thumbnail: isBaseline ? 'image' : 'image_v2',
  buttons: [{
    id: 1,
    logo: 'logo_source_2',
    title: 'title',
    text: 'text',
  },],
  dark: true,
},
{
  id: 52,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 53,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5'
    ],
  },
},
{
  id: 54,
  title: 'title',
  answer: {
    style: 'buttons',
    textLeft: 'textLeft',
    textRight: 'textRight',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
      'answers.a_5'
    ],
  },
},
{
  id: 55,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
      'answers.a_4',
    ],
  },
},
{
  id: 56,
  title: 'title',
  answer: {
    style: 'radio',
    answerList: [
      'answers.a_1',
      'answers.a_2',
      'answers.a_3',
    ],
  },
},
{
  id: 57,
  title: 'title',
  layoutName: 'Reviews',
  thumbnail: 'image',
  reviews: [4, 5, 6, 1, 2, 3],
},
]
