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
    },
    setProjectId(id) {
      this.projectId = id;
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
    clearStore() {
      this.$reset();
      sessionStorage.removeItem('ezSystems.ezProject110.pageInfo');
    },
  },
});
