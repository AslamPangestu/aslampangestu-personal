<script lang="ts">
  import type { Project } from "@/entities/project/model/type";
  import ProjectItem from "./ProjectItem.svelte";
  import Dialog from "./Dialog.svelte";

  let { projects } = $props<{ projects: Project[] }>();

  let isDialogOpen = $state(false);
  let selectedProject = $state<Project | null>(null);

  const openDialog = (project: Project) => {
    selectedProject = project;
    isDialogOpen = true;
  };

  const closeDialog = () => {
    isDialogOpen = false;
  };
</script>

<div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
  {#each projects as project}
    <ProjectItem {...project} onClick={() => openDialog(project)} />
  {/each}
</div>

<Dialog project={selectedProject} isOpen={isDialogOpen} onClose={closeDialog} />
