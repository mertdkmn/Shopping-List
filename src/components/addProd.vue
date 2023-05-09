<template>
  <div>
  <form @submit.prevent="submitForm" v-if="!formSubmitted">
    <span>İsim</span><br>
    <input 
      v-model.trim="name"
      type="text"
      placeholder="Ürün ismi yazınız" 
    /><br>
    <hr>
    <span>Adet</span><br>
    <input 
      v-model.number="number"
      type="number"
      placeholder="Adet Giriniz" 
    /><br>
    <hr>
    <span>Fiyat</span><br>
    <input 
      type="number" 
      v-model.number="price" 
      placeholder="Fiyat Giriniz"
    />
    <hr>
    <span>Açıklama</span><br>
    <input 
      type="text"
      v-model.trim="description"
      placeholder="Açıklama..."  
    />
    <button>
      <span>Kaydet</span>
  </button>
  </form>
</div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
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
      if(this.name && this.number && this.price && this.description){
      const payload = {
         id: uuidv4(),
         name: this.name,
         number: this.number,
         price: this.price,
         description: this.description,
         isStatus: 'sell',
        
      };
      this.$store.dispatch('addProductToList', payload);
      this.$toast.success('Ürün Başarıyla Eklendi')
    }
    else{
      this.$toast.error('Boşlukları Doldurunuz')
    }
      
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

