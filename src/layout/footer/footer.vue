<template>
    <div>{{ text }}</div>
</template>

<script setup lang="ts">
import { FooterProps } from "./type"
const { text, onClick, fixed } = defineProps<FooterProps>()
</script>

<style scoped></style>
