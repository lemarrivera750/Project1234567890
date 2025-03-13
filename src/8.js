
<script>
function getRandomColor() {
  var colors = ['#FF69B4', '#7CECFB', '#FFC37D', '#1BCDD1', '#8E24AA'];
  return colors[Math.floor(Math.random() * colors.length)];
}
function getRandomCode() {
  var code = '';
  for (var i = 0; i < 10; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}
</script>