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
          <!-- <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
              type="email"
              name=""
              id=""
              v-model="emailEntered"
              placeholder="Email Address"
            />
          </div> -->
          <!-- <button
            type="submit"
            @click="validateMail"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-4"
          >
            Login
          </button> -->
          <button
            @click="handleClickSignIn"
            class="px-4 py-2 cursor-pointer border flex gap-2 border-gray-300 shadow-lg rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img class="w-16 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
            <span>Login with Google</span>
        </button>
        <div id="alertModal" class="alert-modal" v-if="showAlert">{{ alertMessage }}</div>
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
      isSignIn: false,
      showAlert:false,
      alertMessage:'please enter a valid email id',
      emailEntered:'',
    };
  },
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        let userProfile={
          'firstName': googleUser.getBasicProfile().XZ,
          'lastName': googleUser.getBasicProfile().nY,
          'email': googleUser.getBasicProfile().gw
        }
        
        this.isSignIn = this.$gAuth.isAuthorized;
        console.log('userProfile',userProfile);
      } catch (error) {
        console.error(error);
        return null;
      }
    },

    validateMail(){
      if(this.emailEntered.includes('credenceanalytics')){
        console.log("success"); // change is needed
      }else{
        this.showAlert =  true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.alert-modal {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #F62817;
  color: #fff;
  padding: 10px 15px;
  border-radius: 10px; 
  z-index: 9999;
  animation: alert-modal-animation 0.3s ease-out;
}

@keyframes alert-modal-animation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
