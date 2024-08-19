<template>
    <router-view v-slot="{ Component }">
        <transition :name="transitionName">
            <div class="main-container">
                <component :is="Component"></component>
            </div>
        </transition>
    </router-view>
</template>
<script setup lang="ts">
import { useStore } from "@/store/index.ts"
const transitionName = useStore().transitionName
console.log(transitionName)
</script>
<style scoped></style>
