<template>
  	<v-app>
  		<v-content>
  			<router-view />
  		</v-content>
  	</v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
	@import url('assets/css/style.css');
</style>
