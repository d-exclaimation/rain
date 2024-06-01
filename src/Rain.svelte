<script lang="ts">
  import { createQuery } from "@tanstack/svelte-query";
  import { fade } from "svelte/transition";
  import Droplet from "./Droplet.svelte";
  import { forecast } from "./lib/forecast";

  const query = createQuery({
    queryKey: ["forecast"],
    queryFn: forecast,
  });
</script>

<div class="flex items-center justify-center w-full h-full">
  <div
    class="absolute z-10 w-60 h-60 md:w-80 md:h-80 overflow-clip -translate-x-1/3 blur-2xl bg-fuchsia-400/20 md:bg-fuchsia-400/10 rounded-full [-webkit-transform:translate3d(var(--tw-translate-x),0,0)]"
  ></div>
  <div
    class="absolute z-10 w-60 h-60 md:w-80 md:h-80 overflow-clip translate-x-1/3 blur-2xl bg-blue-400/20 md:bg-blue-400/10 rounded-full [-webkit-transform:translate3d(var(--tw-translate-x),0,0)]"
  ></div>
  {#if !!$query.data}
    <div
      class="absolute text-white text-xl md:text-5xl font-comfort max-w-[40rem] text-balance"
      transition:fade={{ delay: 250, duration: 300 }}
    >
      {$query.data}
    </div>
  {:else}
    <Droplet />
  {/if}
</div>
