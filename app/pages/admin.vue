<template>
  <UContainer
    class="w-full items-center justify-center h-screen flex flex-col gap-y-4"
  >
    <UCard class="md:w-[32rem] w-full">
      <div class="flex flex-col gap-y-4 items-center">
        <AuthState v-slot="{ loggedIn }">
          <template v-if="user">
            <UAvatar size="3xl" :src="user.avatar" />
            <h1 class="text-3xl font-bold">{{ user.name }}</h1>
            <UButton
              v-if="loggedIn"
              color="gray"
              label="Logout"
              @click="logout()"
              block
            />
          </template>
        </AuthState>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: "auth",
  });

  const { user, clear, ready } = useUserSession();

  async function logout() {
    await clear();
    await navigateTo("/auth");
  }
</script>
