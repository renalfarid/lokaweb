<script setup>
  import {ref} from 'vue'

  const footerNavs = ref([
          { href: 'javascript:void()', name: 'Terms' },
          { href: 'javascript:void()', name: 'License' },
          { href: 'javascript:void()', name: 'Privacy' },
          { href: 'javascript:void()', name: 'About us' }
        ])
</script>
<template>
    <div>
      <footer class="pt-10">
        <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div class="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
            <img src="/images/loka.jpeg" class="w-32 sm:mx-auto" />
            <p>Dapatkan pengalaman belajar yang menyenangkan di Loka Academy.</p>
            <div class="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
              <a href="javascript:void(0)" class="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                Mulai aja dulu
              </a>
            </div>
          </div>
          <div class="mt-10 py-10 border-t items-center justify-between sm:flex">
            <p>© 2022 Loka Technology.</p>
            <ul class="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
              <li v-for="(item, idx) in footerNavs" :key="idx" class="text-gray-800 hover:text-gray-500 duration-150">
                <a :href="item.href">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
</template>