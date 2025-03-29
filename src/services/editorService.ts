import * as vscode from 'vscode';
import { type SetActivity } from "@xhayper/discord-rpc";

export class EditorService {
    getEditorState(): SetActivity {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor?.document) {
            return {
                details: 'Not in a file',
                state: 'Idle'
            };
        }

        const fileName = editor.document.fileName?.split(/[\\/]/).pop() || 'Unknown';
        const language = editor.document.languageId || 'Unknown';
        
        let userState = 'Viewing';
        if (editor.selection && !editor.selection.isEmpty) {
            userState = 'Editing';
        } else if (editor.document.isDirty) {
            userState = 'Editing';
        }

        const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.name || 'Unknown Project';
        const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);
        const problemsCount = diagnostics.length;

        const currentLine = editor.selection.active.line + 1;
        const totalLines = editor.document.lineCount;

        return {
            details: `In ${workspaceFolder} - ${problemsCount} problems`,
            state: `${userState} ${fileName}:${currentLine}:${totalLines}`
        };
    }
} 