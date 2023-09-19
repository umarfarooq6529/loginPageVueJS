import LoginPage from "@/components/login_page.vue";
import SignupPage from "@/components/signup_page.vue";
import Dashboard from "@/components/dashboard_page.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

export default routes;
