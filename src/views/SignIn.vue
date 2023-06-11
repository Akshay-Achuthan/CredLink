<template>
  <div class="app-signin">
    <!-- component -->
     <div class="h-screen flex">
      <div
        class="flex w-1/2 bg-gradient-to-tr from-red-800 to-orange-300 i justify-around items-center"
      >
        <div v-if="!showReadMore">
          <h1 class="logo-style text-white font-bold text-4xl font-sans">CREDLink</h1>
          <p class="text-white mt-2">
            Connect. Share. Grow.
          </p>
          <button
            type="submit"
            class="block w-28 bg-white text-red-500 mt-4 py-2 rounded-2xl font-bold mb-2"
            @click="handleClickReadMore"
          >
            Read More
          </button>
        </div>
        <div v-if="showReadMore" :class="showReadMore ? 'read-more-container.show' : 'read-more-container'">
          <p class="text-white text-1xl " style="width:85%; margin:auto;">
            CREDLink is a social media platform designed to connect professionals and facilitate knowledge sharing and growth. With CREDLink, you can expand your professional network, share valuable insights and experiences, and collaborate with like-minded individuals in your industry.
          </p>
        </div>
      </div>
      <div class="flex w-1/2 justify-center items-center bg-white">
        <form class="bg-white">
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <button
            @click="handleClickSignIn"
            class="px-4 py-2 cursor-pointer border flex gap-2 border-gray-300 shadow-lg rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo">
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
      alertMessage:'Please login using credence email id',
      showReadMore: false,
    };
  },
  
  methods: {
    handleClickReadMore() {
      this.showReadMore = true;
    },

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

      if(userProfile.email.includes('credenceanalytics')){
        fetch("http://192.168.0.210:2100/user/signup",
          {
          method: "POST",
          headers:{'content-type': 'application/json'},
          body: JSON.stringify({
            "f_name": userProfile.firstName,
            "l_name": userProfile.lastName,
            "email": userProfile.email
          }),
      })
          .then(response => response.json())
          .then(async response => {
            // console.log('response',response);
            if(response.status == "success"){
              sessionStorage.setItem('user_id', response.user_id);
              this.$router.push('/');
              location.reload();
            }
          })
          .catch(error => {
            console.error("There was an error!", error);
          });
      }else{
        this.showAlert =  true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
  
        this.isSignIn = this.$gAuth.isAuthorized;
        // console.log('userProfile',userProfile);
      } catch (error) {
        console.error(error);
        return null;
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

.read-more-container {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease-out, max-height 0.3s ease-out;
}

.read-more-container.show {
  opacity: 1;
  max-height: 1000px;
}

.logo-style{
  letter-spacing: 5px;
}
</style>
