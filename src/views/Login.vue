<template>
  <div>Login page</div>
  Current user name: {{ userInfo.name }}<br />
  <input
    type="text"
    ref="username"
    name="username"
    placeholder="User name"
    @change="updateUserName"
  />
  <Button @click="login">Login</Button>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserInfoStore } from "../stores/userinfo";

import Button from "primevue/button";

const userInfo = useUserInfoStore();
const router = useRouter();
const username = ref(null);

function login() {
  if (!username.value.value) return;

  userInfo.setName(username.value.value);
  userInfo.setToken("token");
  userInfo.saveStore();
  router.push({ name: "projects" });
}
</script>

<style lang="scss" scoped></style>
