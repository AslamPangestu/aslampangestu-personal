<script lang="ts">
  import { onMount } from "svelte";

  let toggle = $state(false);

  onMount(() => {
    toggle = document.documentElement.classList.contains("dark");
  });

  const handleToggle = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;
    toggle = checked;
    const value = checked ? "dark" : "light";
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", value);
  };
</script>

<label
  class="group bg-primary relative flex cursor-pointer flex-row items-center gap-2.5 rounded-full px-3 py-2"
>
  <input
    class="peer sr-only"
    type="checkbox"
    checked={toggle}
    onchange={handleToggle}
  />
  <div
    class="bg-primary-container after:bg-surface peer-checked:bg-inverse-primary-container relative h-6 w-12 rounded-full transition-all duration-500 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:transition-all after:duration-500 peer-checked:after:translate-x-6 hover:after:scale-95 active:after:scale-90"
  >
    <span class="absolute inset-1 rounded-full"></span>
    <span class="absolute inset-0 rounded-full"></span>
  </div>
  <span class="text-surface text-lg">Dark Mode</span>
</label>
