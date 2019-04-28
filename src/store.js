import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      mutations: [
        {text: 'Create a Product', value: 'CreateGraph'}, 
        {text: 'Update a Product', value: 'UpdateGraph'},
        {text: 'Delete a Product', value: 'DeleteGraph'},
        ],
 
      otherRoutes: [
        {text: 'Create a Product', value: 'CreateAPI'}, 
        {text: 'Update a Product', value: 'UpdateAPI'},
        {text: 'Delete a Product', value: 'DeleteAPI'},
        ],
  },
  mutations: {},
  actions: {}
});