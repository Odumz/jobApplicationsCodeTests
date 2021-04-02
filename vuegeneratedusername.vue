<template>
  <div id="app">
    <input type="text" v-model="firstname" value="firstname" id="firstname">
    <input type="text" v-model="lastname" value="lastname" id="lastname">
    <button @click.prevent="generatedUsername">Generate</button>
    <span id="output">{{ generatedName }}</span>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        items: null,
        firstname: 'Coder',
        lastname: 'Byte',
        generatedName: ''
      };
    },
    methods: {
      generatedUsername () {
        let num = Math.floor((Math.random() * 10), + 1);
        let newFirstname = this.firstname.toLowerCase();
        let newLastname = this.lastname.toLowerCase();
        let newName = newFirstname + "_" + newLastname + "_" + num;
        return this.generatedName = newName;
      }
    }
  };
</script>