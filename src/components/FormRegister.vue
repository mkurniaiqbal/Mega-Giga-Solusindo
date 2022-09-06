<template>
  <div style="max-width: 30rem" class="m-auto mt-5">
    <b-card
      border-variant="primary"
      header="Register"
      header-border-variant="primary"
    >
      <!-- <b-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text
      > -->

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          class="mb-3"
          id="input-group-4"
          label="Password:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            type="password"
            v-model="form.password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Profile Name:"
          label-for="input-2"
          class="mb-3"
        >
          <b-form-input
            id="input-2"
            v-model="form.profileName"
            placeholder="Enter Profile Name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Address:"
          label-for="input-3"
          class="mb-3"
        >
          <b-form-textarea
            label="Address"
            id="textarea-small"
            v-model="form.address"
            placeholder="Small textarea"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="success" class="me-3"
          >Sign Up</b-button
        >
        <router-link to="/" class="navbar-brand">
          <b-button type="submit" variant="primary">Sign In</b-button>
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
        profileName: "",
        address: "",
      },
      show: true,
    };
  },
  methods: {
    // onSubmit(event) {
    //   event.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },

    async onSubmit(event) {
      event.preventDefault();
      try {
        const data = await axios.post(
          "http://159.223.57.121:8080/auth/do-register",
          this.form
        );
        alert("data berhasil di buat");
        console.log("ini register", data);
        this.onReset(event);
      } catch (error) {
        console.log("ini register gagal", error);
        alert("data gagal di buat");
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.form.profileName = "";
      this.form.address = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style></style>
