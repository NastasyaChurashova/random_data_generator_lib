const RandomData = {
    getRandomName: () => {
        const names = ["Иван", "Олег", "Анна", "Дмитрий", "Лена", "Михаил"];
        return names[Math.floor(Math.random() * names.length)];
    },

    getRandomNumber: (min = 1, max = 100) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomDate: () => {
        const start = new Date(2000, 0, 1);
        const end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
    },

    getRandomAddress: () => {
        const streets = ["Ленина", "Ломоносова", "Варшавское шоссе", "Попова", "Московская"];
        const cities = ["Великий Новгород", "Тверь", "Москва", "Санкт-Петербург", "Казань"];
        const zip = RandomData.getRandomNumber(10000, 99999);
        return `${RandomData.getRandomNumber(1, 999)} ${streets[Math.floor(Math.random() * streets.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}, ZIP: ${zip}`;
    }
};

// Пример использования:
console.log("Имя:", RandomData.getRandomName());
console.log("Число:", RandomData.getRandomNumber(1, 50));
console.log("Дата:", RandomData.getRandomDate());
console.log("Адрес:", RandomData.getRandomAddress());

if (typeof module !== "undefined") {
    module.exports = RandomData;
}
