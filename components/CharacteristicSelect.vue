<script setup>
const emit = defineEmits(["update:characteristics"]);
const props = defineProps(["triggerRandomDistribution"]);

const availableValues = ref([40, 50, 50, 50, 60, 60, 70, 80]);
const selectedValues = ref(Array(8).fill(null));

const statTittles = [
  { titleCut: "Сил", titleFull: "Сила" },
  { titleCut: "Лов", titleFull: "Ловкость" },
  { titleCut: "Тел", titleFull: "Телосложение" },
  { titleCut: "Вын", titleFull: "Выносливость" },
  { titleCut: "Нар", titleFull: "Наружность" },
  { titleCut: "Мощ", titleFull: "Мощь" },
  { titleCut: "Инт", titleFull: "Интеллект" },
  { titleCut: "Обр", titleFull: "Образование" },
];

// Метод для получения доступных опций
const getAvailableOptions = (currentIndex) => {
  const counts = {};

  // Подсчёт количества каждого значения
  availableValues.value.forEach((value) => {
    if (counts[value] === undefined) {
      counts[value] = 1;
    } else {
      counts[value] += 1;
    }
  });

  // Уменьшение количества значений, которые были выбраны в других полях
  selectedValues.value.forEach((value, index) => {
    if (value !== null && index !== currentIndex) {
      counts[value] -= 1;
    }
  });

  // Генерация доступных опций с учётом обновлённых счётчиков
  const availableOptions = [];
  availableValues.value.forEach((value) => {
    if (counts[value] > 0) {
      availableOptions.push(value);
      counts[value] -= 1;
    }
  });

  return availableOptions;
};

// Принудительно обновляем состояние, чтобы селекты обновили свои опции
const updateSelection = () => {
  selectedValues.value = [...selectedValues.value];
};

// Метод для случайного распределения значений
const randomizeValues = () => {
  const shuffledValues = availableValues.value.sort(() => 0.5 - Math.random());
  selectedValues.value = shuffledValues.slice(0, selectedValues.value.length);
};

// Следим за изменением selectedValues и отсылаем данные родительскому компоненту
watch(selectedValues, (newValues) => {
  if (newValues.every((val) => val !== null)) {
    emit("update:characteristics", newValues);
  }
});

// Следим за изменением props.triggerRandomDistribution и вызов метода randomizeValues
watch(
  () => props.triggerRandomDistribution,
  () => {
    randomizeValues();
  }
);
</script>

<template>
  <div>
    <form class="selects-wrapper">
      <div
        v-for="(selectedValue, index) in selectedValues"
        :key="index"
        class="select-container"
      >
        <div>
          <p class="title-cut">{{ statTittles[index].titleCut }}</p>
          <p class="title-full">{{ statTittles[index].titleFull }}</p>
        </div>
        <select
          v-model="selectedValues[index]"
          @change="updateSelection"
          class="custom-select"
        >
          <option
            v-for="value in getAvailableOptions(index)"
            :key="value"
            :value="value"
          >
            {{ value }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
.selects-wrapper {
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  column-gap: 70px;
}

.select-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}

.title-cut {
  font-size: 32px;
  line-height: 150%;
  color: #88847d;
  text-transform: uppercase;
}

.title-full {
  font-style: italic;
  font-size: 28px;
  color: #806c4a;
}

.custom-select {
  width: 95px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #88847d;
  font-size: 24px;
  line-height: 150%;
  cursor: pointer;
  text-align: center;

  /* Убираем стандартный вид select */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.custom-select option {
  background-color: rgba(0, 0, 0, 0.8);
  color: #88847d;
}
</style>
