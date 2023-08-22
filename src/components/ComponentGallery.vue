<template>
    <div class="card flex justify-content-center animate__animated animate__faster animate__fadeInUp">
        <Galleria :value="galleryData" :circular="true" containerStyle="max-width: 40rem; margin:auto"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup lang="ts">
import { galleryData } from '@/data/galleryData';
</script>
