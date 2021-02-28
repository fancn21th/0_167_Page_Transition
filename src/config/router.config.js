import Home from "pages/home";
import Foo from "pages/foo";
import Bar from "pages/bar";

const routerConfig = [
  {
    path: "/foo",
    component: Foo,
  },
  {
    path: "/bar",
    component: Bar,
  },
  // 该项目需要放在最后
  {
    path: "/",
    component: Home,
  },
];

export default routerConfig;
