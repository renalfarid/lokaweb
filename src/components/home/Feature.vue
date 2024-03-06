<script setup>
  import {ref, onMounted} from 'vue'

  const features = ref([
          {
            icon: `
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' />
              </svg>`,
            title: 'Backend Developer',
            desc: 'Pelajari konsep-konsep inti dari server-side programming, database management, dan menguasai teknologi-teknologi terkini yang digunakan dalam pengembangan backend. '
          },
          {
            icon: `
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z' />
              </svg>`,
            title: 'Frontend Developer',
            desc: 'Bergabunglah dengan kami dan temukan bagaimana menjadi Frontend Developer yang kreatif dan terampil, siap untuk menghadapi tantangan dunia digital yang terus berubah.'
          },
          {
            icon: `
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' />
              </svg>`,
            title: 'Devops',
            desc: 'Melalui sesi-sesi pelatihan praktis, Anda akan menguasai alat-alat DevOps terkini dan mengembangkan keahlian dalam mengelola infrastruktur serta mengimplementasikan praktik-praktik CI/CD. '
          }
        ])
  
</script>
<template>
    <section class="py-14">
      <div id="bootcamp" class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div class="max-w-xl space-y-3">
          <h3 class="text-indigo-600 font-semibold">
            Bootcamp
          </h3>
          <p class="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Merupakan program belajar secara intensif
          </p>
          <p>
            Loka Academy berkomitmen menyelenggarakan program belajar intensif dan terjangkau
          </p>
        </div>
        <div class="mt-12">
          <ul class="grid gap-x-12 divide-y [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 sm:divide-y-0 lg:divide-x lg:grid-cols-3 lg:gap-x-0">
            <li v-for="(item, idx) in features" :key="idx" :class="`feature-${idx + 1} space-y-3 py-8 lg:px-12 sm:py-0`">
              <div class="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center" v-html="item.icon"></div>
              <h4 class="text-lg text-gray-800 font-semibold">
                {{ item.title }}
              </h4>
              <p>
                {{ item.desc }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>