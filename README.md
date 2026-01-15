# Vite + React + TypeScript + Tailwind v4 + Mantine Boilerplate

This is a modern, opinionated boilerplate for building production-ready React applications. It combines the speed of Vite, the utility of Tailwind CSS v4, and the robust component library of Mantine.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (v6 for compatibility)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com/) (Alpha/Beta)
  - [Mantine UI](https://mantine.dev/) (Full suite installed)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📦 Features

- **Tailwind CSS v4** configured with the new Vite plugin (`@tailwindcss/vite`).
- **Mantine Provider** set up with all core styles and feature packages (Dates, Notifications, Charts, etc.).
- **Clean Structure**: Boilerplate code removed, ready for new features.
- **Type-Safe**: Full TypeScript configuration.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build for production:

```bash
pnpm run build
```

## 🧩 Included Mantine Packages

- `@mantine/core`: Core components and hooks
- `@mantine/hooks`: State and UI management hooks
- `@mantine/dates`: Date pickers and calendars
- `@mantine/notifications`: Notification system
- `@mantine/charts`: Recharts-based charts components
- `@mantine/modals`: Centralized modal management
- `@mantine/spotlight`: Overlay search (Cmd+K)
- And more (`tiptap`, `carousel`, `dropzone`...)

## 📝 Notes

- **Tailwind v4**: This project uses the latest Tailwind CSS v4. Configuration is primarily handled in CSS (`@import "tailwindcss";`) and `vite.config.ts`, rather than `tailwind.config.js`.
- **Mantine**: Use Mantine components for complex interactive UI elements and Tailwind for layout and atomic styling. They work great together!
