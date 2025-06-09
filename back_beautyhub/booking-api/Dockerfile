# Используем официальный образ OpenJDK 21
FROM openjdk:21-jdk-slim

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем собранный JAR-файл приложения в контейнер
COPY target/booking-api-1.0.0.jar app.jar

# Открываем порт 8080
EXPOSE 8080

# Команда для запуска приложения
ENTRYPOINT ["java", "-jar", "app.jar"]
