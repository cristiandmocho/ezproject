<template>
  <div>Meeting</div>
  <h3>Welcome, {{ userInfo.name }}!</h3>
  <Button @click="logout">Logout</Button>
</template>

<script setup>
import { useUserInfoStore } from "../stores/userinfo";

const userInfo = useUserInfoStore();
</script>

<style lang="scss" scoped></style>
