<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import IndicePath from '$lib/IndicePath/index.svelte';

<svelte:head>
	<title>Home</title>
</svelte:head>

<IndicePath />
<SvelteMarkdown {source} />
