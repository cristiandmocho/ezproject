<script setup>
import { RouterView } from "vue-router";
import { useUserInfoStore } from "../stores/userinfo";
import { logout } from "../plugins/auth";

import Button from "primevue/button";
import MainMenu from "../components/MainMenu.vue";

const userInfo = useUserInfoStore();
</script>

<template>
  <div class="app">
    <section class="top">
      <header>
        <div class="logo">
          <img src="../assets/2doisarquitetos.svg" alt="Logo 2Dois Arquitetos" />
        </div>
        <MainMenu />
        <div class="user-menu">
          <h3>Welcome, {{ userInfo.name }}!</h3>
          <Button
            @click="logout"
            class="p-button-sm p-button-rounded p-button-text"
            icon="pi pi-power-off"
          />
        </div>
      </header>
    </section>
    <main>
      <!-- <div class="sidebar"></div> -->
      <RouterView />
    </main>
    <footer>
      <section class="copyright">2Arquitetos &copy; Todos os direitos reservados</section>
      <a href="https://ezsystems.net"><div class="madeby"></div></a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100%;
  display: grid;
  grid-auto-rows: min-content auto min-content;

  .top {
    display: grid;
    grid-auto-flow: row;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 12px 2px;
    border-bottom: solid 4px #ffb700;
    gap: 4px;

    header {
      display: grid;
      grid-auto-flow: column;
      background-color: hsl(0, 0%, 95%);
      justify-content: space-between;
      justify-items: center;

      .logo {
        padding: 10px;

        img {
          width: 150px;
        }
      }

      .user-menu {
        padding: 0 8px;
        color: #292929;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        gap: 4px;
      }
    }
  }

  main {
    padding: 10px;
  }
}
</style>
