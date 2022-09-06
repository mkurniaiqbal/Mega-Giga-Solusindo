<template>
  <div style="max-width: 30rem" class="m-auto mt-5">
    <b-card
      border-variant="primary"
      header="Login"
      header-border-variant="primary"
    >
      <b-form @submit="onSubmit" v-if="show" class="my-3">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
          class="mb-3"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            placeholder="Enter Username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          class="mb-5"
          id="input-group-2"
          label="Password:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="me-3"
          >Sign In</b-button
        >
        <router-link to="/register" class="navbar-brand">
          <b-button type="submit" variant="success">Sign Up</b-button>
        </router-link>

        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      </b-form>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      try {
        const data = await axios.post(
          "http://159.223.57.121:8080/auth/do-login",
          this.form
        );
        if (data.data.message === "LOGIN SUCCESS") {
          localStorage.setItem("token", data.data.data.token);
          alert("login berhasil");
          this.$router.push("/dashboard");
        }
        console.log("respon login", data.data.message);
        console.log("respon login2", data);
        console.log("respon login2", data.data.data.token);
      } catch (error) {
        console.log("Login gagal", error);
        alert("Username atau Password salah");
      }
    },
  },
};
</script>
<style></style>
