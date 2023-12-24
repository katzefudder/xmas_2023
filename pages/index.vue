<script>
    import { defineComponent } from "vue";
    import { GoogleMap, Marker } from "vue3-google-map";

    export default defineComponent({
        data: () => ({
            chosenPosition : {
                lat: 50.10318781155277,
                lng: 8.674091071488004
            },
            zoom: 16
        }),
        components: { GoogleMap, Marker },
        mounted() {
            
        }
    });
</script>

<template>
    <!-- wish -->
	<div id="wish" class="about-box" style="padding-bottom: 0;">
		<div class="about-a1">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="title-box">
							<h2>Frohe Weihnachten</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12">
						<div class="row align-items-center about-main-info">
							
							<div class="col-lg-6 col-md-6 col-sm-12 text_align_center">
						      <div class="full">
						      	  <img class="img-responsive" src="~/assets/images/w1.png" alt="#" />
						      </div>
							</div>

                              <div class="col-lg-6 col-md-6 col-sm-12">
								<h2><img style="width: 60px;" src="~/assets/images/head_s.png" alt="#" /> Anstatt Geschenke</h2>
								<p>Im nächsten Jahr möchte ich Euch gerne nach Frankfurt in's Städel einladen.
                                </p>
								<a href="https://www.staedelmuseum.de" target="_blank" class="hvr-radial-out button-theme">Städel</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div> 
	</div>
	<!-- wish us -->

    <!-- wish -->
	<div class="about-a1" style="background:#f7f7f7;margin-top: 50px;padding-top: 75px;padding-bottom: 50px;">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12">
						<div class="row align-items-center about-main-info">
						
                            <div class="col-lg-6 col-md-6 col-sm-12">
								<h2><img style="width: 60px;" src="~/assets/images/head_s.png" alt="#" /> Abendessen in Sachsenhausen</h2>
								<p>In einer schönen Apfelweinkneipe lassen wir den Abend gemeinsam ausklingen.</p>
							</div>

							<div class="col-lg-6 col-md-6 col-sm-12 text_align_center">
						      <div class="full">
						      	  <img class="img-responsive" src="~/assets/images/w2.png" alt="#" />
						      </div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	<!-- wish us -->

    <GoogleMap
        api-key="AIzaSyDMO8U-UWUiYV6ss8Kgkr19VKDI6d8TFjU"
        style="width: 100%; height: 500px"
        :center="chosenPosition"
        :zoom="zoom"
    >
        <Marker :options="{
            position: chosenPosition,
            draggable: false,
        }"
        v-model="chosenPosition"
        />
    </GoogleMap>
</template>