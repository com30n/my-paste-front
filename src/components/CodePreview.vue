<template>
  <div class="code-text">
    <textarea class="text" readonly rows="5" v-model="text"></textarea>
  </div>
</template>

<script>
export default {
  name: "CodePreview",
  props: {
    text: String
  }
}
</script>

<style scoped>
.code-text {
  margin: 30px;
  height: 90px;
  background: #fcfcfc;
}

.text {
  grid-column: 1 / -1;
  grid-row: 2 / 4;
  background: white;
  border: #42b983 1px solid;
  resize: none;
  font-family: inherit;
  white-space: pre;
}

.text:focus {
  border-radius: 0;
  outline: none !important;
  box-shadow: 0 0 10px #719ECE;
}

</style>