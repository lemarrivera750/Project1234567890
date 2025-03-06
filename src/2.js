function getRandomCode() {
  const code = Math.random().toString(36).slice(2);
  return code;
}
