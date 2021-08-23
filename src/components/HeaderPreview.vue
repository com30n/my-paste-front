<template>
  <div class="header-preview">
    <!--    <p>Format: {{}}</p>-->
    <div class="text-preview">
      <p><span class="strong-text">Created at:</span> {{ this.$store.state.pasteObj.created_at }}</p>
      <p><span class="strong-text">Updated at:</span> {{ this.$store.state.pasteObj.updated_at }}</p>
      <p><span class="strong-text">Will be deleted at:</span> {{ this.$store.state.pasteObj.deleted_at }}</p>
    </div>
    <div class="url-preview">
      <input class="url-link" id="url" v-bind:value="url">
      <button class="url-copy-button" @click="copyURL">Copy</button>
    </div>
  </div>
</template>

<script>
import combineURLs from "axios/lib/helpers/combineURLs"

export default {
  name: "HeaderPreview",
  data() {
    return {
      url: combineURLs(this.$hostname + this.$route.path)

    }
  },
  methods: {
    copyURL() {
      let urlToCopy = document.querySelector('#url')
      urlToCopy.setAttribute('type', 'text')
      urlToCopy.select()
      document.execCommand("copy");
    }
  }

}
</script>

<style scoped>
.header-preview {
  grid-column: 1 / -1;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;
}

.text-preview {
  grid-column: 2/-2;
  grid-row: 2/4;
}

.url-preview {
  grid-column: 2/-2;
  grid-row: 4/5;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;
}

.url-link {
  grid-column: 1/11;
}
.url-copy-button {
  grid-column: 11/13;
  margin-left: 5px;
}

.strong-text {
  font-weight:bold;
}
p {
  margin: 10px;
}

button {
  font: inherit;
  border: 1px solid black;
  background: #fcfcfc;
}

input {
  font-family: inherit;
  border: 1px solid #42b983;
  border-radius: 0;
  outline: none !important;
}
</style>