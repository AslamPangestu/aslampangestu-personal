<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";

  import type { Project } from "@/entities/project/model/type";

  import { getImageUrl } from "@/shared/lib/sanity-image-url";

  interface Props {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
  }

  let { project, isOpen, onClose }: Props = $props();

  let dialogElement: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (isOpen && dialogElement && !dialogElement.open) {
      dialogElement.showModal();
      document.body.style.overflow = "hidden";
    }
  });

  const handleClose = () => {
    // This handles the native close (like Esc or .close() call)
    if (isOpen) {
      onClose();
    }
    document.body.style.overflow = "auto";
  };

  const handleOutroEnd = () => {
    if (!isOpen && dialogElement && dialogElement.open) {
      dialogElement.close();
    }
  };

  const handleDialogClick = (e: MouseEvent) => {
    if (e.target === dialogElement) {
      onClose();
    }
  };

  const imageUrl = $derived(
    project?.coverImage ? getImageUrl(project.coverImage).url() : "",
  );
</script>

<dialog
  bind:this={dialogElement}
  onclose={handleClose}
  onclick={handleDialogClick}
  class="fixed inset-0 z-50 m-auto rounded-4xl max-w-4xl max-h-[90vh] backdrop:bg-black/40 backdrop:backdrop-blur-sm focus:outline-none"
>
  {#if isOpen && project}
    <div
      class="bg-surface dark:bg-inverse-surface flex flex-col overflow-y-auto"
      transition:fly={{ y: 20, duration: 300 }}
      onoutroend={handleOutroEnd}
    >
      <div class="relative h-[45vh] w-full overflow-hidden">
        {#if imageUrl}
          <img
            src={imageUrl}
            alt={project.title}
            class="h-full w-full object-cover"
          />
        {/if}
        <button
          onclick={handleClose}
          class="absolute cursor-pointer right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
          aria-label="Close Dialog"
        >
          <Icon icon="lucide:x" class="text-2xl" />
        </button>
      </div>

      <div class="flex flex-col gap-4 p-6">
        <!-- TODO: Show Duration n Client -->
        <div class="flex flex-row gap-2 justify-between">
          <div class="flex flex-col gap-2">
            <h4 class="text-on-surface dark:text-surface text-3xl font-black">
              {project.title}
            </h4>
            {#if project.skill && project.skill.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each project.skill as item}
                  <span
                    class="bg-primary/10 text-primary font-bold rounded-full px-4 py-1 text-sm"
                  >
                    {item.name}
                  </span>
                {/each}
              </div>
            {/if}
          </div>
        </div>

        {#if project.projectDescription}
          <p
            class="text-lg font-medium text-on-surface-secondary dark:text-surface"
          >
            {project.projectDescription}
          </p>
        {/if}
      </div>
    </div>
  {/if}
</dialog>

<style>
  dialog::backdrop {
    animation: fade-in 0.3s ease-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
