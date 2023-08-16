<template>
  <div>
    <cover-component v-if="count === 0"/>
    <library-links-page v-if="count === 1"/>
    <h1 v-if="count === 2">Learn to create Accounts</h1>
    <h1 v-if="count === 3">Learn to enter Transactions</h1>
  </div>
</template>

<script>
import LibraryLinksPage from '/src/pages/Docs/components/LibraryLinksPage.vue';
import CoverComponent from "/src/pages/Docs/components/CoverComponent.vue";
export default {
  name: "TableOfContentsPage",
  components: {
    CoverComponent,
    LibraryLinksPage,
  },
  data() {
    return {
      previousText: "Go forward",
      nextText: "Table of Contents",
      count: 0,
      showPreviousButton: false,
      showNextButton: true,
      pages: [
        {
          title: "Cover Page"
        },
        {
          title: "Table of Contents"
        },
        {
          title: "Creating Accounts"
        },
        {
          title: "Entering Transactions"
        },
      ],
    };
  },
  methods: {
    setNavigationButtons(){
      if (this.count === 0) {
        this.previousText = "Go forward"
        this.nextText = "Table of Contents"
        this.showPreviousButton = false;
      }
      if (this.count === 1) {
        this.previousText = "Go back"
        this.previousText = this.pages[this.count -1].title
        this.nextText = this.pages[this.count +1].title
      }
      if (this.count === 2) {
        this.previousText = "Go back"
        this.previousText = this.pages[this.count -1].title
        this.nextText = this.pages[this.count +1].title
      }
      if (this.count === 3) {
        this.previousText = "Go back"
        this.previousText = this.pages[this.count -1].title
        this.nextText = "Go back"
        this.showNextButton = false;
      }
    },
    incrementCount() {
      this.count++;
      this.showPreviousButton = true;
      this.setNavigationButtons()
    },
    decrementCount() {
      this.count--;
      this.showNextButton = true;
      this.setNavigationButtons()
    },
    readOnline() {
      this.$q.notify({
        message: "This feature is not yet available.",
        color: "negative",
        icon: "report_problem",
      });
    },
  },
};
</script>
