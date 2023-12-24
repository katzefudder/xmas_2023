<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true;
      },
      finish() {
        this.loading = false;
      },
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      async preLoad(){
        this.start();
        await this.sleep(1500);
        this.finish();
      }
    },
    mounted() {
        this.preLoad()
    }
  };
</script>

<template>
    <div v-if="loading" id="preloader">
        <div class="loader">
            <div class="box"></div>
            <div class="box"></div>
        </div>
    </div>
</template>