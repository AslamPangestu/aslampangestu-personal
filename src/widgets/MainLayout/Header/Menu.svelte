<script lang="ts">
  import { fly } from "svelte/transition";
  import Icon from "@iconify/svelte";

  import Background from "@/shared/assets/bg-menu-mobile.png?width=1600&format=webp&as=url";

  import ToggleDarkMode from "./ToggleDarkMode.svelte";

  interface Route {
    key: string;
    name: string;
    href: string;
  }

  let { routes = [], currentPath = "" } = $props<{
    routes: Route[];
    currentPath: string;
  }>();

  let isOpen = $state(false);
  let dialogElement: HTMLDialogElement | undefined = $state();

  $effect(() => {
    if (isOpen && dialogElement && !dialogElement.open) {
      dialogElement.showModal();
      document.body.style.overflow = "hidden";
    }
  });

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      isOpen = true;
    }
  };

  const closeMenu = () => {
    isOpen = false;
  };

  const handleClose = () => {
    // This is called when the dialog's native .close() is called
    // (e.g. via Esc key or our manual call)
    isOpen = false;
    document.body.style.overflow = "auto";
  };

  const handleOutroEnd = () => {
    if (!isOpen && dialogElement && dialogElement.open) {
      dialogElement.close();
    }
  };

  const handleDialogClick = (e: MouseEvent) => {
    if (e.target === dialogElement) {
      closeMenu();
    }
  };
</script>

<button
  class="relative z-[100] flex h-10 w-10 flex-col items-end justify-center gap-1.5 focus:outline-none"
  onclick={toggleMenu}
  aria-label="Toggle Menu"
>
  <span class="bg-primary dark:bg-surface h-0.5 w-4"></span>
  <span class="bg-primary dark:bg-surface h-0.5 w-6 transition-all duration-300"
  ></span>
  <span class="bg-primary dark:bg-surface h-0.5 w-4"></span>
</button>

<dialog
  bind:this={dialogElement}
  onclose={handleClose}
  onclick={handleDialogClick}
  class="fixed top-0 m-0 h-fit w-full max-w-none border-none bg-transparent p-0 focus:outline-none backdrop:bg-black/40 backdrop:backdrop-blur-sm"
>
  {#if isOpen}
    <div
      class="bg-surface dark:bg-surface-900 border-on-surface-secondary/10 flex flex-col border-b shadow-2xl"
      style={`background-image: url(${Background});background-size: cover;`}
      transition:fly={{ y: -100, duration: 450 }}
      onoutroend={handleOutroEnd}
    >
      <!-- Modal Header -->
      <header
        class="border-on-surface-secondary/10 flex items-center justify-between border-b px-4 pt-8"
      >
        <div class="flex items-center gap-4">
          <ToggleDarkMode color="dark" />
        </div>
        <button
          onclick={closeMenu}
          class="text-white flex h-6 w-6 cursor-pointer"
          aria-label="Close Menu"
        >
          <Icon icon="tabler:circle-x" class="w-full h-full" />
        </button>
      </header>

      <!-- Menu List -->
      <nav class="flex flex-col items-center px-4 pb-8 pt-6">
        {#each routes as route (route.key)}
          {@const selected = `/${currentPath}` === route.href}
          <a
            href={route.href}
            class="px-6 py-5 text-3xl font-semibold {selected
              ? 'text-white'
              : 'text-on-surface-secondary'}"
          >
            {route.name}
          </a>
        {/each}
      </nav>
    </div>
  {/if}
</dialog>

<style>
  /* Remove default dialog styles */
  dialog {
    margin: 0;
    max-width: 100vw;
  }
</style>
