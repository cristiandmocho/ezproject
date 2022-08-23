<template>
  <div>Projects list</div>
  <h3>Welcome, {{ userInfo.name }}!</h3>
  <Button @click="logout">Logout</Button>
</template>

<script setup>
import { useUserInfoStore } from '../stores/userinfo';
import { logout } from '../plugins/auth';

import Button from 'primevue/button';

const userInfo = useUserInfoStore();
</script>

<style lang="scss" scoped></style>
