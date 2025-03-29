import * as vscode from 'vscode';
import { DiscordService } from './services/discordService';
import { EditorService } from './services/editorService';
import { UPDATE_INTERVAL } from './config/constants';

let discordService: DiscordService;
let editorService: EditorService;
let updateInterval: NodeJS.Timeout;

export async function activate(context: vscode.ExtensionContext) {
    console.log('Your "vscode-discord-rpc" extension is now active!');

    discordService = new DiscordService();
    editorService = new EditorService();

    try {
        await discordService.initialize();
        updatePresence();
    } catch (error) {
        vscode.window.showErrorMessage('Failed to connect to Discord RPC.');
    }

    vscode.window.onDidChangeActiveTextEditor(updatePresence);
    updateInterval = setInterval(updatePresence, UPDATE_INTERVAL);

    let disposable = vscode.commands.registerCommand('cursor-ide-rpc.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from Discord RPC!');
    });

    context.subscriptions.push(disposable);
}

async function updatePresence() {
    const activity = editorService.getEditorState();
    await discordService.updatePresence(activity);
}

export async function deactivate() {
    clearInterval(updateInterval);
    await discordService.clearPresence();
    discordService.destroy();
}