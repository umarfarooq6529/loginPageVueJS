<!--BOOTSTRAP NAVBAR-->

<template>
  <nav class="navbar bg-primary border-body" data-bs-theme="dark">
    <form class="container-fluid justify-content-between navbar_form">
      <div class="navbar_heading">
        <h4 style="margin: 0"><i class="fa-solid fa-house"></i> Home</h4>
      </div>

      <div class="navbar_buttons">
        <router-link to="/">
          <button
            type="button"
            class="btn btn-outline-dark"
            :class="{ active: this.pageIndex === 0 }"
          >
            <i class="fa-solid fa-arrow-right-to-bracket"></i> LOG IN
          </button>
        </router-link>

        <router-link to="/signup">
          <button
            type="button"
            class="btn btn-outline-dark"
            :class="{ active: this.pageIndex === 1 }"
          >
            <i class="fa-solid fa-user-plus"></i> SIGN UP
          </button>
        </router-link>
      </div>
    </form>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["pageIndex"],

  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

button {
  padding-inline: 15px;
  color: #ebebeb;
  border: none;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
}

.navbar_buttons {
  display: flex;
  gap: 1em;
}
</style>
