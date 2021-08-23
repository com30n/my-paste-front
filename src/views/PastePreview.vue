<template>
  <div class="preview-wrapper">
    <HeaderPreview></HeaderPreview>
    <CodePreview v-bind:text="this.$store.state.pasteObj.body"></CodePreview>
  </div>
</template>

<script>
import CodePreview from "@/components/CodePreview";
import axios from "axios";
import combineURLs from "axios/lib/helpers/combineURLs"
import HeaderPreview from "@/components/HeaderPreview";

export default {
  name: "PastePreview",
  components: {HeaderPreview, CodePreview},
  async created() {
    if (this.$store.state.pasteObj.permalink !== this.$route.path) {
      let url = combineURLs(this.$hostname + '/paste/', this.$route.path)
      const response = await axios.get(url)
      this.$store.commit('setPasteObj',
          {
            ttl: response.data.ttl,
            body: response.data.body,
            created_at: response.data.created_at,
            updated_at: response.data.updated_at,
            deleted_at: response.data.deleted_at,
            permalink: response.data.permalink
          }
      )
    }
  }
}
</script>

<style scoped>
.preview-wrapper {
  border: #42b983 1px solid;
  grid-column: 2 / -2;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;
  margin-bottom: 30px;
}

</style>