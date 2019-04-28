<template>
 
  <div
    id="e3"
    style="max-width: 900px; margin: auto;"
    class="grey lighten-3"
  > 
    <v-card>
     <v-container
        fluid
        grid-list-lg
      >
      <h1 class="font-weight-light"> Get Games</h1>
          

      
    
   <v-layout row wrap>

        <v-flex xs12 sm12 md6>
         <v-select
          :items="items"
          box
          label="Games"
        ></v-select>
        </v-flex>

        <v-flex xs12 sm12 md6>
        
        <v-btn color="purple">Go</v-btn>
        </v-flex>

</v-layout>
<v-layout>
   <v-flex xs12 sm12 md12>
  <v-text-field
           
            placeholder="Search"
          ></v-text-field>
   </v-flex>
    <v-flex xs12 sm12 md12>

        <v-btn color="warning">Go</v-btn>


      </v-flex>


      </v-layout>  
      </v-container>
        
    </v-card>
  </div>

</template>

<script>
 //import axios from "axios"
 import gql from "graphql-tag"

export default {
  data: () => ({
      items: ['Update', 'Create', 'Delete']
    }),
  mounted() {
    // return axios
    //   .get("https://pokeapi.co/api/v2/pokemon/1")
    //   .then(response => (this.info = response));
  },
  apollo: {
    products: gql`query {
    products {
    id
    name
    desc
    price
  }
    }`,
  }
};



</script>

<style>

h1 {
  color: #D50000;

}

</style>
