<template>
  <div class="dashboard">
    <nav class="navbar bg-primary border-body">
      <form class="container-fluid text-light navbar-content">
        <h3 style="margin: 0"><i class="fa-solid fa-gears"></i> Dashboard</h3>
        <a href="/">
          <button class="btn btn-danger" type="button">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
          </button>
        </a>
      </form>
    </nav>

    <!--        dashboard_content-->
    <div class="dashboard_content">
      <!--      card_1-->
      <div class="user_profile">
        <div class="card text-left">
          <div class="card-body">
            <!--            heading-->
            <div class="card_heading d-flex justify-content-between">
              <h5>
                <i class="fa-solid fa-address-card"></i>
                User Profile
              </h5>

              <!--                show password-->
              <div class="form-check form-switch col-5 text-secondary">
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >Show Password
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  @click="show_pass()"
                />
              </div>
            </div>

            <hr class="mt-1" />

            <!--            content body-->
            <!--        name-->
            <form class="row gy-2 gx-0 align-items-center name_username">
              <div class="col-auto">
                <label for="autoSizingInput">Full Name</label>
                <input
                  type="text"
                  class="form-control mt-1 border-0"
                  id="autoSizingInput"
                  :value="user_fname + ' ' + user_lname"
                  disabled
                />
              </div>

              <!--              username-->
              <div class="col-6">
                <label for="autoSizingInputGroup">Username</label>
                <div class="input-group mt-1">
                  <div class="input-group-text border-0">@</div>
                  <input
                    type="text"
                    class="form-control border-0"
                    id="autoSizingInputGroup"
                    :value="user_username"
                    disabled
                  />
                </div>
              </div>

              <!--              email address-->
              <div class="row mt-3">
                <label for="staticEmail" class="col-sm-4 px-1 col-form-label"
                  ><i class="fa-solid fa-envelope"></i> Email</label
                >
                <div class="col-sm-8 d-flex">
                  <input
                    type="email"
                    class="form-control border-0"
                    id="staticEmail"
                    :value="user_email"
                    disabled
                  />
                </div>
              </div>

              <!--              password-->
              <div class="row mt-2">
                <label for="inputPassword3" class="col-sm-4 px-1 col-form-label"
                  ><i class="fa-solid fa-lock"></i> Password</label
                >
                <div class="col-sm-8">
                  <input
                    type="password"
                    class="form-control border-0"
                    id="user_pass"
                    :value="user_pass"
                    disabled
                  />
                </div>
              </div>

              <!--              dev role-->
              <div class="row mt-2">
                <label for="inputPassword3" class="col-sm-4 px-1 col-form-label"
                  ><i class="fa-solid fa-code"></i> Dev Role</label
                >
                <div class="col-sm-8">
                  <input
                    class="form-control border-0"
                    id="inputPassword3"
                    :value="user_dev_role"
                    disabled
                  />
                </div>
              </div>

              <!--              bio-->
              <div>
                <label for="exampleFormControlTextarea1" class="form-label mb-1"
                  >Profile Bio</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardPage",

  data() {
    return {
      user_id: null,
      user_fname: null,
      user_lname: null,
      user_email: null,
      user_pass: null,
      user_username: null,
      user_dev_role: null,
    };
  },

  created: function () {
    this.getUserInfo();
  },

  mounted() {
    this.getUserInfo();
  },

  methods: {
    getUserInfo: function () {
      let credentials = JSON.parse(localStorage.getItem("signup_users"));
      let index = localStorage.getItem("user_id");

      this.user_id = index;
      this.user_fname = credentials[index].f_name;
      this.user_lname = credentials[index].l_name;
      this.user_email = credentials[index].email;
      this.user_username = credentials[index].username;
      this.user_dev_role = credentials[index].user_role;
      this.user_pass = credentials[index].pass;

      // console.log(credentials[index]);
    },

    show_pass: function () {
      let doc = document.getElementById("user_pass");
      doc.type === "password" ? (doc.type = "text") : (doc.type = "password");
    },
  },
};
</script>

<style scoped>
.dashboard_content {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  border: none;
}

button {
  color: #ebebeb;
  border: none;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  padding-inline: 2em;
}

.navbar {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
}

.name_username {
  display: flex;
  justify-content: space-between;
}
</style>
