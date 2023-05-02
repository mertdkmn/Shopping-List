<template>
    <div>
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <span>İsim</span><br>
      <input 
        v-model="name"
        type="text"
        placeholder="Ürün ismi yazınız" 
      /><br>
      <hr>
      <span>Adet</span><br>
      <input 
        v-model="number"
        type="number"
        placeholder="Adet Giriniz" 
      /><br>
      <hr>
      <span>Fiyat</span><br>
      <input 
        type="number" 
        v-model="price" 
        placeholder="Fiyat Giriniz"
      />
      <hr>
      <span>Açıklama</span><br>
      <input 
        type="text"
        v-model="description"
        placeholder="Açıklama..."  
      />
      <button @click="formSubmitted">
        <span>Kaydet</span>
    </button>
    </form>
  </div>
  </template>
<script>
export default {
    data() {
      return {
        name: "",
        number: "",
        price: "",
        description: "",
        formSubmitted: false,
      };
    },
    methods:  {
      clearData(){
        this.name = "",
        this.number = "",
        this.price = "",
        this.description = ""
      },
      submitForm: function () {
        // this.formSubmitted = true
        const payload = {
           id: this.$store.state.productCount,
           name: this.name,
           number: this.number,
           price: this.price,
           description: this.description,
           isStatus: 'sell'
        };
        this.$store.dispatch('addProductToList', payload);
        this.clearData();
        // this.productList.push(product)
        // console.log(this.productList);
      }
    },
  };
</script>

<style>
.name{
    margin: auto;
}
</style>

