import Home from "pages/home";
import Foo from "pages/foo";
import Bar from "pages/bar";

const routerConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/foo",
    component: Foo,
  },
  {
    path: "/bar",
    component: Bar,
  },
];

export default routerConfig;
