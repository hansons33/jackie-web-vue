<template>
    <div>{{ title }}</div>
</template>

<script setup lang="ts">
import { HeaderProps } from "./type"
const { title, bgColor, textColor, leftIcon, rightIcon } =
    defineProps<HeaderProps>()
</script>

<style lang="less" scoped></style>
