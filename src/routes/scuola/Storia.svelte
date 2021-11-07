<script context="module" lang="ts">
	export const prerender = true;
	var pageName;
</script>

<script>
	import { page } from '$app/stores';
	import IndiceElement from '$lib/IndiceElement/index.svelte';
	import IndicePath from '$lib/IndicePath/index.svelte';

	import RaccoltaIndiceElement from '$lib/RaccoltaIndiceElement/index.svelte';
	import * as json from '../jason.json';
</script>

<IndicePath />
<svelte:head>
	<title>{pageName}</title>
</svelte:head>



<section>
	<RaccoltaIndiceElement json={json.pagesSummary[0].slaves} />
	
	</section>
	
<style>
</style>
