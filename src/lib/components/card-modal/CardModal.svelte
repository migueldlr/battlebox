<script lang="ts">
	import { cardModal, closeCardModal } from './cardModalState.svelte';
	import { getHighResImage } from '$lib/utils';

	let dialog = $state<HTMLDialogElement | null>(null);

	// Open or close the native <dialog> to match the shared state.
	$effect(() => {
		if (!dialog) return;
		if (cardModal.open && !dialog.open) {
			dialog.showModal();
		} else if (!cardModal.open && dialog.open) {
			dialog.close();
		}
	});

	const card = $derived(cardModal.card);
</script>

<dialog
	bind:this={dialog}
	class="card-modal"
	onclose={closeCardModal}
	onclick={(e) => {
		// Close when the user clicks the backdrop, not the image.
		if (e.target === dialog) closeCardModal();
	}}
>
	{#if card}
		<div class="card-modal-body">
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions, a11y_click_events_have_key_events -->
			<img
				crossorigin="anonymous"
				class="card-modal-image"
				src={getHighResImage(card)}
				alt={card.attributes.title}
				onclick={closeCardModal}
			/>
			{#if card.attributes.notes}
				<p class="card-modal-notes">{card.attributes.notes}</p>
			{/if}
		</div>
	{/if}
</dialog>

<style>
	.card-modal {
		margin: auto;
		max-width: 100vw;
		max-height: 100vh;
		border: none;
		background: transparent;
		padding: 2rem;
		/* Scroll when the card and note are taller than the screen. */
		overflow-y: auto;
		overscroll-behavior: contain;
	}

	.card-modal::backdrop {
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(2px);
	}

	.card-modal-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.card-modal-image {
		display: block;
		/* Set only max sizes. This keeps the card shape correct on all screens. */
		max-height: calc(100vh - 4rem);
		max-width: calc(100vw - 4rem);
		width: auto;
		height: auto;
		border-radius: 4.55% / 3.5%;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		cursor: pointer;
	}

	/* Make the card smaller when a note is shown, so both fit on screen. */
	.card-modal-body:has(.card-modal-notes) .card-modal-image {
		max-height: min(calc(100vh - 4rem), 70vh);
	}

	.card-modal-notes {
		max-width: min(calc(100vw - 4rem), 40ch);
		margin: 0;
		padding: 0.875rem 1rem;
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.55);
		color: var(--foreground, #fff);
		font-size: 0.9375rem;
		line-height: 1.5;
		white-space: pre-wrap;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
	}
</style>
