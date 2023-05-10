<script>
  export default {
    mounted(){
      this.$store.dispatch('getAllProduct');
    }
  }

</script>

<template>
  <p class="topBtns" style="text-decoration-color: black;">
    <router-link to="/" class="mainP"> <b-button class="linkBtn" style="color: black;">Ana Sayfa</b-button> </router-link>
    <router-link to="/addProd" class="mainP"><b-button class="linkBtn" style="color: black;">Ürün Ekle</b-button></router-link>
    <router-link to="/prodList" class="mainP"><b-button class="linkBtn" style="color: black;">Ürün Listesi</b-button></router-link>
  </p>
<hr>
  <router-view></router-view>
</template>

<style>
.topBtns{
   text-align: end;
    margin-top: 5px;
    margin-bottom: -7px;
    padding: 10px 0px;
}
.mainP{
  margin-right: 13px;
  text-decoration: none !important;
}
.mainP:hover .linkBtn {
  border-bottom: 2px solid #0f2868;
  padding-bottom: 5px;
}
.addP{
  margin-right: 13px;
  text-decoration:none;
}
.prodL{
  margin-right: 13px;
  text-decoration:none;

}

</style>
