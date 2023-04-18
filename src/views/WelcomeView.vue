<template>
  <section class="welcome-head">
    <WelcomeHead :user="data.name" />
  </section>
  <section class="welcome-body">
    <WelcomeBody :user="data.name" />
  </section>
</template>

<script>
import WelcomeHead from "@/components/Welcome/WelcomeHead.vue";
import WelcomeBody from "@/components/Welcome/WelcomeBody.vue";

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: { WelcomeHead, WelcomeBody },
  setup() {
        const store = useStore();

        const data = computed(() => {
            return store.state
        });

        return { data };
    },
};
</script>

<style>
.welcome-body {
  padding-top: 151px;
}
</style>