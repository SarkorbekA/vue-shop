<template>
  <TheHeader />
  <TheNavbar />

  <router-view />

  <Footer />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import Footer from './components/TheFooter.vue'
</script>

<script>
export default {
  component: {
    TheHeader,
    TheNavbar,
    Footer,
  }
}
</script>


<style lang="scss">
.container {
  padding: 0px 15px;
  margin: auto;
}

.content {
  color: #232323;
  padding: 30px 12px;

  .page__router {
    margin-top: 24px;

    a:hover {
      transition: .3s;
      color: #FFD600;
    }

    span {
      color: #90989F;
    }

    &>* {
      font-weight: 700;
      font-size: 14px;
      line-height: 13px;
      color: #232323;
    }
  }
}
</style>
