import { createStore } from "vuex";

export default createStore({
  state: {
    reports: [],
    currentReport: {},
  },

  actions: {
    setReports(context, reports) {
      context.commit("SET_REPORTS", reports);
    },
    loadReport(context, location) {
      context.commit("SET_CURRENT_REPORT", location);
    },
  },

  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    },
    SET_CURRENT_REPORT(state, location) {
      for (const item in state.reports) {
        if (state.reports[item].location == location) {
          state.currentReport = state.reports[item];
        }
      }
    },
  },

  modules: {},
});
