<script setup lang="ts">
useSeoMeta({
  title: 'Weihnachten 2023',
  ogTitle: 'Weihnachten 2023',
})
</script>

<template>

	
  <!-- Start Header -->
	<AppHeader />
  <!-- End Header -->

  	<PreLoader />
	
  <slot />
	
	<!-- Start Footer -->
	<AppFooter />
	<!-- End Footer -->
	
	<a href="#" id="scroll-to-top" class="hvr-radial-out"><i class="fa fa-angle-up"></i></a>

</template>