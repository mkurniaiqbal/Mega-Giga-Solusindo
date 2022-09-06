<template>
  <div class="container mt-2">
    <div class="d-flex justify-content-between mb-3">
      <router-link to="/formadd" class="navbar-brand">
        <button class="btn btn-primary btn-sm" type="submit">
          Tambah Buku
        </button>
      </router-link>
      <input placeholder="search..." />
    </div>
    <table class="table border text-center">
      <thead class="table-info">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Judul</th>
          <th scope="col">ISBN</th>
          <th scope="col">Penerbit</th>
          <th scope="col">Deskripsi</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-bind:key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.isbn }}</td>
          <td>{{ item.publisher }}</td>
          <td>{{ item.description }}</td>
          <td>
            <router-link
              :to="{ name: 'formedit', params: { id: item.id } }"
              class="navbar-brand"
            >
              <button type="button" class="btn btn-warning btn-sm me-2">
                Update
              </button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger btn-sm"
              @click="onDelete(item.id, item.title)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  onClick: () => {
    this.$router.push("/");
    localStorage.clear();
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const token = localStorage.getItem("token");
      axios
        .get("http://159.223.57.121:8080/books?limit=20&offset=0", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          this.items = res.data.data;

          console.log(this.items);
        });

      console.log(data);
    },

    async onDelete(id, title) {
      const token = localStorage.getItem("token");
      try {
        const konfirmasi = confirm(
          `Apakah kamu yakin ingin delete judul ${title}?`
        );
        if (konfirmasi) {
          const data = await axios.delete(
            `http://159.223.57.121:8080/books/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          console.log(data);
          alert("data hapus berhasil");
          this.getData();
        }
      } catch (error) {
        alert("data gagal di hapus");
      }
    },
  },
};
</script>
