import { createStore } from 'vuex';
import survey from './modules/survey';

export default createStore({
  modules: {
    survey,
  },
});
