<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import IndicePath from '$lib/IndicePath/index.svelte';

	import RaccoltaIndiceElement from '$lib/RaccoltaIndiceElement/index.svelte';
	import * as json from '../jason.json';
</script>

<svelte:head>
	<title>Italiano</title>
</svelte:head>

<IndicePath />
<section>
	<RaccoltaIndiceElement json={json.pagesSummary[1].slaves} />
</section>

