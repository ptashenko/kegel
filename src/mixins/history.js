import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(['history']),
        selected() {
            return this.history(this.$route.params.survey);
        },
    },
    methods: {
        ...mapMutations(['setHistory']),
        saveHistory() {
            const { survey } = this.$route.params;
            this.active = this.answer;
            this.setHistory({
                anchor: survey,
                selected: this.active,
            });
        },
    },
};