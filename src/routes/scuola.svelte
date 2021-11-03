<script context="module">
	import { browser, dev } from '$app/env';
	import { page } from '$app/stores';

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

<svelte:head>
	<title>Scuola</title>
</svelte:head>

<div class="content">
	<h1>Benvenuto nella sezione scuola</h1>

	<p>Qui troverai tutti gli appunti divisi per materie etc...</p>

	<p>Materie:</p>

	<p class="link-holder">
		<a sveltekit:prefetch href="/Scuola/Italiano">- Italiano</a>
		<br />
		<a sveltekit:prefetch href="/Scuola/Storia">- Storia</a>
	</p>

	<!--

	<div>
		<button class="Mat-btn">Italiano</button>
		<button class="Mat-btn">Italiano</button>
	</div>
-->
</div>

<style>
	.link-holder {
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.Mat-btn {
		border: 1px solid #8885;
		outline: none;
		margin-right: 5px;
		border-radius: 2px;
		padding: 3px 10px;
		background-color: #b8b8b8;
		color: #333333;
	}
	.Mat-btn:hover {
		background-color: aqua;
	}
</style>
