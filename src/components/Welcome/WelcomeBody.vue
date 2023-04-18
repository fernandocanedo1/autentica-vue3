<template>
    <div class="welcome-title">
        <span>Olá {{ user }},</span>
    </div>
    <div class="welcome-text">
        <span>Seja bem vindo a sua conta de hospedagem.</span>
    </div>
    <div class="welcome-image">
        <img src="../../assets/welcome.png">
    </div>
    <div class="welcome-question">
        <span>Caso tenha alguma dúvida, <span class="text-line">visite nossa central de ajuda</span>.</span>
    </div>
</template>

<script >
export default {
    props: {
        user: String
    },
}
</script>

<style>
.welcome-title {
    text-transform: capitalize;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    padding-bottom: 15px;
}

.welcome-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 32px;
}

.welcome-image {
    padding-bottom: 38px;
}

.welcome-question {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 49px;
}</style>