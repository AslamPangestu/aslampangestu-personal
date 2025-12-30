<script lang="ts">
  import Icon from "@iconify/svelte";

  import type { Project } from "@/entities/project/model/type";

  import { getImageUrl } from "@/shared/lib/sanity-image-url";

  interface Props extends Project {
    onClick: () => void;
  }

  let { coverImage, title, projectDescription, skill, onClick }: Props =
    $props();

  const imageUrl = $derived(coverImage ? getImageUrl(coverImage).url() : "");
</script>

<div class="group relative block aspect-[4/3] overflow-hidden rounded-4xl">
  {#if imageUrl}
    <img
      src={imageUrl}
      alt={title}
      width={800}
      height={600}
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  {/if}

  <div class="relative z-10 flex h-full flex-col justify-between">
    <div class="flex justify-end">
      <button
        class="bg-primary cursor-pointer border-surface flex flex-row items-center gap-2 rounded-bl-4xl border-b border-l px-5 py-3.5 text-white hover:underline"
        type="button"
        onclick={onClick}
      >
        <span class="text-xl font-semibold text-white">View Detail</span>
        <Icon icon="lucide:arrow-right" class="text-2xl" />
      </button>
    </div>

    <div
      class="translate-y-[46%] rounded-4xl bg-black/80 px-8 py-9 text-surface transition-transform duration-500 group-hover:translate-y-0"
    >
      <h4 class="mb-2.5 text-3xl font-black">{title}</h4>
      <span class="text-lg font-extralight">
        Stack: {skill?.map((item: any) => item.name).join(", ")}
      </span>
      <p
        class="mt-5 line-clamp-3 text-lg font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {projectDescription}
      </p>
    </div>
  </div>
</div>
