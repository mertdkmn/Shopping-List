<script>
  export default {
    mounted(){
      this.$store.dispatch('getAllProduct');
    }
  }

</script>

<template>
  <p>
    <router-link to="/" class="mainP"> <button>Ana Sayfa</button> </router-link>
    <router-link to="/addProd" class="addP"><button>Ürün Ekle</button></router-link>
    <router-link to="/prodList" class="prodL"><button>Ürün Listesi</button></router-link>
  </p>
<hr>
  <router-view></router-view>
</template>

<style>
.mainP{
  margin-right: 13px;
}
.addP{
  margin-right: 13px;
}

</style>
