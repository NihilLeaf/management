<template>
  <div class="container">
    <div class="nav-item">
      <strong>Hello</strong>
    </div>
    <div class="nav-item">
      <strong>Hello</strong>
    </div>
    <div class="nav-item">
      <strong>Hello</strong>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 5%;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .nav-item {
    width: 120px;
    background: green;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>