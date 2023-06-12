<template>
  <header class="text-gray-600 body-font border-b bg-white border-gray-300 shadow-sm">
    <div
      class="container mx-auto flex flex-row justify-between px-10 py-3 items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl font-bold">CredLink</span>
      </a>
      <div class="flex flex-row items-center">
        <button
          class="inline-flex items-center cursor-pointer bg-red-500 border-0 py-2 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0 mr-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div class="pl-2 text-white text-xs" @click="showModal">
            Create new Post
          </div>
        </button>
        <div @click="handleLogout" class="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </div>
        <div class="ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </div>
        <div class="ml-5">
          <Notification />
        </div>
        <div class="ml-5">
          <img
            class="object-cover w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      v-if="isModalVisible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded shadow-lg p-4 w-96">
        <!-- Modal content goes here -->
        <h2 class="text-lg font-bold mb-4">Create a post</h2>
        <div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Post title</label
            >
            <input
              type="text"
              v-model="postTitle"
              id="text"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="My first Post..."
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Post caption</label
            >
            <input
              type="text"
              v-model="postCaption"
              id="caption"
              placeholder="My first caption..."
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <input type="file" ref="image" @change="previewImage" />
          </div>
          <div class="bg-gray-200 p-3 rounded-md mt-3">
            <img
              v-if="selectedImage"
              :src="selectedImage"
              alt="Selected Image"
            />
          </div>
        </div>
        <div class="flex flex-row justify-end items-center">
          <button
            @click="hideModal"
            class="bg-white border border-gray-300 text-xs text-black px-4 py-2 rounded mt-4 mr-5"
          >
            Close
          </button>
          <button
            @click="submitForm"
            class="bg-gray-400 text-xs text-white px-4 py-2 rounded mt-4"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Notification from '@/components/Notifications.vue'

export default {
  name: "Navbar",
  data() {
    return {
      isModalVisible: false,
      selectedImage: "",
      postTitle: "",
      postCaption: "",
    };
  },
  components:{
    'Notification': Notification
  },
  methods: {
    handleLogout() {
      let userLogout = confirm("Are you sure you want to logout?");
      if (userLogout) {
        sessionStorage.clear();
        this.$router.push("/signin");
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.selectedImage = URL.createObjectURL(file);
    },
    submitForm() {
      const formData = new FormData();
      formData.append("user_id", sessionStorage.getItem('user_id'));
      formData.append("post_title", this.postTitle);
      formData.append("post_caption", this.postCaption);
      formData.append("image", this.$refs.image.files[0]);
      console.log("formData", formData);
      fetch("http://192.168.0.165:2100/postcl/createPost", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(async (response) => {
          console.log("Create post success --->", response);
          if (response.status == 'success') {
            alert(response.message);
            this.isModalVisible = false;
            location.reload();
            this.selectedImage = '';
          }
        })
        .catch((error) => {
          console.log("Create post error --->", error);
        });
    },
  },
};
</script>
