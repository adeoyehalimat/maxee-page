<template>
    
    <div >
      <router-view/> 
    </div>
   
    <OrderNow/>
</template>

<script setup>
import OrderNow from './views/OrderNow.vue'
</script>

<style scoped>
.pages{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: bold;
}

</style>
