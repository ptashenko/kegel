import { mapGetters, mapMutations, state } from 'vuex';

export default {
    computed: {
        ...mapGetters(['myPrewContentId', 'myPrewTwoContentId', 'nextContentId', 'layoutSeparationsIds', 'contentBy', 'content', 'track']),
    },
    methods: {
        ...mapMutations(['saveContent', 'setSeparator']),
        next() {
            if (this.nextContentId !== false) {
                window.scrollTo(0, 0),
                    this.$router.push({
                        name: 'survey',
                        params: { survey: this.nextContentId },
                    });
            } else {
                console.log('переход на страницу wait');
                // window.scrollTo(0, 0),
                //     this.$router.push({
                //         name: 'wait',
                //     });

            }
        },
        cont() {
            const content = this.contentBy({
                field: 'id',
                value: this.$route.params.survey,
            });
            return content
        },
        back() {
            let infolayout = this.$store.state.survey.contents.find(x => x.id === this.myPrewContentId)
            if (infolayout.layoutName === "KegelReview" || infolayout.layoutName === "Processing") {
                this.$router.push({
                    name: 'survey',
                    params: { survey: this.myPrewTwoContentId },
                });
            } else {
                if (this.cont().id > 1) {
                    this.$router.push({
                        name: 'survey',
                        params: { survey: this.myPrewContentId },
                    });
                } else {
                    console.log('controller');
                    this.$router.push({ name: 'home' })
                }

            }
        },
        route() {
            const content = this.contentBy({
                field: 'id',
                value: this.$route.params.survey,
            });
            this.saveContent(content);
        },
    },
    watch: {
        $route() {
            this.route();
        },
        loadPercent(newloadPercent, oldloadPercent) {
            if (newloadPercent < 31) {
                this.$store.state.survey.layotStep = 1
            } else if (newloadPercent > 32 && newloadPercent < 64) {
                this.$store.state.survey.layotStep = 2
            } else if (newloadPercent > 65 && newloadPercent < 99) {
                this.$store.state.survey.layotStep = 3
            } else if (newloadPercent > 99) {
                this.$store.state.survey.layotStep = 4
            }
        }
    },
    mounted() {
        this.route();

        this.track.layouts.forEach((layout) => {
            if (layout.id === this.content.id) {
                if (layout.separation !== undefined) {
                    this.setSeparator(this.content.id);
                }
            }
        });
    },
};