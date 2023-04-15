<template>
  <div class="r-form center">
    <section class="r-form-data">
      <div class="r-form-data-title">
        <span>Dados pessoais</span>
      </div>
      <div class="r-form-data-subtitle">
        <span>Informe seus dados pessoais para acesso à sua conta</span>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="login-form-inputs flex-column left">
          <span class="r-form-input-span">Nome completo</span>
          <input class="name-form" type="text" v-model="name" placeholder="Informe seu nome completo" required />
          <span class="r-form-input-span">Celular</span>
          <input class="cel-form" type="tel" v-model="celular" placeholder="(99) 99999-0000" required />
          <span class="r-form-input-span">E-mail</span>
          <input class="email-form" type="email" v-model="email" placeholder="Informe seu e-mail" required />
          <span class="r-form-input-span">Senha</span>
          <input type="password" v-model="password" required />
          <div class="r-form-legend">
            <span>No mínimo 8 caracteres</span>
          </div>
          <span class="r-form-input-span">Confirme sua senha</span>
          <input type="password" v-model="confirmePassword" required />
        </div>
      </form>
    </section>
    <div class="r-form-divider bot-5px">
      <hr class="divider" />
    </div>
    <section class="r-form-site">
      <div class="r-form-data-title bot-15px">
        <span>Dados do seu site</span>
      </div>
      <span class="r-form-input-span">Nome do seu site</span>
      <input class="nameSite-form bot-8px" type="text" v-model="nameSite" placeholder="Meu site" required />
      <div class="r-form-legend">
        <span>Exatamente igual o título do seu site</span>
      </div>
    </section>
    <div class="r-form-divider">
      <hr class="divider" />
    </div>
    <section class="r-form-submit">
      <label class="container-checkbox">
        Ao concluir com seu cadastro você concorda com nossos <span class=text-line>termos de uso</span> e <span class=text-line>politicas de privacidade</span>.

        <input type="checkbox" >
        <span class="checkmark"></span>
      </label>
      <button class="login-submit" type="submit">Fazer login</button>
      </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.r-form {
  width: 617px;
  margin-top: 35px;
  height: 100%;
  padding-bottom:27px;
  background: #FFFFFF;
  border: 1px solid #E6EAF2;
  border-radius: 5px;
}

.r-form section {
  padding-left: 30px;
  padding-right: 30px;
}

.r-form-data {
  padding-top: 28px;
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

.r-form-data-subtitle {
  padding-top: 5px;
  padding-bottom: 4px
}

.r-form-data-subtitle span {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
}

.r-form input {
  max-height: 60px !important;
  width: 100%;
  height: 60px;
  left: 261px;
  top: 391px;
  margin-bottom: 5px !important;
  background: #FFFFFF;
  border: 1px solid rgba(81, 93, 116, 0.5);
  border-radius: 5px;
}

.r-form-input-span {
  padding-top: 10px;
  padding-bottom: 8px;
}

.r-form hr {
  margin: 0 auto;
  max-width: 590px !important;
}

.r-form-divider {
  padding: 15px 0 15px 0;
}

.r-form-legend span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  /* identical to box height */

  color: #515D74 !important;
}

.bot-5px {
  margin-bottom: 5px;
}

.bot-15px {
  margin-bottom: 15px;
}

.bot-8px {
  margin-top: 8px;
}</style>