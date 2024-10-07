<script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
  });

  const form = reactive({
    email: "",
    password: "",
  });

  async function login() {
    const data = await $fetch("/api/auth/login", {
      method: "POST",
      body: { username: form.email, password: form.password },
    });

    if (data) {
      await navigateTo("/admin"),
      console.log(data);
    }
  }
</script>

<template>
  <UContainer
    class="w-full items-center justify-center h-screen flex flex-col gap-y-4"
  >
    <UCard class="md:w-[32rem] w-full">
      <h1 class="text-3xl font-bold">Login</h1>

      <div class="space-y-4 mt-4">
        <UFormGroup label="Email" name="email">
          <UInput
            v-model="form.email"
            type="email"
            autocomplete="username"
            placeholder="Enter your email"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput
            v-model="form.password"
            type="password"
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </UFormGroup>

        <UButton @click="login()" label="Login" color="gray" block />

        <UDivider label="OR" />

        <div class="grid grid-cols-2 gap-2">
          <UButton
            color="blue"
            label="Google"
            icon="i-carbon-logo-google"
            to="/api/auth/google"
            external
          />

          <UButton
            color="black"
            label="Github"
            icon="i-carbon-logo-github"
            to="/api/auth/github"
            external
          />
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
