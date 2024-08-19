<template>
    <div>
        <slot name="header" v-if="hasHeader"></slot>
        <div class="container">
            <slot></slot>
        </div>
        <slot name="footer" v-if="hasFooter"></slot>
    </div>
</template>

<script setup lang="ts">
import { PageProps } from "./type"
const { hasHeader, hasFooter } = defineProps<PageProps>()
</script>

<style scoped></style>
