<template>
  <div class="login">
    <img 
        alt="Locaweb logo" 
        src="../assets/locaweb1.png"
        class="login-logo"
    >
    <LoginForm />
    <div class="login-bottom">
        <span>Ainda não tem conta? 
            <a @click="handleSubmit">Cadastre-se</a>
        </span>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue'
export default {
  components: { LoginForm },
    name: 'LoginView',
  methods:{
    handleSubmit(){
      this.$router.push('/plano');
    }
  }
}
</script>
    
<style>
    .login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        height: 100vh;
    }
    .login-logo{
        padding-bottom:32px;
        width: 176px;
        height: 67px;
    }
    .login-bottom{
        padding-top:32px;
    }
    .login-bottom span{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
    }
    .login-bottom a{
        color:var(--primary-color);
        text-decoration: underline;
        cursor:pointer;
    }
</style>