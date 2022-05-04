import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['nextContentId', 'contentBy', 'content', 'track']),
  },
  methods: {
    ...mapMutations(['saveContent', 'setSeparator']),
    next() {
      if (this.nextContentId !== false) {
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
      this.$router.go(-1);
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
