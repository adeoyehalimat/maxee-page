<template>
    <div>
        you can order your preferred cake here
    </div>
    <p> {{ data.joke }}</p>

</template>



<script>
export default {
    data(){
        return{
            data: "",
        };
    },
   mounted(){
    fetch("https://icanhazdadjoke.com", {
        headers:{
            Accept:"application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => (this.data = data));
   },
};



</script>

<style scoped>

</style>