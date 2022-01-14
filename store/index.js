import { createStore } from "vuex";
import { http } from "@/utils/http";
import { scrollDown, scrollUp } from "@/utils/index";

const store = createStore({
  // vuex相关内容
  state() {
    return {
      scrollTop: 0,
      articleList: [],
      articleDetail: null,
      articleLoading: true,
    };
  },
  mutations: {
    SET_SCROLL_TOP(state, val) {
      state.scrollTop = val;
    },
    SET_ARTICLE_LIST(state, value) {
      state.articleList = value || [];
    },
    SET_ARTICLE_DETAIL(state, value) {
      state.articleDetail = value || null;
    },
    SET_ARTICLE_LOADING(state, value) {
      state.articleLoading = value;
    },
  },
  actions: {
    ScrollDown({ commit }, height, time = 100) {
      scrollDown(height, time);
    },
    ScrollUp({ commit }, height, time = 100) {
      scrollUp(height, time);
    },
    GetArticleList({ commit, state }) {
      commit("SET_ARTICLE_LOADING", true);
      if (state.articleList && state.articleList.length) {
        commit("SET_ARTICLE_LIST", state.articleList);
        commit("SET_ARTICLE_LOADING", false);
        return;
      }
      return http
        .get(`/article/list?owner=cc`)
        .then((data) => {
          //打印返回的json数据
          commit("SET_ARTICLE_LIST", data?.data || []);
          commit("SET_ARTICLE_LOADING", false);
        })
        .catch(() => {
          commit("SET_ARTICLE_LIST", []);
          commit("SET_ARTICLE_LOADING", false);
        });
    },
    GetArticleDetailById({ commit, state }, { id }) {
      commit("SET_ARTICLE_LOADING", true);
      if (state.articleList && state.articleList.length) {
        const finder = state.articleList.find((item) => item.article_id === id);
        commit("SET_ARTICLE_DETAIL", finder);
        commit("SET_ARTICLE_LOADING", false);
        return;
      }
      return http
        .get(`/article/detail/${id}`)
        .then((data) => {
          //打印返回的json数据
          commit("SET_ARTICLE_DETAIL", data?.data || null);
          commit("SET_ARTICLE_LOADING", false);
        })
        .catch(() => {
          commit("SET_ARTICLE_DETAIL", null);
          commit("SET_ARTICLE_LOADING", false);
        });
    },
  },
});

export default store;
