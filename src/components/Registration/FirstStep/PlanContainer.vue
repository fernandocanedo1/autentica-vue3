<template>
  <div class="container-plan">

    <slot name="teste" v-if="mostUsed || planoEscolhido"></slot>
    <div class="r-plan">
      <div class="change-plan-button" v-if="changePlan">
        <div class="background-button-top">

        </div>
        <div class="background-button-bot">
          <button type="button">Trocar plano</button>
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
          <button class="r-plan-submit" type="submit" v-if="!noButton">Escolher esse plano</button>
        </form>
      </section>
      <section class="r-plan-session-two">
        <div class="r-plan-list-title">
          <span>Seu site em servidores
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
      this.$store.dispatch('submitData', this.data);
      console.log("funcionou")
      this.$router.push('/cadastro');
      window.scrollTo(0, 0)
    }
  }
};
</script>

<style>
.r-plan {
  padding: 40px 43px 40px 43px;
  margin-top: 35px;
  width: 268px;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 12.5px;
  margin-left: 12.5px;
  margin-bottom: 66px;
}

.r-plan-session-one {
  text-align: center;
}

.r-plan-title {
  padding-bottom: 21px;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  /* identical to box height */

  color: #666666;
}

.real {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: var(--primary-color);
}

.r-plan-prices-price {
  padding-bottom: 13px;
}

.r-plan-prices-price .price {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  color: var(--primary-color);
}

.r-plan-prices-paid {
  padding-bottom: 10px;
}

.r-plan-prices-rate span,
.r-plan-prices-paid span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  /* identical to box height */
  text-align: center;
  color: #666666;
}

.r-plan-ideal span {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #666666;
}

.r-plan-submit {
  margin: auto;
  margin-bottom: 15px;
}

.r-plan-list-title {
  padding-top: 10px;
  padding-bottom: 10px;
}

.r-plan-list-title span {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  color: #666666;
}

.verificado-icon {
  width: 12px;
}

.r-plan-list-items img {
  padding-right: 11px;
}

.r-plan-list-items {
  display: flex;
}

.r-plan-list-items span {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: #666666;
}
</style>