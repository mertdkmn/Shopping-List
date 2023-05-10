<script>
  export default {
    mounted(){
      this.$store.dispatch('getAllProduct');
    }
  }

</script>

<template>
  <p style="text-align: end;">
    <router-link to="/" class="mainP"> <v-btn>Ana Sayfa</v-btn> </router-link>
    <router-link to="/addProd" class="addP"><v-btn>Ürün Ekle</v-btn></router-link>
    <router-link to="/prodList" class="prodL"><v-btn>Ürün Listesi</v-btn></router-link>
  </p>
<hr>
  <router-view></router-view>
</template>

<style>
.mainP{
  margin-right: 13px;
  text-align: end;
}
.addP{
  margin-right: 13px;
  text-align: end;
}
.prodL{
  margin-right: 13px;
  text-align: end;
}

</style>
