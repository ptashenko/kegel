import { mapGetters, mapMutations, state } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            myPrewContentId: 'myPrewContentId',
            myPrewTwoContentId: 'myPrewTwoContentId',
            nextContentId: 'nextContentId',
            layoutSeparationsIds: 'layoutSeparationsIds',
            contentBy: 'contentBy',
            contentItem: 'content',
            track: 'track',
        }),
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
                // this.$router.push({
                //     name: 'wait',
                // });

            }
        },
        cont() {
            return this.contentBy({
                field: 'id',
                value: this.$route.params.survey,
            });
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
            this.saveContent(this.contentBy({
                field: 'id',
                value: this.$route.params.survey,
            }));
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
            if (layout?.id === this.contentItem?.id) {
                if (layout.separation !== undefined) {
                    this.setSeparator(this.contentItem.id);
                }
            }
        });
    },
};