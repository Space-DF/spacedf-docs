# SpaceDF Documentation

Welcome to the official documentation for SpaceDF - a comprehensive IoT platform for distributed fleet management and asset tracking.

## 🚀 About SpaceDF

SpaceDF is a powerful IoT platform that supports multiple protocols and device types for asset tracking, monitoring, and management. Whether you're building fleet tracking systems, smart buildings, or smart city solutions, SpaceDF provides the tools and templates you need.

### Key Features

- **Multi-Protocol Support**: LoRaWAN, HTTP/HTTPS, MQTT, WebSocket, Socket.IO, CoAP, LwM2M, SNMP
- **Platform Integration**: ChirpStack, The Things Network, Helium, and custom platforms
- **Real-time Location Tracking**: RSSI-based trilateration and positioning
- **Multi-tenant Architecture**: Organization-based access control and data isolation
- **Digital Twins & Dashboards**: Interactive 2D/3D visualizations
- **Comprehensive APIs**: REST APIs with JavaScript/TypeScript SDK

## 📚 Documentation

This repository contains the source code for the SpaceDF documentation website, built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).

Visit the live documentation at: [https://docs.spacedf.com](https://docs.spacedf.com)

## 🛠 Development Setup

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Space-DF/spacedf-docs.git
cd spacedf-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production version
- `npm run start` - Start the production server
- `npm run postbuild` - Generate search index with Pagefind

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── _components/        # Shared React components
│   │   ├── blog/              # Blog posts and release notes
│   │   ├── community/         # Community pages
│   │   ├── docs/              # Documentation pages
│   │   ├── showcase/          # Showcase pages
│   │   ├── troubleshooting/   # Troubleshooting guides
│   │   └── layout.jsx         # Root layout component
│   ├── components/            # Reusable components
│   └── content/               # MDX content files
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## ✍ Contributing

We welcome contributions to improve the documentation! Here's how you can help:

### Making Changes

1. Fork this repository
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-improvement
   ```
3. Make your changes to the MDX files in `src/content/` or React components
4. Test your changes locally:
   ```bash
   npm run dev
   ```
5. Commit and push your changes:
   ```bash
   git commit -m "docs: improve getting started guide"
   git push origin feature/your-improvement
   ```
6. Open a Pull Request

### Content Guidelines

- Use clear, concise language
- Include code examples where helpful
- Test all code snippets and links
- Follow the existing structure and formatting
- Add screenshots for UI-related documentation

### File Conventions

- Documentation pages: `src/content/*.mdx`
- Blog posts: `src/app/blog/[version]/page.mdx`
- Component documentation: Include inline comments
- Images: Store in `public/` directory

## 🔗 Related Links

- [SpaceDF Platform](https://spacedf.com) - Main platform website
- [GitHub Organization](https://github.com/Space-DF) - All SpaceDF repositories
- [Community Forum](https://docs.spacedf.com/community) - Ask questions and get help
- [Discord Server](https://discord.gg/HxCTyMCzuK) - Real-time community chat

## 📋 Release Notes

See our [blog section](https://docs.spacedf.com/blog) for the latest release notes and announcements.

**Latest Release**: [v2025.12.19](https://docs.spacedf.com/blog/v2025.12.19) - Initial Release

## 📄 License

This documentation is licensed under the Apache License 2.0. See the individual repository licenses for SpaceDF platform components.

## 🏢 About Digital Fortress

SpaceDF is developed by [Digital Fortress](https://df.technology), a technology company focused on IoT and distributed systems solutions.

---

For technical support or questions about the platform, visit our [support page](https://docs.spacedf.com/support) or join our [Discord community](https://discord.gg/HxCTyMCzuK).