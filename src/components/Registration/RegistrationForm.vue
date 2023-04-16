<template>
  <div class="r-form center">
    <form @submit.prevent="submitForm">
      <section class="r-form-data">
        <div class="r-form-data-title">
          <span>Dados pessoais</span>
        </div>
        <div class="r-form-data-subtitle">
          <span>Informe seus dados pessoais para acesso à sua conta</span>
        </div>

        <div class="login-form-inputs flex-column left">
          <span class="r-form-input-span">Nome completo</span>
          <input required class="name-form" type="text" v-model="state.name" placeholder="Informe seu nome completo" />
          <span class="r-form-input-span">Celular</span>
          <input class="cel-form" type="tel" v-model="state.phone" placeholder="(99) 99999-0000" />
          <span v-if="v$.phone.$error">
            <div class="r-form-legend">
              <span>Informe um número de celular válido</span>
            </div>
          </span>
          <span class="r-form-input-span">E-mail</span>
          <input class="email-form" type="email" v-model="state.email" placeholder="Informe seu e-mail" />
          <span v-if="v$.email.$error">
            <div class="r-form-legend">
              <span>Informe um e-mail válido</span>
            </div>
          </span>
          <span class="r-form-input-span">Senha</span>
          <input type="password" v-model="state.password.password" @blur="v$.password.password.$touch()">
          <span v-if="v$.password.password.$error">
            <div class="r-form-legend">
              <span>No mínimo 8 caracteres</span>
            </div>
          </span>
          <span class="r-form-input-span">Confirme sua senha</span>
          <input type="password" v-model="state.password.password_confirmation" />
          <span v-if="v$.password.password_confirmation.$error">
            <div class="r-form-legend">
              <span>As senhas não coincidem</span>
            </div>
          </span>
        </div>
      </section>
      <div class="r-form-divider bot-5px">
        <hr class="divider" />
      </div>
      <section class="r-form-site">
        <div class="r-form-data-title bot-15px">
          <span>Dados do seu site</span>
        </div>
        <span class="r-form-input-span">Nome do seu site</span>
        <input class="nameSite-form bot-8px" type="text" v-model="state.nameSite" placeholder="Meu site" />
        <div class="r-form-legend">
          <span>Exatamente igual o título do seu site</span>
        </div>
      </section>
      <div class="r-form-divider">
        <hr class="divider" />
      </div>
      <section class="r-form-submit">
        <label class="container-checkbox">
          Ao concluir com seu cadastro você concorda com nossos <span class=text-line>termos de uso</span> e <span
            class=text-line>politicas de privacidade</span>.
          <input v-model="state.check" type="checkbox">
          <span class="checkmark"></span>
        </label>
        <span v-if="v$.check.$error">
          <div class="r-form-legend">
            <span>Aceite o termo acima</span>
          </div>
          <br/>
        </span>
        <button class="login-submit" type="submit">Criar conta</button>
      </section>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import { helpers } from 'vuelidate/lib/validators'
export default {
  setup() {
    const state = reactive({
      name: '',
      phone: '',
      email: '',
      password: {
        password: '',
        password_confirmation: ''
      },
      nameSite: '',
      check: false
    })

    const rules = computed(() => {
      return {
        phone: {
          regex: helpers.regex(
            "serial",
            /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/
          ),
        },
        email: { required, email },
        password: {
          password: { required, minLength: minLength(8) },
          password_confirmation: { required, sameAs: sameAs(state.password.password) }
        },

        check: {
          required: helpers.withParams({ type: 'checkbox' }, function (value) {
            if (!value) {
              return false;
            }
            return true;
          })
        }
      }

    })

    const v$ = useValidate(rules, state)
    return {
      state,
      v$,
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('form sucess')
      } else {
        alert('form error')
      }
      alert(
        "nome: " + this.state.name
        +
        "celular: " + this.state.phone
        +
        "password: " + this.state.password.password
        +
        "nome: " + this.state.nameSite
      )
    }
  }

};
</script>

<style>
.r-form {
  width: 617px;
  margin-top: 35px;
  height: 100%;
  padding-bottom: 27px;
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
}
</style>