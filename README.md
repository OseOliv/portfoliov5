# Oseas Oliveira's Portfolio

This project is a personal portfolio website built with Angular. It showcases my skills, projects, and professional experience as a software developer.

## 📋 Overview

This portfolio website serves as a comprehensive presentation of my work and capabilities as a software developer. It features sections for about me, projects, technical skills, and professional experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works across devices
- **Project Showcase**: Display of personal and professional projects with links to GitHub
- **Skills & Experience**: Detailed information about technical skills and work experience
- **Modern UI**: Clean, professional interface with intuitive navigation

## 🛠️ Technology Stack

- **Framework**: Angular 19
- **Styling**: SCSS
- **Icons**: Font Awesome
- **Responsive Design**: Custom CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- NPM (v8 or later recommended)
- Angular CLI (v19.2.8)

### Installation

1. Clone this repository
```bash
git clone https://github.com/OseOliv/portfoliov5.git
cd portfoliov5
```

2. Install dependencies
```bash
npm install
```

### Development Server

To start a local development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Running with Docker

To run the project using Docker:

1. Build and start the container:
```bash
docker-compose up
```

2. The application will be available at `http://localhost:4200/`

3. To run in detached mode:
```bash
docker-compose up -d
```

4. To stop the container:
```bash
docker-compose down
```

**Note**: The Docker setup includes hot-reload, so any changes you make to the source files will automatically trigger a rebuild.

### Building for Production

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/portfolio` directory.

## 🧪 Testing

### Running Unit Tests

```bash
npm test
# or
ng test
```

### Running End-to-End Tests

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 📞 Contact

Oseas Oliveira - [GitHub](https://github.com/OseOliv)
