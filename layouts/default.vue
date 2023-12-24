<script setup lang="ts">
useSeoMeta({
  title: 'XMAS 2024',
  ogTitle: 'XMAS 2024',
})
</script>

<template>

	
  <!-- Start Header -->
	<AppHeader />
  <!-- End Header -->

  	<PreLoader />
	
	<!-- Start Banner -->
	<div class="ulockd-home-slider">
		<div class="container-fluid">
			<div class="row">
				<div class="pogoSlider" id="js-main-slider">
					<div class="pogoSlider-slide" style="background-image:url(images/slider-01.jpg);"></div>
					<div class="pogoSlider-slide" style="background-image:url(images/slider-01.jpg);"></div>
				</div><!-- .pogoSlider -->
			</div>
		</div>
	</div>
	<!-- End Banner -->
	
  <slot />
	
	<!-- Start Footer -->
	<AppFooter />
	<!-- End Footer -->
	
	<a href="#" id="scroll-to-top" class="hvr-radial-out"><i class="fa fa-angle-up"></i></a>

</template>