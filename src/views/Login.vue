<template>
  <div>Login page</div>
  Current user name: {{ userInfo.name }}<br />
  <input
    type="text"
    name="username"
    placeholder="User name"
    @change="updateUserName"
  />
  <Button @click="login">Login</Button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '../stores/userinfo';

import Button from 'primevue/button';

const userInfo = useUserInfoStore();
const router = useRouter();

function updateUserName(e) {
  userInfo.setName(e.target.value);
}

function login() {
  router.push({ name: 'projects' });
}
</script>

<style lang="scss" scoped></style>
