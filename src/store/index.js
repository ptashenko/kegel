import { createStore } from 'vuex';
import survey from './modules/survey';
import review from './modules/review';

export default createStore({
    modules: {
        survey,
        review,
    },
});