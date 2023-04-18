<template>
  <section class="welcome-logo">
    <img alt="Locaweb logo" src="../../assets/locaweb1.png" />
  </section>
  <div class="welcome-account" >
      <button class="account-button" type="button" @click="toggleContainer">
        {{ user.charAt(0) }}
      </button>
  </div>
  <section class="welcome-container" v-show="showContainer">
    <div class="welcome-container-bottom flex">
      <a @click="changeLoggout">Sair</a>
    </div>
  </section>
</template>

<script >
export default {
data() {
    return {
      showContainer: false
    };
  },
  props: {
    user: String,
  },
  methods:{
    toggleContainer() {
      this.showContainer = !this.showContainer;
    },
    changeLoggout(){
      this.$store.dispatch('submitLogin', { email: '', password: ''})
      location.reload();
      console.log("change")
    }
  }
};
</script>

<style>
.welcome-logo {
  position: absolute;
  width: 176px;
  height: 67px;
  left: 27px;
  top: 48px;
}
.welcome-container {
  position: absolute;
  right: 0;
  width: 71px;
  height: 111px;
  margin-top: 20px;
  margin-right: 39px;

  background: #FFFFFF;
  border-radius: 5px;
}
.welcome-container-bottom {
  position: absolute;
  right: 0;
  width: 131px;
  height: 44px;
  margin-top: 67px;
  background: #FFFFFF;
  border-radius: 5px;
  justify-content: right;
  align-items: center;
}
.welcome-container-bottom a {
  padding-right: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}
.welcome-account {
  position: absolute;
  margin-right: 49px;
  padding-top: 27px;
  right: 0;
  z-index: 100;
}

.account-button {
  width: 52px;
  height: 52px;
  border-radius: 100px;
  background: #d9d9d9;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
}
</style>