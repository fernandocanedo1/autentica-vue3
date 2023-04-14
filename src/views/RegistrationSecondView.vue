<template>
  <section class="r-first">
    <RegistrationHead
      :title="'Você está muito próximo de mudar a forma de'"
      :titleLinkSpan="'hospedar seu site'"
      :titleLink="'#'"
    />
    {{ data.title }}
    <PlanContainer
      :title="data.title"
      :price="data.price"
      :paid="data.paid"
      :rate="data.rate"
      :ideal="data.ideal"
      :serverCountry="data.serverCountry"
      :listServer="data.listServer"
      :appsList="['Wordpress;', 'Drupal;', 'entre outros...']"
      :othersList="[
        'Webmail RoundCube;',
        'AntiSpam;',
        'Painel de gerenciamento de DNS;',
        'Painel de controle web;',
        'Configurações de PHP personalizáveis;',
        'Certificado SSL Grátis;',
        'Transferência ilimitada.',
      ]"
    >
    </PlanContainer>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import RegistrationHead from "@/components/Registration/RegistrationHead.vue";
import PlanContainer from "@/components/Registration/FirstStep/PlanContainer.vue";
export default {
  components: { PlanContainer, RegistrationHead },
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

<style>
</style>