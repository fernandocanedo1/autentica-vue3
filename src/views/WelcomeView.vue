<template>
    <section class="welcome-head">
        <WelcomeHead 
          :user= "'joao'"
        />
    </section>
    <section class="welcome-body">
        <WelcomeBody 
          :user="'joão'"
        />
    </section>
   
</template>

<script>
import WelcomeHead from "@/components/Welcome/WelcomeHead.vue";
import WelcomeBody from "@/components/Welcome/WelcomeBody.vue";
export default{
    components: {WelcomeHead, WelcomeBody}
}
</script>

<style>
.welcome-body {
    padding-top: 151px;
}
</style>