<script context="module" lang="ts">
	import { page } from '$app/stores';

	export const prerender = true;
	var sectionName = 'Storia';
	var pageName = 'Il Novecento';
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>
<div class="title-box ">
	<a href="/Scuola/{sectionName}">{sectionName}:</a>
	<h2 class:hidden={pageName === 'Main'}>{pageName}</h2>
</div>


<section>
	<div class="indice-elem"><a href="/Scuola/Storia/Il-Novecento"> - Il novecento </a></div>
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
	.indice-elem {
	}
	.title-box {
		text-align: left;
		white-space:nowrap; 

	}
	.hidden {
		visibility: hidden;
	}
</style>
