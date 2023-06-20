import { createStore } from 'vuex';
import survey from './modules/survey';
import review from './modules/review';
import dataPurporse from './modules/dataPurporse';
import payments from './modules/payments'

const store = createStore({
    modules: {
        survey,
        review,
        dataPurporse,
        payments
    },
});
export default store;
