import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            likesCount: 0,
            ordersData: []
        }
    },
    mutations: {
        ADD_LIKES(state) {
            state.likesCount++
        },
        SUBTRACT_LIKES(state) {
            state.likesCount--
        },
        ADD_ORDER(state, payload) {
            state.ordersData.push(payload)
        },
        ADD_COUNT_ORDER(state, index) {
            state.ordersData[index].count += 1
        }
    },
    actions: {
        addOrder({ state, commit }, payload) {
            let has = state.ordersData.findIndex(el => el.id == payload.id)
            if (has == -1) {
                commit('ADD_ORDER', {
                    id: payload.id,
                    price: payload.price,
                    title: payload.title,
                    like: payload.like,
                    about: payload.about,
                    count: 1
                })
            } else if (has != -1) {
                commit('ADD_COUNT_ORDER', has)
            }
        }
    }
})

export default store