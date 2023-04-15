<template>
  <section class="r-first">
    <RegistrationHead :title="'Você está muito próximo de mudar a forma de'" :titleLinkSpan="'hospedar seu site'"
      :titleLink="'#'" />
    <div class="container flex">
      <RegistrationForm />
      <PlanContainer changePlan planoEscolhido noButton :title="data.title" :price="data.price" :paid="data.paid"
        :rate="data.rate" :ideal="data.ideal" :serverCountry="data.serverCountry" :listServer="data.listServer"
        :appsList="data.appsList" :migration="data.migration" :othersList="data.othersList">
        <template v-slot:teste>
          <div class="most-used-father">
            <div class="plano-escolhido">Plano escolhido</div>
          </div>
        </template>
      </PlanContainer>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import RegistrationHead from "@/components/Registration/RegistrationHead.vue";
import RegistrationForm from "@/components/Registration/RegistrationForm.vue";
import PlanContainer from "@/components/Registration/FirstStep/PlanContainer.vue";
export default {
  components: { PlanContainer, RegistrationHead, RegistrationForm },
  setup() {
    const store = useStore();

    const data = computed(() => {
      return store.state.data[0];
    });

    return { data };
  },
  mounted() {
    const planContainer = document.querySelector('.r-plan');
    planContainer.style.height = '983px';
  },
};
</script>

<style>
.r-plan {
  height: 983px;
  overflow: hidden;
}

/* .most-used-father {
  position: absolute;
  left: 40px;
  top: 50px;
} */
.plano-escolhido {
  position: absolute;
  left: 100px;
  top: 20px;
  padding: 8px 20px 7px 20px;
  text-transform: uppercase;
  background: #000000;
  color: white;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  z-index: 999;
  /* valor alto para exibir acima do overflow:hidden */
}

.container-plan {
  position: relative;
}

.change-plan-button .background-button-bot {
  position: absolute;
  bottom: 68px;
  height: 100px;
  width: 76%;
  margin-left: -10px;
  background-color: white;
}

.change-plan-button .background-button-top {
  position: absolute;
  bottom: 150px;
  height: 100px;
  width: 76%;
  margin-left: -10px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.change-plan-button button {
  position: absolute;
  bottom: 30px;
  width: 88%;
  height: 75px;
  margin-left: 15px;
  background-color: white;
 border:1px solid black;
 color: black;
}</style>