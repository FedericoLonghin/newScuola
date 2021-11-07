<script context="module">
	import { browser, dev } from '$app/env';
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
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
