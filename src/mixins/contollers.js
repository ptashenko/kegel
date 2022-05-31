import { mapGetters, mapMutations, state } from 'vuex';

export default {
    computed: {
        ...mapGetters(['nextContentId', 'layoutSeparationsIds', 'prevContentId', 'contentBy', 'content', 'track']),
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