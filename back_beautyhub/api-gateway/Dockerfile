# Используем официальный образ Maven с JDK для сборки
FROM maven:3.8.7-eclipse-temurin-17 AS build
WORKDIR /app

# Копируем только файлы, необходимые для сборки (оптимизация кэширования слоев)
COPY pom.xml .
COPY src ./src

# Собираем приложение (включая зависимости)
RUN mvn clean package -DskipTests

# Используем легковесный образ JRE для финального образа
FROM openjdk:17-jdk-slim
WORKDIR /app

# Копируем собранный JAR из стадии сборки
COPY --from=build /app/target/*.jar app.jar

# Команда для запуска приложения
ENTRYPOINT ["java", "-jar", "app.jar"]