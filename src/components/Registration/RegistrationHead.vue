<template>
  <img
    alt="Locaweb logo"
    src="../../assets/locaweb1.png"
    class="registration-logo"
  />
  <div class="r-title">
    <span>
      {{ title }}
      <br />
      <span class="line">{{ titleDecorationUnderline }}</span>
    </span>
  </div>
  <div class="r-subtitle" v-if="subtitle">
    <span>{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: "RegistrationHead",
  props: {
    title: String,
    titleDecorationUnderline: String,
    subtitle: String,
  },
};
</script>
<style>

.r-title {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: #292d32;
  padding-bottom: 22px;
}

.r-title .line {
  color: var(--primary-color);
  text-decoration: underline;
}

.registration-logo {
  padding-top: 60px;
  padding-bottom: 43px;
  width: 176px;
  height: 67px;
}
</style>
