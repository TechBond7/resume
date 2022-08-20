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
:root {
  --custom-background: #282828;
  --custom-blue: #7daea3;
  --custom-green: green;
  --custom-orange: orange;
}

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
  color: var(--custom-green);
}

.p-card {
  border-radius: 1rem;
}

.p-card .p-card-title {
  font-size: larger;
  font-weight: 600;
  text-align: center;
  background: var(--custom-background);
  padding-bottom: 0.3rem;
  padding-top: 0.2rem;
  color: var(--custom-green);
  border-radius: 1rem;
}

.p-card .p-card-content {
  padding: 0;
  margin-inline: 0.5rem;
  color: var(--custom-orange);
}

.p-card-body {
  margin: 0.5rem;
  padding: 0.5rem;
}

.last-update {
  font-size: xx-small;
  font-weight: 600;
  color: var(--custom-blue);
  margin-left: 1.8rem;
}

.text-small {
  font-size: xx-small;
  margin-inline: 0.1rem;
}
</style>
