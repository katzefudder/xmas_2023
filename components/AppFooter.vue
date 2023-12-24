<script>
export default {
  name: 'AppFooter',
  props: ['message', 'type'],
  methods: {
    currentDate() {
        return new Date().getFullYear()
    },
  }
}
</script>
<template>
    <!-- Start Footer -->
	<footer class="footer-box">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<p class="footer-company-name">Florian Dehn. &copy; {{  currentDate() }}</p>
				</div>
			</div>
		</div>
	</footer>
	<!-- End Footer -->
</template>