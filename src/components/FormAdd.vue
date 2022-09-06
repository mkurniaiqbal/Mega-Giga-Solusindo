<template>
  <div class="container">
    <div class="my-4">
      <h4>Tambah Buku</h4>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="border p-4">
      <b-form-group id="input-group-2" label="Judul:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          placeholder="Masukan Judul Buku"
          required
          class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="ISBN:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.isbn"
          placeholder="Masukan ISBN"
          required
          class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Penerbit:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.publisher"
          placeholder="Masukan Nama Penerbit"
          required
          class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Pembuat:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.author"
          placeholder="Masukan Nama Pembuat"
          required
          class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Deskripsi:" label-for="input-5">
        <b-form-textarea
          id="input-5"
          v-model="form.description"
          placeholder="Enter Deskripsi"
          required
          class="mb-3"
        ></b-form-textarea>
      </b-form-group>

      <div class="text-center">
        <b-button b-col type="submit" variant="primary" class="mx-3"
          >Submit</b-button
        >
        <b-button b-col type="reset" variant="danger" class="mx-3"
          >Reset</b-button
        >
        <router-link to="/dashboard" class="navbar-brand">
          <b-button variant="success" class="mx-3">Kembali</b-button>
        </router-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        author: "",
        description: "",
        isbn: "",
        publisher: "",
        title: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const token = localStorage.getItem("token");

      try {
        const data = await axios.post(
          "http://159.223.57.121:8080/books",
          this.form,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        alert("data berhasil di buat");
        this.onReset(event);
      } catch (error) {
        alert("data gagal di buat");
      }
    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.author = "";
      this.form.description = "";
      this.form.publisher = "";
      this.form.isbn = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
