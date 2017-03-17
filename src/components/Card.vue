<template>
  <div class="card">
    <transition appear name="fade">
    <div class="p-t-4">
      <div class="m-t-2">
        <div :if="$t(data.title)">
          <h1>{{ $t(data.title) }}</h1>
          <h2>{{ $t(data.subtitle) }}</h2>
        </div>
        <div :if="$t(data.period)">
          <div class="job layout-row layout-align-center-center">
            <span>{{ $t(data.period) }}</span>
            <div class="body">
              <h1>{{ $t(data.name) }}</h1>
              <h2 class="m-b-1">{{ $t(data.company) }}</h2>
              <p>{{ $t(data.description) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'card',
  props: ['data'],
};
</script>
<style scoped lang="stylus">
  .job
    text-align left
    span
      align-self flex-start
      padding-right 50px
      opacity: 0.5;
      color: #ffffff;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      margin-top 10px
  .body
    max-width 400px
    h1
      color: #ff467b;
      font-family: Poppins;
      font-size: 22px;
      font-weight: 500;
    h2
      opacity: 0.5;
      color: #ffffff;
      font-family: Raleway;
      font-size: 11px;
      font-weight: 400;
      text-transform: uppercase;
    p
      color: #ffffff;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 300;
      line-height: 20px;
</style>
