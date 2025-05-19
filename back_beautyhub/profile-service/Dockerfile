# Stage 1: Build with Maven
FROM maven:3.8.6-eclipse-temurin-17 as builder

WORKDIR /app
COPY pom.xml .
# Кешируем зависимости
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Runtime image
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Копируем собранный JAR из стадии builder
COPY --from=builder /app/target/*.jar app.jar

# Устанавливаем временную зону (опционально)
RUN apk add --no-cache tzdata
ENV TZ=Europe/Moscow

# Открываем порт приложения
EXPOSE 8080

# Параметры для запуска JVM (настройте под свои нужды)
ENV JAVA_OPTS="-Xmx512m -XX:+UseG1GC"

# Запуск приложения
ENTRYPOINT exec java $JAVA_OPTS -jar app.jar