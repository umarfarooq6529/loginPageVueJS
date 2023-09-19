<template>
  <div class="login_container">
    <div class="navbar_container">
      <NavBar :pageIndex="pageIndex"></NavBar>
    </div>

    <div class="login_content main_content">
      <div class="header_content center_align">
        <i class="fa-solid fa-user-lock fa-2xl"></i>
        <h2>Have an account?</h2>
      </div>

      <!-- login forms-->
      <form
        class="form_content login_form"
        action="/dashboard"
        @submit="setLocalLogin"
      >
        <!-- email-->
        <div class="form-floating mb-3" style="margin: 0 !important">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="login.email"
            required
          />
          <label for="floatingInput"
            ><i class="fa-solid fa-envelope"></i> Email address
          </label>
        </div>

        <!-- password-->
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="login.pass"
            required
          />
          <label for="floatingPassword"
            ><i class="fa-solid fa-lock"></i> Password</label
          >
        </div>
        <p v-if="login.error_msg" class="text-danger">
          <i class="fa-solid fa-triangle-exclamation"></i> Login credentials are
          not correct!
        </p>

        <!--        checkbox/forgot password-->
        <div class="additional_options">
          <!--          login_error-->

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="login.rememberMe"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember Me?
            </label>
          </div>
          <a href="#">Forgot Password</a>
        </div>

        <!--        submit button-->
        <div class="submit_button submit_login center_align">
          <button
            type="submit"
            class="btn btn-primary col-4 pt-2 pb-2 mb-2 mt-2"
          >
            Continue
          </button>
        </div>

        <!--        login footer-->
        <div class="login_footer">
          <div class="login_links">
            <!--            google link-->
            <a
              href="#"
              id="login_google_link"
              class="login_link link-body-emphasis"
            >
              <div class="login_google other_login">
                <span class="google_login_icon">
                  <img
                    id="icon google_icon"
                    src="@/assets/google.png"
                    alt="googleIcon"
                    style="width: 26px"
                  />
                </span>
                <p class="login_icon_text">Continue with Google</p>
              </div>
            </a>

            <!--            twitter link-->
            <a
              href="#"
              id="login_twitter_link"
              class="login_link link-body-emphasis"
            >
              <div class="login_twitter other_login">
                <span class="twitter_login_icon">
                  <img
                    id="icon twitter_icon"
                    src="@/assets/twitter.png"
                    alt="facebookIcon"
                    style="width: 26px"
                  />
                </span>
                <p class="login_icon_text">Continue with Twitter</p>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "./bs_navbar.vue";

export default {
  name: "LoginPage",
  components: {
    NavBar,
  },

  data() {
    return {
      pageIndex: 0,
      login: {
        email: localStorage.getItem("login_email"),
        pass: localStorage.getItem("login_pass"),
        rememberMe: false,
        error_msg: false,
      },
    };
  },

  methods: {
    setLocalLogin: function (e) {
      let email = this.login.email;
      let pass = this.login.pass;

      this.verification(email, pass, e);

      if (this.login.rememberMe) {
        localStorage.setItem("login_email", email);
        localStorage.setItem("login_pass", pass);
        console.log("Login set");
      } else {
        localStorage.removeItem("login_email");
        localStorage.removeItem("login_pass");
        console.log("Login removed");
      }
    },

    //  comparing login credentials with signup credentials
    verification: function (email, pass, e) {
      let signup = JSON.parse(localStorage.getItem("signup_users"));

      for (let key in signup) {
        console.log(signup[key]);
        if (
          Object.values(signup[key]).includes(email) &&
          Object.values(signup[key]).includes(pass)
        ) {
          console.log("Credentials are FOUND.");
          // console.log(signup[key].f_name);
          localStorage.setItem("user_id", key);
          this.login.error_msg = false;
          return true;
        } else {
          console.log("Credentials are NOT FOUND.");
          this.login.error_msg = true;
        }
      }
      e.preventDefault();
      return false;
    },
  },
};
</script>

<style scoped>
.login_links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}

.other_login {
  border-radius: 10px;
  padding: 0.3em 0.7em 0.3em 0.7em;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.other_login:hover {
  cursor: pointer;
  filter: brightness(1.2);
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}

.login_footer {
  padding-top: 0.5em;
}
</style>
