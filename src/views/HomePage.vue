<template>

    <div class="heading">
      <router-link to="/"> Home </router-link>
      <router-link to="/ContactPage"> Contact us </router-link>
      <router-link to="/AboutUs">About Us </router-link>
      <router-link to="/OrderNow"> Place order </router-link>
      <router-link to="/OurProducts"> Check out our Products </router-link>
      <router-view/>
    </div>
    <div class="main-page"> 
        <h1> welcome to maxee cakes online</h1>
        <img src="../assets/My-logo.jpg" alt ="my image">
    </div>
    <div>
        <div class="heading">
      <router-link to="/"> Home </router-link>
      <router-link to="/ContactPage"> Contact us </router-link>
      <router-link to="/AboutUs">About Us </router-link>
      <router-link to="/OrderNow"> Place order </router-link>
      <router-link to="/OurProducts"> Check out our Products </router-link>
      <router-view/>
    </div>
    </div>

</template>



<script setup>


</script>

<style scoped>

.heading{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  
    
    
}


img{
    height: 50%;
    width: 50%;
    padding-top: 10%;
    padding-bottom: 10%;
    padding-left: 25%;
    
    
    
}
</style>