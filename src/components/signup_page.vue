<template>
  <div class="signup-container">
    <div class="navbar_container">
      <NavBar :pageIndex="pageIndex"></NavBar>
    </div>
    <div class="signup_content main_content">
      <div class="header_content center_align">
        <i class="fa-solid fa-user-gear fa-2xl"></i>
        <h2>Create an account</h2>
      </div>

      <!--      signup forms-->
      <form class="form_content signup_form" @submit.prevent="setLocalSignup()">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder="First Name"
              v-model="signup.f_name"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>

          <div class="col">
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Last name"
              v-model="signup.l_name"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>

        <!--        username-->
        <div class="username_role">
          <div class="col-7">
            <label class="visually-hidden" for="autoSizingInputGroup"
              >Username</label
            >
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="autoSizingInputGroup"
                placeholder="Username"
                v-model="signup.username"
                value="*not provided*"
              />
            </div>
          </div>
          <div class="col-4">
            <label class="visually-hidden" for="autoSizingSelect"
              >Preference</label
            >
            <select
              class="form-select"
              id="autoSizingSelect"
              v-model="signup.user_role"
              required
            >
              <option disabled value="null">*Dev Role*</option>
              <option value="Front-end">Front-end</option>
              <option value="Back-end">Back-end</option>
              <option value="Full stack">Full stack</option>
            </select>
          </div>
        </div>

        <!--        email address-->
        <div class="form-floating mb-3" style="margin: 0 !important">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="signup.email"
            required
          />
          <label for="floatingInput"
            ><i class="fa-solid fa-envelope"></i> Email address</label
          >
        </div>

        <!--        password-->
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="new_pass"
            placeholder="Password"
            v-model="signup.pass"
            required
          />
          <label for="floatingPassword"
            ><i class="fa-solid fa-lock"></i> Password</label
          >
        </div>

        <!--        password options-->
        <div id="password_options" class="form-text">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              @click="show_pass()"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Show password</label
            >
          </div>
          Don't share your password with anyone
        </div>

        <!--        checkbox-->
        <div class="form-check terms_checkbox">
          <input
            class="form-check-input"
            type="checkbox"
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>

        <!--        account creation message-->
        <p class="text-success" v-if="this.new_acc_msg">
          <i class="fa-solid fa-circle-check"></i> Your account have been
          created successfully!
        </p>
        <!--        button-->
        <div class="submit_button submit_login center_align">
          <button
            type="submit"
            class="btn btn-primary col-4 pt-2 pb-2 mb-2 mt-2"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/bs_navbar.vue";

export default {
  name: "SignupPage",
  components: {
    NavBar,
  },

  data() {
    return {
      pageIndex: 1,
      signup: {
        email: null,
        pass: null,
        f_name: null,
        l_name: null,
        username: null,
        user_role: null,
      },
      new_acc_msg: false,
      users: [],
    };
  },

  methods: {
    show_pass: function () {
      let doc = document.getElementById("new_pass");
      doc.type === "password" ? (doc.type = "text") : (doc.type = "password");
    },

    setLocalSignup: function () {
      if (localStorage.signup_users) {
        let lsUsers = localStorage.signup_users;
        this.users = JSON.parse(lsUsers);
      }

      this.users.push(this.signup); //pushing signup credentials to users[]

      let usersString = JSON.stringify(this.users); //converting users[] to string

      localStorage.setItem("signup_users", usersString); //setting usersString as LocalStorage item

      // changes signup values back to null
      for (let key in this.signup) {
        this.signup[key] = null;
      }

      this.new_acc_msg = true;
    },
  },
};
</script>

<style scoped>
#password_options {
  display: flex;
  justify-content: space-between;
}

.terms_checkbox {
  margin-top: -0.7em;
}

.username_role {
  display: flex;
  justify-content: space-between;
}
</style>
