<script setup>
import { RouterView } from "vue-router";
import { useUserInfoStore } from "../stores/userinfo";
import { logout } from "../plugins/auth";

import Button from "primevue/button";

const userInfo = useUserInfoStore();
</script>

<template>
  <header>
    <h3>Welcome, {{ userInfo.name }}!</h3>
    <Button @click="logout">Logout</Button>
  </header>
  <RouterView />
  <footer>PRIVATE footer</footer>
</template>

<style lang="scss" scoped></style>
