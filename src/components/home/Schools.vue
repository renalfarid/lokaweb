<script setup>
  import {ref, onUnmounted, onMounted } from 'vue'
  const schools = ref([])
  const id = ref('')

  const apiUrl = import.meta.env.VITE_APP_API
  const socketAPI = import.meta.env.VITE_SOCKET_API

let socket = new WebSocket(`${socketAPI}/schools`)
socket.onmessage = (event) => {
  const data = JSON.parse(event.data)
  schools.value = data
  //console.log("data sekolah : ", data)
}

socket.onclose = (event) => {
  if (event.wasClean) {
    console.log("socket event clean: ", event.data)
    // Connection closed cleanly
  } else {
    console.log("socket event: ", event)
    socket.close()
    // Connection closed abruptly, handle it gracefully
  }
};

socket.onerror = (event) => {
  // Handle WebSocket errors
  console.log("socket error: ", event)
};

  const deleteSchool = async (id) => {
  try {
    // Make a DELETE request to the Chi API endpoint
    const response = await fetch(`${apiUrl}/schools/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
    });

    // Check if the request was successful (status code 200-299)
    if (response.ok) {
      console.log('School deleted successfully');
      // Perform any additional actions if needed
    } else {
      // Handle the case where the request was not successful
      console.error(`Failed to delete school. Status: ${response.status}`);
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error deleting school:', error);
  }
}

const handleDeleteSchool = async (schoolId) => {
    id.value = schoolId
    await deleteSchool(id.value)
}

onUnmounted(() => {
  socket.close()
  socket = null
  console.log("connection close")
})

onMounted(() => {
  socket.onmessage = (event) => {
   const data = JSON.parse(event.data)
   schools.value = data
  //console.log("data sekolah : ", data)
 }
})

</script>
<template>
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="items-start justify-between md:flex">
        <div class="max-w-lg">
          <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">List Schools</h3>
          <p class="text-gray-600 mt-2">
            List all schools at Sulawesi Barat Province
          </p>
        </div>
        <div class="mt-3 md:mt-0">
          <a href="javascript:void(0)" class="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
            Add School
          </a>
        </div>
      </div>
      <div class="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table class="w-full table-auto text-sm text-left">
          <thead class="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th class="py-3 px-6">NPSN</th>
              <th class="py-3 px-6">Nama Sekolah</th>
              <th class="py-3 px-6">Alamat</th>
              <th class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody class="text-gray-600 divide-y">
            <tr v-for="(item, idx) in schools" :key="idx">
              <td class="px-6 py-4 whitespace-nowrap">{{ item.npsn }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.nama_sekolah }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ item.alamat }}</td>
              <td class="text-right px-6 whitespace-nowrap">
                <a href="javascript:void(0)" class="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                  Edit
                </a>
                <button class="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg" @click="handleDeleteSchool(item.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>