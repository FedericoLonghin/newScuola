<script context="module" lang="ts">
	import { page } from '$app/stores';

	export const prerender = true;
	var sectionName = 'Storia';
	var pageName = 'Il Novecento';
</script>

<svelte:head>
	<title>{pageName}</title>
</svelte:head>

<div id="title-box" class="inline">
	<div>
		<a href="/Scuola/{sectionName}">{sectionName}/</a>
	</div>
	<h2 class:hidden={pageName === 'Main'}>{pageName}</h2>
	<div />
</div>

<section>
	<div class="indice-elem inline">
		<div>
			<a href="/Scuola/Storia/Il-Novecento"> - Il novecento</a>
		</div>
		<div style="width: auto;" />
		<div class="indice-elem-data">03/11/2021</div>
	</div>
	<div class="indice-elem inline">
		<div>
			<a href="/Scuola/Storia/Il-Novecento"> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ex!/a>
		</div>
		<div style="width: auto;" />
		<div class="indice-elem-data">03/11/2021</div>
	</div>
	<div class="indice-elem inline">
		<div>
			<a href="/Scuola/Storia/Il-Novecento"> - La prima guerra mondiale</a>
		</div>
		<div style="width: auto;" />
		<div class="indice-elem-data">03/11/2021</div>
	</div>
	<div class="indice-elem inline">
		<div>
			<a href="/Scuola/Storia/Il-Novecento"> - La divina commedia di alessandro manzoni</a>
		</div>
		<div style="width: auto;" />
		<div class="indice-elem-data">03/11/2021</div>
	</div>
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

	.inline {
		text-align: left;
		display: flex;
	}
	.inline > div {
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
	}

	.indice-elem {
		width: 100%;
		text-align: left;
	}
	.hidden {
		visibility: hidden;
	}
	.indice-elem-data {
		opacity: 0.6;
		text-align: right;
		margin-left: auto;
	}
</style>
