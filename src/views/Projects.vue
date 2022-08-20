<template>
  <Header />
  <component-cards />
  <Footer />
</template>

<script lang="ts">
import Header from "@/header/Header.vue";
import ComponentCards from "@/components/ComponentCards.vue";
import Footer from "@/footer/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    ComponentCards,
    Footer,
  },
});
</script>

<style>
.buttonHover,
.cardHover {
  transition: transform 0.2s ease;
  transform: scale3d(1, 1, 1);
}

.buttonHover:hover,
.cardHover:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}

.p-button.p-button-text {
  color: rgb(0, 155, 0);
}

.p-card {
  border-radius: 1rem;
}

.p-card .p-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  background: rgba(128, 128, 128, 0.185);
  padding-bottom: 0.3rem;
  color: green;
  border-radius: 0.5rem;
}

.p-card .p-card-content {
  padding: 0;
  margin-inline: 0.5rem;
  color: orange;
}
</style>
