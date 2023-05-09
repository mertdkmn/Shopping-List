<template>
    <div >
       <ul> 
        <li v-for="item in getProductList" >
            <div>
                İsim = 
                {{ item.name }} 
            </div>
            <div>
                Fiyat = 
                {{ item.price }} TL
            </div>
            <div>
                Adet =
                {{ item.number }}
            </div>
            <div>
                Açıklama =
                {{ item.description }}
            </div>
            <div class="silSat">
                <button class="sell" :class="{' sold ': item.isStatus === 'sold'}" @click="isStatusChange(item.id)">{{ item.isStatus === 'sold' ? 'Alındı' : 'Al'}}</button>
                <button class="delete" @click="deleteFromList(item.id)">Sil</button>
            </div>
            <hr>
        </li>
       </ul>
    </div>
</template>
<script>
export default {
    computed:{
        getProductList(){
            return this.$store.getters.getProductList;
        },
    },
    mounted(){
        this.$store.dispatch('getAllProduct')
    },
    methods:{
        isStatusChange(id){
            console.log(id);
            this.$store.dispatch('isStatusChange',id)
        },
        deleteFromList(id){
            this.$store.dispatch('deleteFromList', id)
        }
    }
}
</script>

<style>
.silSat{
    text-align: end;
    margin-top: -2%;
}
.sell{
    background-color: #000000;
    border: none;
    color: rgb(17, 160, 72);
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 12%;
    margin-right: 5px;
}
.delete{
    background-color: #000000;
    border: none;
    color: rgb(17, 160, 72);
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 12%;
    margin-right: 15px;
}
.sold{
    opacity: .5;
}
button:hover{
  opacity: 0.65;
}
</style>
