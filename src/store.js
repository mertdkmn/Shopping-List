import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            productList: [],
            productCount: 0
        }
    },
    getters:{
        getProductList: (state) => state.productList
    },
    mutations:{
        pushProductList(state, payload){
            state.productList.push(payload);
        },
        setProductList(state,payload){
            state.productList = payload;
        },
        setCurrentCount(state,payload){
            state.productCount = payload;
        },
        increaseCount(state){
            state.productCount++;
        },
        setStatusChange(state,payload){
            state.productList[payload].isStatus = 'sold';
        },
        
    },
    actions:{
        addProductToList({commit,state}, payload){
            commit('pushProductList', payload);
            commit('increaseCount');
            const jsonList = JSON.stringify(state.productList);
            localStorage.setItem("productCount", state.productCount);
            localStorage.setItem("productList", jsonList);
        },
        getAllProduct({commit,state}){
            const productList = localStorage.getItem("productList");
            const productCount = localStorage.getItem("productCount");
            if(productList){
                commit('setProductList', JSON.parse(productList));
            }
            if(productCount){
                commit('setCurrentCount', productCount);
            }
        },
        isStatusChange({commit,state},payload){
            console.log(payload, '__payload');
            const productIndex = state.productList.findIndex(x => x.id == payload);
            console.log(productIndex);
            commit('setStatusChange', productIndex);
            console.log(state.productList, '__product list')
            localStorage.setItem('productList',JSON.stringify(state.productList));
        },
        deleteFromList({commit, state}, payload){
            const deletedItem = state.productList.filter((product) => product.id != payload)
            commit('setProductList', deletedItem);
            localStorage.setItem('productList', JSON.stringify(state.productList));
        }
    }
})

export default store