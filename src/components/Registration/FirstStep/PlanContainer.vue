<template>
  <div class="r-plan">
    <div class="r-plan-session-one">
      <div class="r-plan-title">Hospedagem 1</div>
      <div class="r-plan-prices">
        <div class="r-plan-prices-price">
          <span>Gratis</span>
        </div>
        <div class="r-plan-prices-paid">
          <span>você não paga nada para usar</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.r-plan {
  padding: 40px 43px 40px 43px;
  margin-top: 35px;
  width: 348px;
  height: 1262px;
  left: 202px;
  top: 286px;
  background: #ffffff;
  border-radius: 5px;
}
.r-plan-session-one {
  text-align: center;
}
.r-plan-title {
  padding-bottom: 21px;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 33px;
  /* identical to box height */

  color: #666666;
}
.r-plan-prices-prices {
  padding-bottom: 13px;
}
.r-plan-prices-price span {
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  color: var(--primary-color);
}
</style>