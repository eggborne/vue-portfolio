<template>
  <div class='tech-tag'>
    {{ tech }}
  </div>
</template>

<script>
export default {
  name: 'TechTag',
  props: {
    tech: String
  }
}
</script>

<style scoped>
  .tech-tag {
		height: calc(var(--header-height) / 2.5);
    display: flex;
    justify-content: center;
		align-items: center;
    font-size: calc(var(--main-font-size) * 1.1);
		padding: 0 1em;
    border-radius: calc(var(--inner-padding) / 2);
    border: 1px solid #00000055;;
    color: var(--main-text-color);
    text-shadow: 0px 1px black;
    margin-right: 0.5em;
  }
</style>
