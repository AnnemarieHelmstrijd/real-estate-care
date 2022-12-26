import { createStore } from "vuex";
import axios from "axios";
import DataModel from "./datamodel";

const url =
  "https://my-json-server.typicode.com/AnnemarieHelmstrijd/real-estate-care/db";

export default createStore({
  state: {
    loadingStatus: "Loading...",
    loadingErrors: [],
    loaded: false,
    model: new DataModel(),
  },

  actions: {
    setReports(context, reports) {
      context.commit("SET_REPORTS", reports);
    },

    fetchReports(context) {
      context.commit("SET_LOADING_STATUS", "Loading...");
      axios
        .get(url)
        .then((result) => {
          context.commit("SET_LOADING_STATUS", "Done loading");
          context.commit("SET_LOADED", true);
          context.commit("SET_REPORTS", result.data);
        })
        .catch((error) => {
          context.commit(
            "SET_LOADING_STATUS",
            "An error occured during loading"
          );
          console.log(error);
          context.commit("SET_LOADING_ERRORS", error);
        });
    },
  },

  mutations: {
    SET_REPORTS(state, reports) {
      state.model = new DataModel(reports);
    },

    SET_LOADING_STATUS(state, status) {
      state.loading = status;
    },

    SET_LOADED(state, loaded) {
      state.loaded = loaded;
    },

    SET_LOADING_ERRORS(state, errors) {
      state.loadingErrors = [...state.loadingErrors, errors];
    },

    CREATE_ACTIVE_TASK(state, task){
      state.model.setActiveTask(task)
    }
  },

  modules: {},
});
