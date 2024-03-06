<script setup>
  import {ref} from 'vue'

  const state = ref(false)
  const menuItems = ref([
    { title: 'Bootcamp', path: '#bootcamp' },
    { title: 'Program', path: '#' },
    { title: 'Why', path: '#' },
    { title: 'About', path: '#' },
  ])
  
  const toggleState = () => {
    state.value = !state.value
  }
</script>
<template>
  <div class="relative">
      <div
        class="absolute inset-0 blur-xl h-[580px]"
        :style="{
          background: 'linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)',
        }"
      ></div>
      <div class="relative">
        <header>
          <div
            :class="{'mx-2 pb-5': state, 'hidden': !state}"
            class="md:hidden"
          >
            <div class="flex items-center justify-between py-5 md:block">
              <a href="javascript:void(0)">
                <img
                  src="/images/loka.jpeg"
                  width="120"
                  height="50"
                  alt="lokaacademy logo"
                />
              </a>
              <button @click="toggleState" class="menu-btn text-gray-500 hover:text-gray-800">
                <svg v-if="state"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
              </button>
            </div>
          </div>
          <nav
            :class="{'absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-1 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent': state}"
            class="pb-5 md:text-sm"
          >
            <div class="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <!-- Logo and Menu Toggle Button - Desktop View -->
              <div class="flex items-center justify-between">
                <a href="javascript:void(0)">
                  <img
                    src="/images/loka.jpeg"
                    width="120"
                    height="50"
                    alt="Float UI logo"
                  />
                </a>
                <button @click="toggleState" class="menu-btn text-gray-500 hover:text-gray-800">
                  <svg v-if="state"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                  </svg>
                  <svg v-else
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              <!-- Navigation Links -->
              <div :class="{'block': state, 'hidden': !state}" class="flex-1 items-center mt-8 md:mt-0 md:flex">
                <ul class="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  <li
                    v-for="item in menuItems"
                    :key="item.title"
                    class="text-gray-700 hover:text-gray-900"
                  >
                    <a :href="item.path" class="block">{{ item.title }}</a>
                  </li>
                </ul>
                <div class="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <a
                    href="javascript:void(0)"
                    class="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    Masuk
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class="px-28">
          <a href="javascript:void(0)" class='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
          <span class='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
              News
          </span>
          <p class='flex items-center'>
              Bootcamp golang developer
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
          </p>
        </a>
        </div>  
      </div>
    </div>
</template>