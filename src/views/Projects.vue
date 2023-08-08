<template>
    <Header />
    <component-cards />
    <Footer />
</template>

<script setup lang="ts">
import Header from "@/header/Header.vue";
import ComponentCards from "@/components/ComponentCards.vue";
import Footer from "@/footer/Footer.vue";
</script>

<style>
:root {
    --custom-background: #282828;
    --custom-blue: #7daea3;
    --custom-green: green;
    --custom-orange: orange;
}

.linkHover,
.cardHover {
    font-family: sans-serif;
    transition: transform 0.2s ease;
    transform: scale3d(1, 1, 1);
    color: var(--custom-green);
}

.linkHover {
    padding: 0.7rem;
    border-radius: 0.5rem;
}

.linkHover:hover,
.cardHover:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    background-color: var(--custom-orange);
    color: var(--custom-background);
}

.p-card {
    border-radius: 1rem;
    height: 37rem;
    width: 24rem;
}

.p-card .p-card-body {
    padding-inline: 0;
}

.p-card .p-card-title {
    font-size: larger;
    font-weight: 600;
    text-align: center;
    background: var(--custom-background);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    color: var(--custom-green);
}

.p-card .p-card-content {
    padding: 0;
    margin-inline: 2rem;
    color: var(--custom-orange);
}

.last-update {
    font-size: xx-small;
    font-weight: 600;
    color: var(--custom-blue);
    margin-left: 1.8rem;
}

.img-field {
    height: 13rem;
    margin-top: 0.4rem;
    width: 24rem;
}

.description-field {
    height: 13rem;
}

.text-small {
    font-size: xx-small;
    margin-inline: 0.1rem;
}
</style>
