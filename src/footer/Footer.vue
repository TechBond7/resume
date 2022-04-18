<template>
  <div class="footer">© {{ date }} Mezdelex. All rights reserved</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      date: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped>
.footer {
  margin-top: 2rem;
  text-align: center;
  color: orange;
  font-size: 0.7rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>