const state = {
    name: '',
    password: ''
}

// getters
const getters = {
}

// actions
const actions = {
    async login({ commit}) {
        //commit('add', 1)
        this.$router.push('hello');
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
    },
    updateName (state, name){
        state.name = name
    },
    updatePassword(state, password){
        state.password = password
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
