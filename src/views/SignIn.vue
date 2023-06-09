<template>
  <div class="app-signin">
    <!-- component -->
    <div class="h-screen flex">
      <div
        class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
      >
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">CREDLink</h1>
          <p class="text-white mt-1">
            The most popular peer to peer lending at SEA
          </p>
          <button
            type="submit"
            class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <button
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  components: {
  },
  data() {
    return {
      params: {
        client_id:
          "283270223619-o7j0far0a334uu4da96ho3kbqp4anv5u.apps.googleusercontent.com",
      },
    };
  },
  methods: {
  },
};
</script>
