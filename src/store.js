import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            productList: [],
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
            const jsonList = JSON.stringify(state.productList);
            localStorage.setItem("productList", jsonList);
        },
        getAllProduct({commit,state}){
            const productList = localStorage.getItem("productList");
            if(productList){
                commit('setProductList', JSON.parse(productList));
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