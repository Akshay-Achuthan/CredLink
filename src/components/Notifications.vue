<template>
  <div>
    <div class="relative">
      <button
        @click="handleNotificationToggle"
        class="relative z-10 block rounded-md bg-white p-2 cursor-pointer focus:outline-none"
      >
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
          />
        </svg>
      </button>
      <div
        v-show="isVisible"
        x-show="dropdownOpen"
        class="absolute right-0 mt-5 bg-white rounded-md shadow-lg overflow-hidden z-20"
        style="width: 20rem"
      >
        <div class="py-2">
          <a
            href="#"
            class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <p class="text-gray-600 text-sm mx-2">
              <span class="font-bold" href="#">Sara Salah</span> replied on the
              <span class="font-bold text-blue-500" href="#">Upload Post</span>
              artical . 2m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <p class="text-gray-600 text-sm mx-2">
              <span class="font-bold" href="#">Clerk kent </span> replied on the
              <span class="font-bold text-blue-500" href="#">Upload Post</span>
              artical . 2m
            </p>
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
          >
            <img
              class="h-8 w-8 rounded-full object-cover mx-1"
              src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />
            <p class="text-gray-600 text-sm mx-2">
              <span class="font-bold" href="#">Jane Doe</span> Like Your reply
              on
              <span class="font-bold text-blue-500" href="#"
                >Test with TDD</span
              >
              artical . 1h
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Notification",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleNotificationToggle() {
      console.log("clicked");
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
