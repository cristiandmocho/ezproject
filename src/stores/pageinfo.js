import { defineStore } from 'pinia';

export const usePageInfoStore = defineStore({
  id: 'pageInfo',
  state: () => ({
    page: 'projects',
    projectId: null,
  }),
  actions: {
    setPage(page) {
      this.page = page;
      this.saveStore();
    },
    setProjectId(id) {
      this.projectId = id;
      this.saveStore();
    },
    saveStore() {
      sessionStorage.setItem(
        'ezSystems.ezProject110.pageInfo',
        JSON.stringify(this.$state)
      );
    },
    loadStore() {
      const pageInfo = sessionStorage.getItem(
        'ezSystems.ezProject110.pageInfo'
      );

      if (pageInfo) this.setStore(JSON.parse(pageInfo));
    },
    setStore(pageInfo) {
      Object.assign(this, pageInfo);
    },
    clearStore() {
      this.$reset();
      sessionStorage.removeItem('ezSystems.ezProject110.pageInfo');
    },
  },
});
