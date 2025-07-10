# --- Step 1: Build the project using Maven ---
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

COPY . .

RUN mvn clean install -DskipTests

# --- Step 2: Run the app using Java only ---
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY --from=build /app/target/form-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]
