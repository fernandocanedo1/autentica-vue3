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
          <input
            required
            class="name-form"
            type="text"
            v-model="state.name"
            placeholder="Informe seu nome completo"
          />
          <span class="r-form-input-span">Celular</span>
          <input
            required
            v-maska
            data-maska="(##) #####-####"
            class="cel-form"
            type="tel"
            v-model="state.phone"
            placeholder="(99) 99999-0000"
          />
          <span v-if="v$.phone.$error">
            <div class="r-form-legend">
              <span>Informe um número de celular válido(Ex: 64 999999999)</span>
            </div>
          </span>
          <span class="r-form-input-span">E-mail</span>
          <input
            required
            class="email-form"
            type="email"
            v-model="state.email"
            placeholder="Informe seu e-mail"
          />

          <span class="r-form-input-span">Senha</span>
          <input
            required
            type="password"
            v-model="state.password.password"
            @blur="v$.password.password.$touch()"
          />

          <div class="r-form-legend">
            <span>No mínimo 8 caracteres</span>
          </div>

          <span class="r-form-input-span">Confirme sua senha</span>
          <input
            required
            type="password"
            v-model="state.password.password_confirmation"
          />
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
      <section class="r-form-site flex-column left">
        <div class="r-form-data-title bot-5px">
          <span>Dados do seu site</span>
        </div>
        <span class="r-form-input-span">Nome do seu site</span>
        <input
          required
          class="nameSite-form"
          type="text"
          v-model="state.nameSite"
          placeholder="Meu site"
        />
        <div class="r-form-legend">
          <span>Exatamente igual o título do seu site</span>
        </div>
      </section>
      <div class="r-form-divider">
        <hr class="divider" />
      </div>
      <section class="r-form-submit">
        <label class="container-checkbox">
          Ao concluir com seu cadastro você concorda com nossos
          <span class="text-line">termos de uso</span> e
          <span class="text-line">politicas de privacidade</span>.
          <input required v-model="state.check" type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <button class="login-submit" type="submit">Criar conta</button>
      </section>
    </form>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { helpers } from "vuelidate/lib/validators";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  props: {
    dataTitle: String,
  },
  setup() {
    const state = reactive({
      name: "",
      email: "",
      phone: "",
      password: {
        password: "",
        password_confirmation: "",
      },
      nameSite: "",
      check: false,
    });

    const rules = computed(() => {
      return {
        phone: {
          regex: helpers.regex("serial", /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/),
        },
        password: {
          password: { required, minLength: minLength(8) },
          password_confirmation: {
            required,
            sameAs: sameAs(state.password.password),
          },
        },

        check: {
          required: helpers.withParams({ type: "checkbox" }, function (value) {
            if (!value) {
              return false;
            }
            return true;
          }),
        },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        axios
          .post("https://fakestoreapi.com/users", {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password.password,
            password_confirmation: this.state.password.password_confirmation,
            nameSite: this.state.nameSite,
            plan: this.dataTitle,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(
          "Plano: " +
            this.dataTitle +
            "Nome" +
            this.state.name +
            "Email" +
            this.state.email +
            "Password" +
            this.state.password.password +
            "Confirmation" +
            this.state.password.password_confirmation +
            "NomeSite" +
            this.state.nameSite
        );
        toast.success("Cadastrado com sucesso!", {
          autoClose: 5000,
        });
        this.$store.dispatch("submitName", this.state.name);
        this.$store.dispatch('submitLogin', { email: this.state.email, password: this.state.password.password})
        this.$router.push("/bem-vindo");
        window.scrollTo(0, 0);
      } else {
        toast.warning("Verifique os campos.", {
          autoClose: 5000,
        });
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style>
@import "Registration.css";
</style>