<template>
  <div>
    <!-- <Tutorial /> -->
    <div>
      asdfads
      {{ maps }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      maps:null,
    }
  },
  async asyncData(context) {
    try {
      const response = await context.$axios.$get({
        // headers: {
          //   Authorization: 'Bearer YOUR_API_KEY',
          // },
        })
        console.log(response)

      // Handle the response data
      return { maps: response }

      // ...
    } catch (error) {
      // Handle errors
      console.error('Error:', error)
    }
  },
}
</script>
