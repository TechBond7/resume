<template>
    <Header />
    <project-cards />
</template>

<script>
import Header from "@/header/Header.vue";
import ProjectCards from "@/components/ProjectCards.vue";

export default {
    components: {
        Header,
        ProjectCards
    }
};
</script>

<style>
.buttonHover,
.cardHover {
    transition: transform 0.3s ease;
    transform: scale3d(1, 1, 1);
}

.buttonHover:hover,
.cardHover:hover {
    transform: scale3d(1.1, 1.1, 1.1);
}

.p-button.p-button-text {
    color: rgb(0, 155, 0);
}

.p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    background: rgba(128, 128, 128, 0.185);
    padding-bottom: 0.3rem;
    color: green;
}

.p-card .p-card-content {
    padding: 0;
    color: orange;
}
</style>
