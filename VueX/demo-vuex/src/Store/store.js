import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        result: 0
    },
    mutations: {
        increment(state, payload) {
            state.result += payload
        },
        decrement(state, payload) {
            state.result -= payload
        }
    },
    actions: {
        increment(vueContext, payload) {
            vueContext.commit('increment', payload)
        },
        decrement(vueContext, payload) {
            vueContext.commit('decrement', payload)
        }
    },
    getters: {
        changeResult(state){
            return state.result+10
        }
    }
})