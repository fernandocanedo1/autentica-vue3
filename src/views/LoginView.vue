<template>
  <div class="login">
    <img 
        alt="Locaweb logo" 
        src="../assets/locaweb1.png"
        class="login-logo"
    >
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue'
export default {
  components: { LoginForm },
    name: 'LoginView'
}
</script>
    
<style>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center; 
    }
    .login-logo{
        width: 176px;
        height: 67px;
    }
</style>