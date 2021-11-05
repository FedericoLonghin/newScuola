<script lang="ts">
	import { page } from '$app/stores';

	var pathArray = $page.path.split('/');
	var sectionName = pathArray[2];
	var pageName = pathArray[3];
	//var sectionName, pageName;

	console.log(pageName);
	if (typeof pageName !== 'undefined') console.log('und');
</script>

<div id="title-box" class="inline">
	<div>
		<a href="/Scuola/{sectionName}">{sectionName}</a>
	</div>
	<div style="margin-left:10px;     color: var(--heading-color);	" class:hidden={typeof pageName === 'undefined'}>/{pageName}</div>
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
