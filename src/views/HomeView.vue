<template>
  <div class="app-home">
    <nav-bar />
    <section id="main-content" class="mx-40">
      <div class="grid grid-cols-9 gap-6 px-5 py-4">
        <div class="col-span-2 w-full">
          <div class="main-container">
            <div
              class="w-full rounded-md shadow-md border border-gray-300 py-3 px-5"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="text-sm font-bold">Profile</div>
                <div class="text-xs font-medium text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-full mt-4">
                <div class="h-full flex items-center rounded-lg">
                  <img
                    v-if="userProfileData.profile_img"
                    alt="team"
                    class="w-24 h-24 bg-gray-100 mx-auto object-cover object-center flex-shrink-0 rounded-lg"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  />
                  <div v-else class="p-4 mx-auto bg-gray-200 ring-1 ring-gray-500 ring-offset-2 rounded-full">AB</div>
                </div>
              </div>
              <div class="text-xs font-bold text-center w-full mt-4">
                {{ userProfileData.f_name }} {{ userProfileData.l_name }}
               <button @click="showModal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</button>

              </div>
              <div class="text-xs text-blue-600 font-bold text-center w-full">
                {{ userProfileData.email }}
              </div>
            </div>

            <div
              class="w-full rounded-md shadow-md border border-gray-300 py-3 px-5 mt-5"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="text-sm font-bold">Activity</div>
                <div class="text-xs font-medium text-gray-400">See all</div>
              </div>
              <div class="text-sm font-bold pt-5 pb-4">Stories About You</div>
              <div class="w-full">
                <div class="h-full flex items-center rounded-lg">
                  <img
                    alt="team"
                    class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font text-sm font-bold">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-500 text-xs">UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="pt-4 pb-2 text-sm font-bold">New</div>
              <div
                class="w-full py-2"
                v-for="(item, index) in [1, 2, 3, 4, 5]"
                :key="index"
              >
                <div class="h-full flex items-center rounded-lg">
                  <img
                    alt="team"
                    class="w-8 h-8 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font text-xs font-bold">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-500 text-xs">UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 w-full">
          <div class="main-stories-summary">
            <div class="flex flex-col justify-start text-left">
              <div class="text-md font-bold mb-4">Stories</div>
              <div class="w-full overflow-x-auto">
                <div class="flex flex-row w-full">
                  <div class="overflow-x-auto scrollbar-hide">
                    <div class="flex space-x-4">
                      <template
                        v-for="(item, index) in [
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8, 8,
                        ]"
                      >
                        <div :key="index" class="flex-shrink-0">
                          <img
                            class="w-32 h-40 block mx-auto mb-5 object-cover object-center rounded"
                            alt="hero"
                            :src="`https://picsum.photos/id/${item}/200/300`"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user-posts flex flex-col overflow-y-auto h-96">
            <div
              class="post-card border border-gray-300 shadow-md rounded-md px-4 py-3 mt-3"
              v-for="(item, index) in userTimeline"
              :key="index"
            >
              <div class="w-full py-2">
                <div class="h-full flex items-center rounded-lg">
                  <img
                    alt="team"
                    class="w-8 h-8 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-gray-900 title-font text-xs font-bold">
                      {{ item.userName }}
                    </h2>
                    <p class="text-gray-500 text-xs">UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <img
                  class="w-full h-80 block mx-auto mb-5 object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
              <div class="flex flex-row justify-start items-center space-x-5">
                <div>
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div>
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
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                </div>
                <div>
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
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex items-center mt-4">
                <img
                  class="object-cover w-4 h-4 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt=""
                />
                <img
                  class="object-cover w-4 h-4 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt=""
                />
                <img
                  class="object-cover w-4 h-4 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
                  alt=""
                />
                <img
                  class="object-cover w-4 h-4 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt=""
                />
                <p
                  class="flex items-center justify-center w-4 h-4 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
                >
                  +4
                </p>
                <div class="text-xs">
                  &nbsp; Liked by
                  <b class="cursor-pointer" @click="showModal">Komal Patil</b>
                  and 1,143
                </div>
              </div>
              <div class="text-xs font-medium text-left text-gray-600 mt-4">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 w-full">
          <div
            class="w-full rounded-md shadow-md border border-gray-300 py-3 px-5"
          >
            <div class="flex flex-row justify-between items-center mb-4">
              <div class="text-left font-bold text-sm">Friends</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="w-full py-2"
              v-for="(item, index) in [1, 2, 3, 4, 5]"
              :key="index"
            >
              <div class="h-full flex items-center rounded-lg">
                <img
                  alt="team"
                  class="w-8 h-8 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font text-xs font-bold">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500 text-xs">UI Designer</p>
                </div>
              </div>
            </div>
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
            Save
          </button>
        </div>
      </div>
    </div>
    </section>
    <div
      v-if="isModalVisible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded shadow-lg p-4 w-72">
        <!-- Modal content goes here -->
        <h2 class="text-sm font-bold mb-4">Likes and Dislikes</h2>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between items-center">
            <div class="text-sm font-bold">Komal patil</div>
            <div class="flex flex-row items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-end items-center">
          <button
            @click="hideModal"
            class="bg-white border border-gray-300 text-xs text-black px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "HomeView",
  components: {
    "nav-bar": Navbar,
  },
  data(){
    return{
      isModalVisible: false,
      userProfileURL:'http://192.168.0.210:2100/user/',
      userProfileData:{},
    }
  },

  created(){
    this.fetchUserProfileData();
  },

  methods:{
    fetchUserProfileData(){   
      const uID = sessionStorage.getItem('user_id')     
    fetch(this.userProfileURL + uID,
    {
     method: "GET",
     headers:{'content-type': 'application/json'},
 })
    .then(response => response.json())
    .then(async response => {
      this.userProfileData = response.resData;
      console.log('response',response);

    })
    .catch(error => {
      console.error("There was an error!", error);
    });
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
      formData.append("user_id", sessionstorage.getItem('user_id'));
      formData.append("image", this.$refs.image.files[0]);
      console.log("formData", formData);
      fetch("", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log("Create post success --->", response);
          if (response.status == 'success') {
            alert(response.message);
            this.selectedImage = '';
          }
        })
        .catch((error) => {
          console.log("Create post error --->", error);
        });
    },
  }
};
</script>
<style scoped>
.app-home {
  background: #e9edf2;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
