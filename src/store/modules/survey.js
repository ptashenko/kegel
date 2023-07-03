import { addItem, getItem } from '@/common/localStorage';
// import { abtest } from 'vue-a2b'
import router from '@/router';
import contents from '@/assets/quiz-settings/contents'
// abtest('experiment_1', { Baseline: 50, VariationA: 50 })
const state = () => ({
  history: {},
  track: {},
  content: {},
  separations: [],
  isBaseline: localStorage.getItem('ver') === 'baseline',
  versionName: localStorage.getItem('ver'),
  layotStep: 1,
  loader: true,
  reviews: {
    1: {
      title: 'title',
      text: 'text',
      name: 'RpgEpic123',
      rating: 5,
    },
    2: {
      title: 'title',
      text: 'text',
      name: 'RawJunky',
      rating: 5,
    },
    3: {
      title: 'title',
      text: 'text',
      name: 'FizzliviSphema',
      rating: 5,
    },
    4: {
      title: 'title',
      text: 'text',
      name: 'MasterBest069',
      rating: 5,
    },
    5: {
      title: 'title',
      text: 'text',
      name: 'UgaraticKroolKat',
      rating: 5,
    },
    6: {
      title: 'title',
      text: 'text',
      name: 'Amteleronnnnn',
      rating: 5,
    },
    7: {
      title: 'title',
      text: 'text',
      name: 'JiggySpot',
      rating: 5,
    },
    8: {
      title: 'title',
      text: 'text',
      name: 'Chauchooo',
      rating: 5,
    },
  },
});

const mutations = {
  setLOADER: (state, payload) => {
    state.loader = payload;
  },
  saveVariant(state, variant) {
    state.activeVariant = variant;
  },
  setHistory(state, props) {
    console.log("SetHistory");
    const {
      anchor,
      selected,
    } = props;
    if (anchor == null) {
      state.history = props;
    }
    state.history[anchor] = selected;
    addItem('history', state.history);
  },
  setSeparator(state, separator) {
    state.separations.push(separator);
    addItem('separations', state.separations);
  },
  clearHistory(state) {
    console.log("ClearHistory");
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
    return contents.find((content) => content[field] === Number(value));
  },
  myPrewTwoContentId: (state) => {
    const {
      track,
      content,
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
    } = state;
    let index = null;
    let currentQuiz = null;
    currentQuiz = track.layouts;
    currentQuiz.forEach((layout) => {
      if (layout.id === content.id) {
        index = currentQuiz.indexOf(layout);
      }
    });

    const myPrewContentId = contents.find((content) => {
      let result = null;
      if (currentQuiz[index - 1]) {
        if (currentQuiz[index - 1].id === content.id) {
          result = content;
        }
      }
      return result;
    });
    return myPrewContentId.id;
  },
  nextContentId: (state) => {
    console.log(state)
    const {
      track,
      content,
    } = state;
    let index = null;
    let currentQuiz = null;
    currentQuiz = track.layouts;

    currentQuiz.forEach((layout) => {
      if (layout.id === content.id) {
        index = currentQuiz.indexOf(layout);
      }
    });
    const nextContent = contents.find((content) => {
      let result = null;
      if (currentQuiz[index + 1]) {
        if (currentQuiz[index + 1].id === content.id) {
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
  getContent({ commit }, content) {
    commit('saveContent', content);
  },
  getHistory({ commit }) {
    console.log("GetHistory");
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
