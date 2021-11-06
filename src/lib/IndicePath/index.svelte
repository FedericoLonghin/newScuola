<script lang="ts">
	import { page } from '$app/stores';

	var pathArray = $page.path.split('/');
	var sectionName = pathArray[2];
	var pageName = pathArray[3];
	//var sectionName, pageName;
</script>

<div id="title-box" class="inline">
	<div>
		<a href="/scuola/{sectionName}">{sectionName}</a>
	</div>
	<div
		style="margin-left:10px;     color: var(--heading-color);	"
		class:hidden={typeof pageName === 'undefined'}
	>
		/{pageName}
	</div>
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
		font-size: 1.6rem !important;
	}
</style>
