import { createStore } from "vuex";

export default createStore({
  state: {
    reports: [],
  },

  actions: {
    setReports(context, reports) {
      context.commit("SET_REPORTS", reports);
    },
  },

  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    },
  },

  modules: {},
});
