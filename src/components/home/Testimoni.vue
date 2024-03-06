<template>
    <section class="py-14">
        <div class="max-w-screen-xl mx-auto px-4 md:px-8">
            <div class="max-w-xl sm:text-center md:mx-auto">
                <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Review Gokil tentang Loka Academy 🚀
                </h3>
                <p class="mt-3 text-gray-600">
                    Panduanku ke Ajang Koding yang Penuh Petualangan dan Keseruan!
                </p>
            </div>
            <div class="mt-12">
                <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <li v-for="(item, idx) in testimonials" :key="idx" class="bg-gray-100 p-4 rounded-xl">
                        <figure>
                            <div class="flex items-center gap-x-4">
                                <img :src="item.avatar" class="w-16 h-16 rounded-full" />
                                <div>
                                    <span class="block text-gray-800 font-semibold">{{ item.name }}</span>
                                    <span class="block text-gray-600 text-sm mt-0.5">{{ item.title }}</span>
                                </div>
                            </div>
                            <blockquote>
                                <p class="mt-6 text-gray-700">
                                    {{ item.quote }}
                                </p>
                            </blockquote>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    avatar: "/avatar/enal.jpeg",
                    name: "Nal Farid",
                    title: "CTO Prospekin",
                    quote: "Loka Academy membuat belajar jadi menyenangkan."
                },
                {
                    avatar: "/avatar/default.png",
                    name: "Revind Delano",
                    title: "Product designer",
                    quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                },
                {
                    avatar: "/avatar/default.png",
                    name: "Aziswadi",
                    title: "Marketing",
                    quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
                },
            ]
        };
    }
}
</script>