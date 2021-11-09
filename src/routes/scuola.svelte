<script context="module">
	export const prerender = true;
</script>

<script>
	import RaccoltaIndiceElement from '$lib/RaccoltaIndiceElement/index.svelte';
	import * as json from './jason.json';
</script>

<svelte:head>
	<title>Scuola</title>
</svelte:head>

<section>
	<h1>Benvenuto nella sezione scuola</h1>

	<p>Qui troverai tutti gli appunti divisi per materie etc...</p>

	<p>Materie:</p>

	<RaccoltaIndiceElement json={json.pagesSummary} />
	
</section>

<style>
</style>
