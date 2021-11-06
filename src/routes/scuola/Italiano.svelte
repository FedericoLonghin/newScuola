<script context="module" lang="ts">
	import snarkdown from 'snarkdown';
	const source = `
	# This is a header`;

	let md = '_this_ is very very is **easy** to ``use``.';
	let html = snarkdown(md);
	console.log(html);

	export const prerender = true;
</script>

<script>
	import IndicePath from '$lib/IndicePath/index.svelte';
</script>

<IndicePath />

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{@html snarkdown(md)}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
