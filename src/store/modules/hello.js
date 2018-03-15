import shop from '../../api/shop'

// initial state
// shape: [{ id, quantity }]
const state = {
    count: 0,
}

// getters
const getters = {
    isOdd: state => state.count % 2 === 0,
    mycount: state => state.count
}

// actions
const actions = {
    async add({ commit}) {
        commit('add', 1)
    },
    async add1({dispatch, commit}){
        await dispatch('add')
        setTimeout(() => {
            commit("add", 3)
        }, 2000);
    }
}

// mutations
const mutations = {
    add(state, status) {
        state.count += status
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
