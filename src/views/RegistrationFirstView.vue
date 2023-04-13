<template>
  <section class="r-first">
    <img
      alt="Locaweb logo"
      src="../assets/locaweb1.png"
      class="registration-logo"
    />
    <RegistrationHead />
    <PlanContainer />
  </section>
</template>

<script>
import RegistrationHead from "@/components/Registration/RegistrationHead.vue";
import PlanContainer from '@/components/Registration/FirstStep/PlanContainer.vue';
export default {
  components: { RegistrationHead, PlanContainer },
};
</script>

<style>
.r-first {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.registration-logo {
  padding-bottom: 43px;
  width: 176px;
  height: 67px;
}
</style>