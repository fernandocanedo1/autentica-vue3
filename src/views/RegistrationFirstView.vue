<template>
  <section class="r-first">
    <img
      alt="Locaweb logo"
      src="../assets/locaweb1.png"
      class="registration-logo"
    />
    <section class="r-first-head flex-column center">
      <RegistrationHead
        :title="'Você está muito próximo de mudar a forma de'"
        :titleLinkSpan="'hospedar seu site'"
        :titleLink="'#'"
        :subtitle="'Escolha o seu plano'"
      />
    </section>
    <section class="r-first-containers flex">
      <PlanContainer
        :title="'Hospedagem 1'"
        :price="'Gratis'"
        :paid="'você não paga nada para usar'"
        :rate="'sem taxa de setup'"
        :ideal="'Ideal para quem está começando.'"
        :serverCountry="'Estados Unidos'"
        :listServer="[
          'Servidores em nossos data center americanos;',
          'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
          '1 usuário de FTP para upload ou download;',
          '1 contas de e-mails profissionais;',
          '<span class=text-line>1 subdomínio</span> gratuito;',
        ]"
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
        <template v-slot:teste>
          <div class="most-used-father">
            <div class="most-used">Mais Usado</div>
          </div>
        </template>
      </PlanContainer>

      <PlanContainer
        mostUsed
        :title="'Hospedagem 2'"
        :price="'499'"
        :paid="'cobrado mensalmente'"
        :rate="'sem taxa de setup'"
        :ideal="'Ideal para site com mais mais de 30k de visitas.'"
        :serverCountry="'Brasil'"
        :listServer="[
          'Servidores em nosso de São Paulo;',
          'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
          '10 usuário de FTP para upload ou download;',
          '30 contas de e-mails profissionais;',
          '<span class=text-line>10 bdomínios</span> gratuitos;',
        ]"
        :migration="['Migramos todos seus sites para nossos servidores;']"
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
        <template v-slot:teste>
          <div class="most-used-father">
            <div class="most-used">Mais Usado</div>
          </div>
        </template>
      </PlanContainer>

      <PlanContainer
        :title="'Hospedagem 2'"
        :price="'999'"
        :paid="'cobrado mensalmente'"
        :rate="'sem taxa de setup'"
        :ideal="'Ideal para site com mais mais de 60k de visitas.'"
        :serverCountry="'Brasil'"
        :listServer="[
          'Servidores em nosso de São Paulo;',
          'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;',
          '<span class=text-line>Ilimitados</span> usuário de FTP para upload ou download;',
          '<span class=text-line>Ilimitadas</span> contas de e-mails profissionais;',
          '<span class=text-line>50 bdomínios</span> gratuitos;',
        ]"
        :migration="['Migramos todos seus sites para nossos servidores;']"
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
        <template v-slot:teste>
          <div class="most-used-father">
            <div class="most-used">Mais Usado</div>
          </div>
        </template>
      </PlanContainer>
    </section>
  </section>
</template>

<script>
import RegistrationHead from "@/components/Registration/RegistrationHead.vue";
import PlanContainer from "@/components/Registration/FirstStep/PlanContainer.vue";
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
}
.registration-logo {
  padding-top: 60px;
  padding-bottom: 43px;
  width: 176px;
  height: 67px;
}
.most-used-father {
  position: relative;
}

.most-used{
  position:absolute;
  left: 70px;
  top: -50px;
  padding:8px 20px 7px 20px ;
  text-transform: uppercase;
  background: #10C300;
  color:white;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
</style>