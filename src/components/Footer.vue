<template>
  <footer id='page-footer'>
    {{ msg }}
    <div id='upper-left-piece'></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  #page-footer {
    position: relative;
    background: #080808;
    justify-content: center;
    align-self: stretch;
	  border-top-right-radius: var(--footer-height);
  }
  #upper-left-piece {
    position: absolute;
    left: 0;
    top: 0 ;
    width: var(--footer-height);
    height: var(--footer-height);
    overflow: hidden;
    transform: translateY(-100%);
  }
  #upper-left-piece::before {
    position: absolute;
    content: '';
    border-radius: 50%;
    width: calc(var(--footer-height) * 2);
    height: calc(var(--footer-height) * 2);
    transform: translate(0, -50%);
    background: pink;
    width: calc(var(--footer-height) * 2);
    height: calc(var(--footer-height) * 2);
    pointer-events: none;
    background: transparent;
    box-shadow: calc(var(--footer-height) / -3) calc(var(--footer-height) / 3) 0px #080808;
  }
</style>
