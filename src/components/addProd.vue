<template>
  <div>
  <form @submit.prevent="submitForm" v-if="!formSubmitted" class="formStyle">
    <label class="form-label">İsim</label>
    <input 
     class="form-control"
      v-model.trim="name"
      type="text"
      placeholder="Ürün ismi yazınız" 
    />
    <br>
    <label class="form-label">Adet</label>
    <input 
    class="form-control"
      v-model.number="number"
      type="number"
      placeholder="Adet Giriniz" 
    />
    <br>
    <label class="form-label">Fiyat</label>
    <input 
    class="form-control"
      type="number" 
      v-model.number="price" 
      placeholder="Fiyat Giriniz"
    />
    <br>
    <label class="form-label">Açıklama</label>
    <input 
    class="form-control"
      type="text"
      v-model.trim="description"
      placeholder="Açıklama..."  
    />
    <br>
    <button class="btn btn-primary" style="background-color: black; color: beige; border: black;">
      <label>Kaydet</label>
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
.formStyle{
  margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
label{
  font-size: large;
  font-family: serif;
  font-weight: 500;
}
input{
  margin-top: 5px;
}
br{
  margin-top: 5px;
}
</style>

