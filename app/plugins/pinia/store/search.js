import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    searchTerm: "",
  }),
  actions: {
    doSearch(searchTerm) {
      this.searchTerm = searchTerm;
      // console.log("test " + searchTerm);
    },
  },
});
