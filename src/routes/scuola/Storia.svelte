<script context="module" lang="ts">
	export const prerender = true;
	var pageName;
</script>

<script>
	import { page } from '$app/stores';
	import IndiceElement from '$lib/IndiceElement/index.svelte';
	import IndicePath from '$lib/IndicePath/index.svelte';
</script>

<IndicePath />

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<section>
	<IndiceElement pageURL={$page.path} pageName={"Il-Novecento"} date={'06/11/2021'} />
	<IndiceElement pageURL={$page.path} pageName={"Prima-guerra-mondiale"} date={'06/11/2021'} />
	<IndiceElement pageURL={$page.path} pageName={"La-visione-dell'uomo-nel-positivo"} date={'06/11/2021'} />

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
