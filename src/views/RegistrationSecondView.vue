<template>
  <section class="r-first">
    <RegistrationHead
      :title="'Você está muito próximo de mudar a forma de'"
      :titleLinkSpan="'hospedar seu site'"
      :titleLink="'#'"
    />
    <div class="container flex">
      <RegistrationForm />
      <PlanContainer
        planoEscolhido
        noButton
        :title="data.title"
        :price="data.price"
        :paid="data.paid"
        :rate="data.rate"
        :ideal="data.ideal"
        :serverCountry="data.serverCountry"
        :listServer="data.listServer"
        :appsList="data.appsList"
        :migration="data.migration"
        :othersList="data.othersList"
      >
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
    console.log(this.data);
  },
};
</script>

<style scoped>
.r-plan {
  position: relative;
  height: 1033px;
  overflow: hidden;
}
/* .most-used-father {
  position: absolute;
  left: 40px;
  top: 50px;
} */

.plano-escolhido {
  position: absolute;
  left: 40px;
  top: -50px;
  padding: 8px 20px 7px 20px;
  text-transform: uppercase;
  background: #000000;
  color: white;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  z-index: 999; /* valor alto para exibir acima do overflow:hidden */
}
</style>