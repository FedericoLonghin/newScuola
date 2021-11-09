<script>
	export let json = [{ name: '', date: '', url: '', slaves: '' }];
	console.log(json[0].url);
</script>

{#each json as pages}
	<div class="indice-elem inline">
	
			<a href={pages.url}> - {pages.name}</a>
		
		{#if pages.date !== 'noDate'}
			<div class="indice-elem-data">{pages.date}</div>
		{/if}
	</div>
{/each}
