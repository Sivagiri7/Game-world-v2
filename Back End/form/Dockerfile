# Use a lightweight OpenJDK 17 image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all project files into the container
COPY . .

# Build the Spring Boot project and skip tests
RUN java -jar .mvn/wrapper/maven-wrapper.jar clean install -DskipTests

# Run the generated .jar file (replace with your actual .jar name if needed)
CMD ["java", "-jar", "target/form-0.0.1-SNAPSHOT.jar"]
