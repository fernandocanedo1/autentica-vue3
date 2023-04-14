<template>
  <div class="r-plan r-form">
    <section class="r-form-data">
      <div class="r-form-data-title">
        <span>Dados pessoais</span>
      </div>
      <div class="r-form-data-subtitle">
        <span>Informe seus dados pessoais para acesso à sua conta</span>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="login-form-inputs flex-column left">
          <span class="login-form-inputs-span">Nome completo</span>
          <input
            class="name-form"
            type="text"
            v-model="name"
            placeholder="Informe seu nome completo"
            required
          />
          <span class="login-form-inputs-span">Celular</span>
          <input
            class="cel-form"
            type="tel"
            v-model="celular"
            placeholder="(99) 99999-0000"
            required
          />
          <span class="login-form-inputs-span">E-mail</span>
          <input
            class="email-form"
            type="email"
            v-model="email"
            placeholder="Informe seu e-mail"
            required
          />
          <span class="login-form-inputs-span">Senha</span>
          <input type="password" v-model="password" required />
          <span class="login-form-inputs-span">Confirme sua senha</span>
          <input type="password" v-model="confirmePassword" required />
        </div>
        <button class="login-submit" type="submit">Fazer login</button>
      </form>
    </section>
    <section class="r-form-site"></section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.r-form {
  width: 617px;
  padding: 28px 30px 28px 30px;
}
.r-form-data {
  padding-bottom: 5px;
}
.r-form-data-title span {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
}
.r-form-data-subtitle span {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
}
</style>