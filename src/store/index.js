import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            orderCount: 0,
            likesCount: 0,
            ordersData: []
        }
    },
    mutations: {
        CHANGE_ORDER_COUNT(state) {
            state.orderCount++
        },
        ADD_LIKES(state) {
            state.likesCount++
        },
        SUBTRACT_LIKES(state){
            state.likesCount--
        },
        ADD_ORDER(state,payload){
            state.ordersData.push(payload)
        }
        
    }
})

export default store