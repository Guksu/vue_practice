import { createWebHistory, createRouter } from "vue-router";
import ListTest from "./components/ListTest.vue";
import DetailPage from "./components/DetailPage.vue";
const routes = [
  {
    path: "/list",
    component: ListTest,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
    // /detail/id/inner경로로 접속 시 보여주기 위해 샤용한다.
    // children:[
    //     {
    //         path:"/inner",
    //         component:DetailPage
    //     }
    // ]
    // 경로 이동 전 검사
    // beforeEnter: (to, from, next) => {
    //     // ...
    //     if(로그인 === false){
    //         return '/login'
    //     }
    // }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
