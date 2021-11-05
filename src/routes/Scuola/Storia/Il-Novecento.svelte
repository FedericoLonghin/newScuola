<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import IndicePath from '$lib/IndicePath/index.svelte';

	var sectionName = 'sectname';
</script>

<IndicePath />

<svelte:head />

<section>
	<h1>Il Novecento</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
