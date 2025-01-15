<script>
	import NameInput from '$components/NameInput/NameInput.svelte';
	import { css } from 'styled-system/css';
</script>

<div
	class={css({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	})}
>
	<div
		class={css({
			fontSize: '2xl',
			fontWeight: 'bold',
			marginTop: '5rem'
		})}
	>
		Hello 🐼!
	</div>

	<NameInput onSubmit={console.log} />
</div>
