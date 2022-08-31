<script setup>
import { RouterLink } from "vue-router";
import { usePageInfoStore } from "../stores/pageinfo";

const pageInfo = usePageInfoStore();
pageInfo.loadStore();

const isActive = (page) => {
  return pageInfo.page === page ? "active" : null;
};
</script>

<template>
  <nav>
    <ul>
      <li :class="isActive('projects')">
        <RouterLink to="/" @click="pageInfo.setPage('projects')">
          <i class="pi pi-building"></i>
          <span>Projetos</span>
        </RouterLink>
      </li>
      <li :class="isActive('tasks')">
        <RouterLink to="/tasks" @click="pageInfo.setPage('tasks')">
          <i class="pi pi-list"></i>
          <span>Tarefas</span>
        </RouterLink>
      </li>
      <li :class="isActive('members')">
        <RouterLink to="/members" @click="pageInfo.setPage('members')">
          <i class="pi pi-users"></i>
          <span>Membros</span>
        </RouterLink>
      </li>
      <li :class="isActive('meetings')">
        <RouterLink to="/meetings" @click="pageInfo.setPage('meetings')">
          <i class="pi pi-calendar"></i>
          <span>Reuni&otilde;es</span>
        </RouterLink>
      </li>
      <li :class="isActive('admin')">
        <RouterLink to="/admin" @click="pageInfo.setPage('admin')">
          <i class="pi pi-desktop"></i>
          <span>Gerenciamento</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: grid;
  font-size: 0.9rem;

  ul {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;

    li {
      display: grid;

      a {
        display: grid;
        grid-template-columns: min-content auto;
        gap: 12px;
        align-items: center;
        padding: 10px 18px;
        cursor: pointer;
        border: none;
        background: none;
        transition: all 0.3s ease-out;
        color: #292929;
        text-decoration: none;

        &:hover,
        &:focus {
          background: hsl(0, 0%, 90%);
        }
      }

      &.active a {
        background: hsl(0, 0%, 85%);
      }
    }
  }
}
</style>
