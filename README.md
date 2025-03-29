# Cursor IDE Discord Rich Presence

Show your Cursor IDE activity in Discord with Rich Presence integration. Track your coding sessions, file changes, and project status in real-time.

## Features

- 🎮 Real-time Discord Rich Presence integration
- 📝 Shows current file being edited
- 📊 Displays project name and workspace information
- 🔍 Shows number of problems (errors, warnings)
- 📈 Tracks current line and total lines
- ⚡ Updates automatically when switching files
- 🔄 Configurable update interval
- 🎨 Customizable presence display

## Requirements

- Discord desktop app installed
- Cursor IDE
- Node.js and npm (for development)

## Extension Settings

This extension contributes the following settings:

* `cursor-ide-rpc.enabled`: Enable/disable Discord Rich Presence

## Usage

1. Install the extension
2. Make sure Discord is running
3. Open any project in Cursor IDE
4. Your Discord status will automatically update to show what you're working on

## Development

### Prerequisites

- Node.js and npm
- Discord desktop app
- Cursor IDE

### Building

```bash
# Install dependencies
npm install

# Compile the extension
npm run compile

# Watch for changes
npm run watch
```

### Testing

```bash
# Run tests
npm test

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Preview Image

<img src="https://cdn.victims.lol/uploads/files/prints/DiscordPTB_cxKFlkFkeo-1743254435482-123976143.png">

## Acknowledgments

- [@xhayper/discord-rpc](https://github.com/xhayper/discord-rpc) for the Discord RPC client
- [VSCord](https://github.com/leonardssh/vscord) for inspiration
