<script setup>
import { useUserInfoStore } from "./stores/userinfo";

import PublicTemplate from "./templates/Public.vue";
import PrivateTemplate from "./templates/Private.vue";

const userInfo = useUserInfoStore();

userInfo.loadStore();
</script>

<template>
  <PrivateTemplate v-if="userInfo.authToken" />
  <PublicTemplate v-if="!userInfo.authToken" />
</template>

<style scoped></style>
