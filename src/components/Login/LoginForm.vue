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
          class="email-login"
          type="email" 
          v-model="email" 
          placeholder="Seu e-mail"
          required
        >
        <span class="login-form-inputs-span">Senha</span>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Sua senha"
          required
        >
        <div class="login-form-inputs-right right">
            <a href="#">Esqueci minha senha</a>
        </div>
        
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
@import 'LoginForm.css';
</style>