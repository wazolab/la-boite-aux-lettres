<script setup lang="ts">
const appConfig = useAppConfig()

onMounted(() => {
  const protectedEmail = document.getElementById('protected-email')
  const protectedPhone = document.getElementById('protected-phone')

  if(protectedEmail)
    protectedEmail.innerHTML = 'moc.' + 'liamg' + '@' + 'dramloc.' + 'ettelrual';

  if(protectedPhone)
    protectedPhone.textContent = atob('MDYgMDEgOTMgNzUgODc=');
})
</script>

<template>
  <footer>
    <div class="wrapper">
      <img src="~/assets/images/brand-mobile.svg" :alt="appConfig.title"></img>
      <address>
        Laurette Colmard<br>
        <span id="protected-email" class="protected"></span><br>
        29 rue Colonel Bougault, 38100 Grenoble (FR)<br>
        <span id="protected-phone"></span>
      </address>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.protected {
  unicode-bidi: bidi-override;
  direction: rtl;
}

footer {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 0 1.5rem;
}

.wrapper {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  padding: 1.5rem 0;
}

address {
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.75rem;
}

img {
  height: 64px;
}
</style>