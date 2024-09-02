export default defineNuxtRouteMiddleware((to, from) => {
  // Проверяем, что текущий путь - '/adventure' и целевой путь - '/'
  const isRiskPath = from.path === '/adventure' || from.path === '/characteristic'
  if (isRiskPath && to.path === '/') {
    // const confirmed = window.confirm("Вы действительно хотите перейти на стартовую страницу?");
    // if (!confirmed) {
    //   return false; // Остановить переход, если пользователь отменил
    // }
    console.log("Обнуление прогресса, уеху!")
  }
  // Позволяем переход на другие страницы без подтверждения
});

// возможно, эффективнее будет переписать на локальную миддлевару и подключить её к нужным страницам, хоть это и будут почти все страницы кроме стартовой