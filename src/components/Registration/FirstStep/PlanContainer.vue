<template>
  <div class="container-plan">
    <slot name="marking" v-if="mostUsed || planoEscolhido"></slot>
    <div class="r-plan">
      <div class="change-plan-button" v-if="changePlan">
        <div class="background-button-top"></div>
        <div class="background-button-bot">
          <a href="/plano">
            <button type="button">Trocar plano</button>
          </a>
        </div>
      </div>
      <section class="r-plan-session-one">
        <div class="r-plan-title">{{ title }}</div>
        <div class="r-plan-prices">
          <div class="r-plan-prices-price">
            <span class="real" v-if="price !== 'Gratis'">R$</span>
            <span class="price">{{ price }}</span>
            <span class="real" v-if="price !== 'Gratis'">/mês</span>
          </div>
          <div class="r-plan-prices-paid">
            <span>{{ paid }}</span>
          </div>
          <div class="r-plan-prices-rate">
            <span>{{ rate }}</span>
          </div>
        </div>
        <hr class="divider" />
        <div class="r-plan-ideal">
          <span>{{ ideal }}</span>
        </div>
        <hr class="divider" />
        <form @submit.prevent="handleSubmit">
          <button class="r-plan-submit" type="submit" v-if="!noButton">
            Escolher esse plano
          </button>
        </form>
      </section>
      <section class="r-plan-session-two">
        <div class="r-plan-list-title">
          <span
            >Seu site em servidores
            <span class="text-line">no {{ serverCountry }}.</span>
          </span>
        </div>
        <div class="r-plan-list-items">
          <ul>
            <li v-for="item in listServer" :key="item">
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div class="r-plan-list-title">
          <span>Suporte 24 horas, 7 dias por semana grátis;</span>
        </div>
        <div class="r-plan-list-title">
          <span>Aplicativos disponíveis;</span>
        </div>
        <div class="r-plan-list-items">
          <ul>
            <li v-for="item in appsList" :key="item">
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div class="r-plan-list-title" v-if="migration">
          <span>Migração Gratuita;</span>
        </div>
        <div class="r-plan-list-items" v-if="migration">
          <ul>
            <li v-for="item in migration" :key="item">
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
        <div class="r-plan-list-title">
          <span>Você ainda tem</span>
        </div>
        <div class="r-plan-list-items">
          <ul>
            <li v-for="item in othersList" :key="item">
              <span v-html="item"></span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planoEscolhido: Boolean,
    changePlan: Boolean,
    mostUsed: Boolean,
    noButton: Boolean,
    title: String,
    price: String,
    paid: String,
    rate: String,
    ideal: String,
    serverCountry: String,
    listServer: Array,
    appsList: Array,
    migration: Array,
    othersList: Array,
  },
  data() {
    return {
      data: [
        {
          title: this.title,
          price: this.price,
          paid: this.paid,
          rate: this.rate,
          ideal: this.ideal,
          serverCountry: this.serverCountry,
          listServer: this.listServer,
          appsList: this.appsList,
          migration: this.migration,
          othersList: this.othersList,
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("submitData", this.data);
      console.log("funcionou");
      this.$router.push("/cadastro");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
@import "PlanContainer.css";
</style>