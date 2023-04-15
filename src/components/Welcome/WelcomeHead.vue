<template>
    <section class="welcome-logo">
        <img alt="Locaweb logo" src="../../assets/locaweb1.png" />
    </section>
    <section class="welcome-account">
        <button class="account-button" type="button">{{ user.charAt(0) }}</button>
    </section>
</template>

<script >
export default {
  props: {
    user: String
}
}
</script>

<style>
.welcome-logo {
    position: absolute;
    width: 176px;
    height: 67px;
    left: 27px;
    top: 48px;
}

.welcome-account {
    position: absolute;
    right: 0;
    padding-top: 27px;
    padding-right: 49px;
}

.account-button {
    width: 52px;
    height: 52px;
    border-radius: 100px;
    background: #D9D9D9;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
}
</style>