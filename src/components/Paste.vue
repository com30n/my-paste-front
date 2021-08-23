<template>
  <div class="paste-container">
    <textarea class="text" id="text" rows="5" v-model="text"></textarea>
    <button class="button" v-on:click="sendPaste">Paste</button>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
import combineURLs from "axios/lib/helpers/combineURLs"

export default {
  name: 'Paste',
  data() {
    return {
      created_at: "",
      updated_at: "",
      permalink: "",
      text: ""
    }
  },
  methods: {
    async sendPaste() {
      try {
        let d = {"body": this.text}
        let url = combineURLs(this.$hostname, '/paste/')
        const response = await axios.post(url, d)
        console.log(this.$store.pasteObj)
        console.log(response)
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
        await router.push({path: this.$store.state.pasteObj.permalink})
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>

.paste-container {
  grid-column: 2 / -2;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content 1fr;
  margin: 30px;
}

.text {
  grid-column: 1 / -1;
  grid-row: 2 / 4;
  background: white;
  border: #42b983 1px solid;
  resize: none;
  font-family: inherit;
}
.text:focus {
  border-radius: 0;
  outline: none !important;
  /*border:1px solid red;*/
  box-shadow: 0 0 10px #719ECE;

}

.button {
  margin-top: 20px;
  border: #42b983 1px solid;
  grid-row: 4 / 4;
  grid-column: -3 / -1;
  background: #42b983;
  color: white;
  font-family: inherit;
}

</style>
