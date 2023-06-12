<template>
  <div class="app-home">
    <nav-bar />
    <section id="main-content" class="mx-38">
      <div class="grid grid-cols-9 gap-6 px-5 py-4">
        <div class="col-span-2 w-full">
          <div class="main-container">
            <div
              class="w-full rounded-md shadow-md bg-white border border-gray-300 py-3 px-5"
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
                    v-if="imageStore"
                    alt="team"
                    class="w-24 h-24 bg-gray-100 mx-auto object-cover object-center flex-shrink-0 rounded-lg"
                    :src="imageStore"
                  />
                  <div
                    v-else
                    class="p-4 mx-auto bg-gray-200 ring-1 ring-gray-500 ring-offset-2 rounded-full"
                  >
                    {{ initials }}
                  </div>
                </div>
              </div>
              <div
                class="text-xs font-bold text-center w-full mt-4 flex items-center justify-center"
              >
                <span class="mr-1"
                  >{{ userProfileData.f_name }}
                  {{ userProfileData.l_name }}</span
                >
                <button @click="showModal" class="p-1">
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
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
              </div>
              <div class="text-xs text-blue-600 font-bold text-center w-full">
                {{ userProfileData.email }}
              </div>
            </div>

            <div
              class="w-full rounded-md shadow-md bg-white border border-gray-300 py-3 px-5 mt-5"
            >
              <div class="flex flex-row justify-between items-center">
                <div class="text-sm font-bold">Activity</div>
                <div class="text-xs font-medium text-gray-400">See all</div>
              </div>
              <!-- <div class="text-sm font-bold pt-5 pb-4">Stories About You</div> -->
              <!-- <div class="w-full">
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
              </div> -->
              <div class="pt-4 pb-2 text-sm font-bold">New</div>
              <div
                class="w-full py-2"
                v-for="(item, index) in filteredUSerActivityData"
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
                      <!-- {{ item.user_name }} -->
                    </h2>
                    <p class="text-gray-500 text-xs">
                      <!-- {{ item.upload_time }} -->
                    </p>
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
              <div class="user-stories">
                <div>
                  <div class="w-full overflow-x-auto">
                    <div class="flex flex-row w-full">
                      <div class="overflow-x-auto scrollbar-hide">
                        <div class="flex space-x-4 m-4 mt-3">
                          <div
                            class="flex flex-col items-center space-y-1 relative"
                          >
                            <div class="flex-shrink-0">
                              <img
                                alt="team"
                                class="w-12 h-12 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                              />
                            </div>
                            <button
                              class="absolute bottom-6 -right-1 bg-purple-800 rounded-full h-5 w-5 text-2xl text-white font-semibold border-2 border-white flex justify-center items-center font-mono hover:bg-blue-700"
                            >
                              +
                            </button>
                            <a href="#"> You </a>
                          </div>
                          <template v-for="(item, index) in friendsData">
                            <div :key="index" class="flex-shrink-0">
                              <img
                                alt="team"
                                class="w-12 h-12 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                :src="item.img"
                              />
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full overflow-x-auto">
                <div class="flex flex-row w-full">
                  <div class="overflow-x-auto scrollbar-hide">
                    <div class="flex space-x-4">
                      <template v-for="(item, index) in userTimeLine">
                        <div :key="index" class="flex-shrink-0">
                          <img
                            class="w-32 h-40 block mx-auto mb-5 object-cover object-center rounded"
                            alt="hero"
                            :src="item.user_post"
                          />
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="upload-posts">
            <div
              class="w-full rounded-md bg-white px-5 py-5 border border-gray-300"
            >
              <div class="flex flex-row items-center space-x-3">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <input
                  class="p-2 rounded-full w-full text-sm outline-none border border-gray-300"
                  type="text"
                  name=""
                  id=""
                  placeholder="What's on your mind"
                />
              </div>
              <div class="flex flex-row justify-between items-center mt-4">
                <div class="flex flex-row items-center space-x-4">
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
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
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
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
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
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
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
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <button
                    class="py-1 px-4 rounded-md text-xs font-medium bg-indigo-600 text-white"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="user-posts flex flex-col overflow-y-auto h-96">
            <div
              class="post-card border bg-white border-gray-300 shadow-md rounded-md px-4 py-3 mt-3"
              v-for="(item, index) in userTimeLine"
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
                      {{ item.user_name }}
                    </h2>
                    <p class="text-gray-500 text-xs">{{ item.post_title }}</p>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <img
                  class="w-full h-80 block mx-auto mb-5 object-cover object-center rounded"
                  alt="hero"
                  :src="item.user_post"
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
                    :class="`w-5 h-5 ${item.isLiked ? 'text-blue-500' : ''}`"
                  >
                    <!-- @click="userLikeFunc" -->
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
                    :class="`w-5 h-5 ${!item.isLiked ? 'text-red-500' : ''}`"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                </div>
                <div @click="handleComments(item)" class="cursor-pointer">
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
              <div class="flex items-center mt-4" v-if="item.child.length">
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
                <div class="text-xs" v-if="item.child.length">
                  &nbsp; Liked by
                  <b
                    class="cursor-pointer"
                    @click="handleSinglePostLike(item.child)"
                    >{{ item.child.length ? item.child[0].user_name : "" }}</b
                  >
                  and {{ item.child.length }} others
                </div>
              </div>
              <div class="text-xs font-medium text-left text-gray-600 mt-4">
                {{ item.post_title }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 w-full">
          <div
            class="w-full rounded-md shadow-md bg-white border border-gray-300 py-3 px-5"
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
              v-for="(item, index) in friendsData"
              :key="index"
            >
              <div class="h-full flex items-center rounded-lg">
                <img
                  alt="team"
                  class="w-8 h-8 ring-1 ring-blue-500 ring-offset-2 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  :src="item.img"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font text-xs font-bold">
                    {{ item.name }}
                  </h2>
                  <p class="text-gray-500 text-xs">{{ item.code }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="trending-stories mt-4">
            <div
              class="w-full rounded-md shadow-md bg-white border border-gray-300 py-3 px-5"
            >
              <div class="w-full text-left font-bold text-sm mb-4">
                Upcoming events
              </div>

              <div class="flex flex-col">
                <div
                  class="w-full"
                  v-for="(item, index) in upComingEvents"
                  :key="index"
                >
                  <div class="h-full flex items-center p-2 rounded-lg">
                    <div class="flex-grow">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        {{ item.title }}
                      </h2>
                      <p class="text-gray-500 text-xs">{{ item.date }}</p>
                    </div>
                    <img
                      alt="team"
                      class="w-16 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-md ml-4"
                      :src="item.img"
                    />
                  </div>
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
      v-if="isModalVisibleLikes"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded shadow-lg p-4 w-72">
        <!-- Modal content goes here -->
        <h2 class="text-sm font-bold mb-4">Likes and Dislikes</h2>
        <div class="flex flex-col">
          <div
            class="flex flex-row justify-between items-center py-2"
            v-for="(item, index) in singlePostLikes"
            :key="index"
          >
            <div class="text-sm font-bold">{{ item.user_name }}</div>
            <div class="flex flex-row items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="`${
                    item.user_reaction == 1 ? 'w-4 text-blue-500' : 'w-4'
                  } `"
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
                  :class="`${
                    item.user_reaction == 0 ? 'w-4 text-red-500' : 'w-4'
                  } `"
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
    <div
      v-if="isModalVisibleComments"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded shadow-lg p-4 w-96 relative">
        <!-- Modal content goes here -->
        <h2 class="text-sm font-bold mb-4">Comments</h2>
        <div class="flex flex-col">
          <div class="h-96">
            <div
              class="flex flex-col justify-start text-left for loop"
              v-for="(item, ind) in commentsData"
              :key="ind"
            >
              <div class="text-xs font-bold capitalize">{{ item.user_name }}</div>
              <p class="text-xs font-medium">
                {{item.comment}}
              </p>
            </div>
          </div>
          <div class="w-full flex flex-row items-center">
            <input
              class="pl-2 outline-none rounded-md border-2 border-gray-400 w-full"
              type="text"
              name=""
              v-model="userComment"
              id=""
              placeholder="Comments..."
            />
            <button
              @click="handleAddComment()"
              class="bg-indigo-600 px-3 py-2 ml-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-row justify-end items-center">
          <button
            @click="hideModalComments"
            class="bg-white border border-gray-300 text-xs text-black px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    "nav-bar": Navbar,
    "app-footer": Footer,
  },
  data() {
    return {
      isModalVisible: false,
      userProfileURL: "http://192.168.0.165:2100/user/",
      userProfileData: {},
      userTimeLine: [],
      imageStore: "",
      singlePostLikes: [],
      userActivityData: [],
      userLikedFuncData: [],
      filteredUSerActivityData: [],
      isModalVisibleLikes: false,
      isModalVisibleComments: false,
      initials: "",
      userComment: "",
      currentPostData: "",
      upComingEvents: [
        {
          title: "Suraj Chavan",
          date: "28-09-2023",
          img: "https://img.freepik.com/free-psd/banner-template-concert_23-2148403186.jpg?w=900&t=st=1686548330~exp=1686548930~hmac=5984a0d05bff62b43ee523837cc09e514eb65115cbeb143d62962785027b6541",
        },
        {
          title: "Sarvesh Singh",
          date: "28-09-2023",
          img: "https://img.freepik.com/free-psd/music-festival-banner-template_23-2148911142.jpg?w=900&t=st=1686548401~exp=1686549001~hmac=3e60c4ece75b850bb41db661d4834025a315131de8ff544128fe4269c27e2f75",
        },
        {
          title: "Aryan Pal",
          date: "28-09-2023",
          img: "https://img.freepik.com/free-psd/best-music-playlist-banner-template_23-2148644231.jpg?w=900&t=st=1686550971~exp=1686551571~hmac=6393c6c9e7e2062961a0773977ba6b4a8f658e1ed5449ea02c8ed78f3dcfa9fe",
        },
        {
          title: "Shubham Devadiga",
          date: "28-09-2023",
          img: "https://img.freepik.com/free-vector/flat-design-trekking-twitch-banner_23-2149244215.jpg?w=996&t=st=1686551011~exp=1686551611~hmac=d49f4d7988dcfbdcb761c8abb0736fddb7f4574f27bd77345fa02a7a86900301",
        },
      ],
      friendsData: [
        {
          name: "Akshay Kharande",
          code: "SJ58969",
          img: "https://media.istockphoto.com/id/1469792464/photo/portrait-of-young-man-with-glasses.jpg?s=1024x1024&w=is&k=20&c=BOz1GOmkPlQtlt1cdi6Tw0h8yHIYlCMqjEIUBMqvahE=",
        },
        {
          name: "Shubham Devadiga",
          code: "SJ58969",
          img: "https://media.istockphoto.com/id/1184709924/photo/young-happy-guy-wearing-glasses-looking-at-camera-portrait.jpg?s=1024x1024&w=is&k=20&c=7e70CE5iUEwd0D7aA1QMFDdUgASJD25Pzy7bzYf9AFM=",
        },
        {
          name: "Aryan Pal",
          code: "SJ58969",
          img: "https://media.istockphoto.com/id/1286942386/photo/portrait-of-sick-young-man-with-runny-nose-suffering-from-cold-or-flu-and-sneezing-while.jpg?s=1024x1024&w=is&k=20&c=FoKWjUMdCoa0P_SlUXl-E6-PTAMllTOHCsGIZgCpmfA=",
        },
        {
          name: "Suraj Chavan",
          code: "SJ58969",
          img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Harish Tiwari",
          code: "SJ58969",
          img: "https://media.istockphoto.com/id/1184709924/photo/young-happy-guy-wearing-glasses-looking-at-camera-portrait.jpg?s=1024x1024&w=is&k=20&c=7e70CE5iUEwd0D7aA1QMFDdUgASJD25Pzy7bzYf9AFM=",
        },
      ],
      commentsData:[]
    };
  },

  created() {
    // this.fetchUserProfileData();
    this.fetchUserTimeline();
    this.fetchUserActivity();
  },

  methods: {
    handleAddComment() {
      let data = {
        userId: this.currentPostData.user_id + "",
        postId: this.currentPostData.post_id + "",
        comment: this.userComment,
      };
      console.log("this.currentPostData", this.currentPostData);
      fetch("http://192.168.0.165:2100/comments/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(async (response) => {
          console.log("comment added", response);
          if (response.status == "success") {
            this.userComment = '';
            this.commentsData = response.data
          }
        })
        .catch((error) => {
          console.log("Create post error --->", error);
        });
    },
    // userLikeFunc(){
    //     this.userTimeLine.map((el) => {
    //         if(el.isLiked === true){

    //         }
    //     })
    // },

    handleComments(item) {
      this.isModalVisibleComments = true;
      this.currentPostData = item;
      fetch(`http://192.168.0.165:2100/comments/${item.post_id}`, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then(async (response) => {
          if (response.status == "success") {
            this.commentsData = response.data;
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    checkValueExists(array, value) {
      return array.some((obj) => Object.values(obj).includes(value));
    },
    handleSinglePostLike(singleLikes) {
      this.isModalVisibleLikes = true;
      this.singlePostLikes = singleLikes;
    },

    fetchUserActivity() {
      console.log("user activity data", this.userActivityData);
      this.filteredUSerActivityData = this.userActivityData.filter((el) => {
        console.log("el", el);
        el.user_id === sessionStorage.getItem("user_id");
      });

      console.log("data", this.filteredUSerActivityData);
    },

    fetchUserTimeline() {
      fetch("http://192.168.0.165:2100/postcl/getPostList", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then(async (response) => {
          if (response.status == "success") {
            this.userTimeLine = response.data;
            response.data.map((el, indx) => {
              this.userActivityData.push(el);
              if (this.checkValueExists(el.child, el.user_name)) {
                this.userTimeLine[indx]["isLiked"] = true;
              } else {
                this.userTimeLine[indx]["isLiked"] = false;
              }
            });
            console.log("response", this.userTimeLine);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
    fetchUserProfileData() {
      const uID = sessionStorage.getItem("user_id");
      fetch(this.userProfileURL + uID, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then(async (response) => {
          this.userProfileData = response.resData;
          this.initials =
            this.userProfileData.f_name.charAt(0) +
            this.userProfileData.l_name.charAt(0);
          console.log("response", response);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },

    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    hideModalComments() {
      this.isModalVisibleComments = false;
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.selectedImage = URL.createObjectURL(file);
    },
    submitForm() {
      const formData = new FormData();
      formData.append("user_id", sessionStorage.getItem("user_id"));
      formData.append("image", this.$refs.image.files[0]);
      fetch("http://192.168.0.165:2100/profile", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(async (response) => {
          console.log("Create post success +++++++++", response);
          if (response.status == "success") {
            alert("Profile Successfully updated");
            this.imageStore = response.profile_img;
            this.selectedImage = "";
            this.isModalVisible = false;
            // location.reload();
          }
        })
        .catch((error) => {
          console.log("Create post error --->", error);
        });
    },
  },
};
</script>
<style scoped>
.app-home {
  background: #f5f5f5;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
