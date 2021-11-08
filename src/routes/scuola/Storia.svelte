<script context="module" lang="ts">
	import { page } from '$app/stores';
	export const prerender = true;
</script>

<script>
	import IndiceElement from '$lib/IndiceElement/index.svelte';
	import IndicePath from '$lib/IndicePath/index.svelte';

	import RaccoltaIndiceElement from '$lib/RaccoltaIndiceElement/index.svelte';
	import * as json from '../jason.json';
</script>

<svelte:head>
	<title>Scuola</title>
</svelte:head>

<IndicePath />

<section>
	<RaccoltaIndiceElement json={json.pagesSummary[0].slaves} />
</section>

<style>
</style>
