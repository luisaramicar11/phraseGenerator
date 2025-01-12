# API Phrase Generator Dockerized Project

This project creates a Next.js application that generates phrases by combining subjects and predicates while applying conditional logic.

## Features

- Phrases generator
- Intuitive web interface with real-time responses.
- Fully Dockerized for portability and consistency.

## Prerequisites

- Docker version 27.3.1 or higher.
- Docker Compose version v2.29.7 or higher.

## Project Structure

```
api-calculator/
├── app/                  # Next.js App Directory containing pages and API routes
├── Dockerfile            # Docker configuration for the app
├── next.config.ts        # Next.js configuration file
├── public/               # Static assets
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation
```

## Backend and Frontend Explanation

### Backend
- **Type:** Serverless API (via Next.js API Routes).
- **Location:** `app/api/generator/route.ts`
- **Purpose:** Generate random phrases
- **How it works:** Acts as a stateless function triggered by HTTP requests.

### Frontend
- **Type:** Client-side React Application.
- **Location:** `app/page.tsx`
- **Purpose:**
  - Provides the user interface for button and result display.
  - Displays the API response (results or errors) in real-time.

## How to Install and Run

### Clone this repository:

```bash
git clone https://github.com/illuminaki/nextjs-api-calculator.git
cd next-js-api-calculator
```

### Build the Docker image:

```bash
docker build -t api-calculator .
```

### Start the container in development mode:

```bash
docker build -t api-calculator .
docker run -p 3000:3000 api-calculator
```

### Access the application:

Open your browser and navigate to:

```
http://localhost:3000
```

## How the Application Works

1. Users are presented with a simple, modern interface.
2. They input a number into a form and submit it.
3. The backend API processes the input and performs the following calculations:
   - Calculates the square of the number.
   - Calculates the cube of the number.
   - Determines whether the number is even or odd.
4. The results are displayed in real-time on the interface.

### Example:

**Input:** 4  
**Output:**
- The square of 4 is: 16
- The cube of 4 is: 64
- 4 is even.

## Docker Commands for Beginners

### Build the Image

To build the Docker image:

```bash
docker build -t api-calculator .
```

### Run the Application

Run the application interactively:

```bash
docker run -p 3000:3000 api-calculator
```

### Stop and Remove Containers

Stop all running containers:

```bash
docker stop $(docker ps -q)
```

Remove all containers:

```bash
docker rm $(docker ps -a -q)
```

### Remove All Unused Resources

To clean up unused Docker images, containers, and networks:

```bash
docker system prune -a
```

### Check Running Containers

List all active containers:

```bash
docker ps
```

## Dependencies

- **Next.js 13**: The React framework used for building the application.
- **TailwindCSS**: For styling the application.
- **Docker**: Ensures the app runs in a consistent environment.
- **TypeScript**: Provides static typing for better maintainability.

All dependencies are managed within Docker, so no additional installations are required on your host system.

## Notes

- This project is designed for learning and experimentation with Next.js and Docker.
- The application runs entirely inside the container, ensuring a consistent environment across different systems.
---
