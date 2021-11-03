<script lang="ts">
		export let showIndicePath;
	var sectionName = 'Storia';
	var pageName = 'aaaProva';
</script>

<div id="title-box" class="inline"  class:hidden={!showIndicePath}>
	<div>
		<a href="/Scuola/{sectionName}">{sectionName}</a>
	</div>
		<div style="margin-left:10px"class:hidden={pageName === 'Main'}>/{pageName}</div>
	
</div>



<style>

	.inline {
		text-align: left;
		display: flex;
	}
	.inline > div {
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
	}
	#title-box {
		font-size: 2rem !important;
	}
	
	.hidden {
		visibility: hidden;
	}
</style>