import { createStore } from 'vuex';
import survey from './modules/survey';
import review from './modules/review';
import dataPurporse from './modules/dataPurporse';

export default createStore({
    modules: {
        survey,
        review,
        dataPurporse,
    },
});