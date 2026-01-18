<script setup lang="ts">
const appConfig = useAppConfig()

onMounted(() => {
  const protectedEmail = document.getElementById('protected-email')

  if(protectedEmail)
    protectedEmail.innerHTML = 'moc.' + 'liamg' + '@' + 'dramloc.' + 'ettelrual';

})
</script>

<template>
  <footer>
    <div class="wrapper">
      <img src="~/assets/images/brand-mobile.svg" :alt="appConfig.title"></img>
      <address>
        Laurette Colmard<br>
        29 rue Colonel Bougault, 38100 Grenoble (FR)<br>
        <span id="protected-email" class="protected"></span>
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
  gap: 1.5rem;
  padding: 1.5rem 0;
}

address {
  font-size: 0.65rem;
  line-height: 12px;
}

img {
  height: 64px;
}

@media (min-width: 768px) {
  .wrapper {
    gap: 3rem;
  }

  img {
    height: 104px;
  }

  address {
    font-size: 0.75rem;
    line-height: 14px;
  }
}

@media (min-width: 1024px) {
  .wrapper {
    gap: 8rem;
  }

  img {
    height: 120px;
  }

  address {
    font-size: 0.95rem;
    line-height: 15px;
  }
}

@media (min-width: 1536px) {
  .wrapper {
    gap: 20rem;
  }

  img {
    height: 146px;
  }

  address {
    font-size: 1rem;
    line-height: 20px;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    gap: 28rem;
  }

  img {
    height: 155px;
  }


  address {
    font-size: 1.15rem;
    line-height: 22px;
  }
}
</style>