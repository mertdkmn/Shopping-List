<template>
    <div class="guide"> 
       <h2 >
        Bu sayfa, alışverişlerinizde size rehberlik edecek bir uygulamadır. Kendiniz bir alışveriş listesi oluşturabilir, ürünlerin adedini belirleyebilir ve ihtiyacınız olan ürünlere kolayca erişebilirsiniz.
     </h2> 
     <router-link to="/addProd" class="addP"><button class="button">Ürün Ekle</button></router-link>
     <router-view></router-view>
    </div>
</template>
<script>
</script>

<style>
.guide{
    margin-left: auto;
    margin-right: auto;
    margin-top: 13%;
    width: 50%;
    text-align: center;
}
.button{
  background-color: #000000; 
  border: none;
  color: rgb(215, 205, 179);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7%;
  margin-top: 15px;
}
body{
    background-color: rgb(215, 205, 179);
}
</style>
