<script>
	export var pageURL;
	export var pageName = '';
	export var date;
	var fullURL = (pageURL + '/' + pageName).replace(/ /g, '-').replace(/'/g, '-');
	console.log(fullURL);
</script>

<div class="indice-elem inline">
	<div>
		<a href={fullURL}> - {pageName}</a>
	</div>
	{#if date !== 'noDate'}
		<div class="indice-elem-data">{date}</div>
	{/if}
</div>
