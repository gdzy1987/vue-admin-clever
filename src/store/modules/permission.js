import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { filterRoutes } from "@/utils/filterRoutes";
function hasPermission(permissions, route) {
  if (route.meta && route.meta.permissions) {
    return permissions.some((role) => route.meta.permissions.includes(role));
  } else {
    return true;
  }
}
function filterAsyncRoutes(routes, permissions) {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissions);
      }
      res.push(tmp);
    }
  });
  return res;
}
const state = { routes: [], partialRoutes: [] };
const mutations = {
  setRoutes: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
  setPartialRoutes: (state, routes) => {
    state.partialRoutes = constantRoutes.concat(routes);
  },
};
const actions = {
  setRoutes({ commit }, permissions) {
    return new Promise((resolve) => {
      let accessedRoutes;
      if (permissions.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions);
      }
      commit("setRoutes", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
  setAllRoutes({ commit }) {
    return new Promise((resolve) => {
      getRouterList()
        .then((res) => {
          res.data.push({ path: "*", redirect: "/404", hidden: true });
          let accessRoutes = filterRoutes(res.data);
          commit("setAllRoutes", accessRoutes);
          resolve(accessRoutes);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  setPartialRoutes({ commit }, accessRoutes) {
    return new Promise((resolve) => {
      console.log(accessRoutes);
      commit("setPartialRoutes", accessRoutes);
      resolve(accessRoutes);
    });
  },
};
export default { state, mutations, actions };
