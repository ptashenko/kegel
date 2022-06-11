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
                this.$router.push({
                    name: 'wait',
                });
            }
        },
        back() {

            // let contentId = this.content.id
            // let prevContent = this.prevContentId
            // let foundIndex = prevContent.findIndex(n => n == contentId)
            // let sepor = this.layoutSeparationsIds
            let infolayout = this.$store.state.survey.contents.find(x => x.id === this.myPrewContentId)
            if (infolayout.layoutName === "KegelReview" || infolayout.layoutName === "Processing") {
                // this.$router.go(-2);
                this.$router.push({
                    name: 'survey',
                    params: { survey: this.myPrewTwoContentId },
                });
            } else {
                // this.$router.go(-1);
                console.log(' Поле layoutName нет ');
                this.$router.push({
                    name: 'survey',
                    params: { survey: this.myPrewContentId },
                });
            }
        },
        route() {
            if (this.nextContentId !== false) {
                const content = this.contentBy({
                    field: 'id',
                    value: this.$route.params.survey,
                });
                this.saveContent(content);
            }
        },
    },
    watch: {
        $route() {
            this.route();
        },
        loadPercent(newloadPercent, oldloadPercent) {
            console.log(this.$store.state.survey.layotStep);
            if (newloadPercent < 31) {
                console.log(newloadPercent);
                this.$store.state.survey.layotStep = 1
                console.log(this.$store.state.survey.layotStep);
            } else if (newloadPercent > 32 && newloadPercent < 64) {
                console.log(newloadPercent);
                this.$store.state.survey.layotStep = 2
            } else if (newloadPercent > 65 && newloadPercent < 99) {
                console.log(newloadPercent);
                this.$store.state.survey.layotStep = 3
            } else if (newloadPercent > 99) {
                console.log(newloadPercent);
                this.$store.state.survey.layotStep = 4
            }
        }
    },
    mounted() {
        this.route();

        this.track.layouts.forEach((layout) => {
            // console.log(layout.id);
            // console.log(this.content.id);
            // console.log(this.setSeparator);
            if (layout.id === this.content.id) {
                if (layout.separation !== undefined) {
                    this.setSeparator(this.content.id);
                }
            }
        });
    },
};