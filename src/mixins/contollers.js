import { mapGetters, mapMutations, state } from 'vuex';

export default {
    computed: {
        ...mapGetters(['myPrewContentId', 'nextContentId', 'layoutSeparationsIds', 'prevContentId', 'contentBy', 'content', 'track']),
    },
    methods: {
        ...mapMutations(['saveContent', 'setSeparator']),
        next() {
            console.log(this.nextContentId);
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
            let contentId = this.content.id
            let prevContent = this.prevContentId
            let foundIndex = prevContent.findIndex(n => n == contentId)
            let sepor = this.layoutSeparationsIds
            const passed = sepor.some(n => n == prevContent[foundIndex - 1]);
            if (passed) {
                this.$router.go(-2);
            } else {
                this.$router.go(-1);
            }


            // let mmm = this.$store.state.survey.contents.find(x => x.id === this.myPrewContentId)
            // var json = localStorage.getItem('track');
            // var obj = JSON.parse(json);
            // console.log(obj.layouts);
            // console.log(mmm.id);

            // console.log(this.nextContentId);


            // if (mmm.layoutName === "KegelReview" || mmm.layoutName === "Processing") {
            //     console.log('Зашел в go KegelReview');
            //     this.$router.push({
            //         name: 'survey',
            //         params: { survey: (this.myPrewContentId - 1) },
            //     });
            // } else {
            //     this.$router.push({
            //         name: 'survey',
            //         params: { survey: mmm.id },
            //     });
            // }
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