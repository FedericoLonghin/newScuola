<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.webmanifest" />

	<meta
		name="description"
		content="questo è il nuovo sitoTest di Federico Longhin"
	/>
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<!-- <link rel="icon" href="/favicon.svg" type="image/svg+xml"> -->
	<link rel="apple-touch-icon" href="/pencil-512x512.png" />
	<!-- <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aba9"> -->
	<meta name="msapplication-TileColor" content="#00aba9" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Federico Longhin - 2021</p>
</footer>

<ReloadPrompt />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
