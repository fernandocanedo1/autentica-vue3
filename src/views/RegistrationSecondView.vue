<template>
    {{data[0].mostUsed}}
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
  const store = useStore();
  
  const data = computed(() => {
    return store.state.data;
  });

  return { data };
}

}
</script>

<style>
</style>