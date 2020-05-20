import request from "axios";
export function getRepos(params) {
  return request({
    url: "https://api.github.com/repos/chuzhixin/vue-admin-clever",
    method: "get",
    params,
    timeout: 10000,
  });
}

export function getStargazers(params) {
  return request({
    url: "https://api.github.com/repos/chuzhixin/vue-admin-clever/stargazers",
    method: "get",
    params,
    timeout: 10000,
  });
}
