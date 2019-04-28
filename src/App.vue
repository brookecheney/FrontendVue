<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span> </span>
        <span class="font-weight-light">Video Game Central</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="toggle_one" mandatory>
        <v-btn>GraphQl Server</v-btn>

        <v-btn>Restful Server</v-btn>
   
      </v-btn-toggle>

    </v-toolbar>

 
  <v-content>
      <router-view></router-view>
      <HelloWorld/>
    </v-content>

  
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
        
  },
  data () {
    return {
      text: 'center',
        icon: 'justify',
        toggle_one: 0,
    }
  }
}
</script>

<style>
h1 {
  color: white;
}



</style>

