# Определение версии Node
FROM node:18

# Определение рабочего каталога
WORKDIR /backend

# Копирование файла package.json из локальной директории (где находится Dockerfile) в /backend внутри контейнера
COPY package.json .

# Установка модулей
RUN npm install

# Копирование всего проекта (исходного кода и модулей) из локальной директории в /backend
COPY . .

# Запуск приложения
CMD npm start