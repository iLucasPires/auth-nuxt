<script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
  });
</script>

<template>
  <UContainer
    class="w-full items-center justify-center h-screen flex flex-col gap-y-4"
  >
    <UCard class="md:w-[32rem] w-full">
      <h1 class="text-3xl font-bold">Welcome</h1>
      <p class="text-gray-500">
        This is an example app, which is using Nuxt 3 and Drizzle.
      </p>
      <div class="space-y-4 mt-4">
        <UButton
          color="gray"
          label="Get Started"
          @click="navigateTo('/admin')"
          block
        />
      </div>
    </UCard>
  </UContainer>
</template>
