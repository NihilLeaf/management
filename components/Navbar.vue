<template>
  <div class="container">

    <nuxt-link to="/finance" class="nav-item">
      <strong>Financeiro <v-icon size="x-small">fa fa-money-bill</v-icon></strong>
    </nuxt-link>

    <nuxt-link to="/habits" class="nav-item">
      <strong>Hábitos <v-icon size="x-small">fa fa-clipboard-list</v-icon> </strong>
    </nuxt-link>
    <nuxt-link to="/writing" class="nav-item">
      <strong>Escrita <v-icon size="x-small">fa fa-signature</v-icon></strong>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .nav-item {
    width: 120px;
    height: 50px;
    text-align: center;
    margin-top: 16px;
    text-decoration: none;

    strong {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      color: #3A7D44;
    }

    strong:hover {
      font-size: larger;
      color: #69B578;
    }
  }

</style>