export default defineNuxtRouteMiddleware((to, from) => {
  // Проверяем, что текущий путь - '/adventure' и целевой путь - '/'
  const isRiskPath = from.path === '/adventure'
  if (isRiskPath && to.path === '/') {
    // const confirmed = window.confirm("Вы действительно хотите перейти на стартовую страницу?");
    // if (!confirmed) {
    //   return false; // Остановить переход, если пользователь отменил
    // }
    console.log("Обнуление прогресса, уеху!")
  }
  // Позволяем переход на другие страницы без подтверждения
});
