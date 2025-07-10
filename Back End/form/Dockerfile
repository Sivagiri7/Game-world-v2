# --- Step 1: Build the project using Maven ---
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Set working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Build the JAR, skip tests
RUN mvn clean install -DskipTests

# --- Step 2: Run the app using Java only ---
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Start the Spring Boot app
CMD ["java", "-jar", "app.jar"]

