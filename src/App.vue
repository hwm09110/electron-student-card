<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,body,#app{
    width: 100%;
    height: 100%;
    background-color: #efeff4;
    overflow: auto;
  }
  #app{
    max-width: 750px;
    margin: auto;
  }
</style>
