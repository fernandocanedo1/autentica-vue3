<template>
  <form 
    class="login-form flex-column" 
    @submit.prevent="handleSubmit"
  >
    <div class="login-form-head flex-column left">
        <span class="login-form-title">Entre na sua conta</span>
        <span class="login-form-subtitle">Para acessar sua conta informe seu e-mail e senha</span>
    </div>
    <div class="login-form-inputs flex-column left">
        <span class="login-form-inputs-span">E-mail</span>
        <input 
          type="email" 
          v-model="email" 
          placeholder="Seu e-mail"
        >
        <span class="login-form-inputs-span">Senha</span>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Sua senha"
        >
        <span class="login-form-inputs-right right">Esqueci minha senha</span>
    </div>
    
    <button class="login-submit" type="submit">Fazer login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
    }
  }
}
</script>

<style>
.login-form {
    box-sizing: border-box;
    width: 617px;
    height: 492px;
    background: #ffffff;
    border: 1px solid #e6eaf2;
    border-radius: 5px;
    padding:30px;
}
.login-form-title{
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
}
.login-form-subtitle{
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
/* identical to box height */

}
.login-form-inputs-span{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}
.login-form-inputs-right{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #515D74;
}
.login-submit{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 24px;
    gap: 24px;

    width: 551px;
    height: 80px;
    left: 444px;
    top: 663px;
    border:none;

    background: #F30168;
    border-radius: 5px;


    /* Botão CTA ativo */



    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>