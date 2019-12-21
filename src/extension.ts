import ru = require('convert-layout/ru');
import layouts = require('convert-layout')
import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {

	let replaceText = vscode.commands.registerCommand('extension.replaceText', () => {
		const textEditor = vscode.window.activeTextEditor;
		textEditor.edit((editBuilder) => {
			const document = textEditor.document;
			textEditor.selections.forEach((selection) => {
				const startPos = selection.start;
				const endPos = selection.end;
				const textRange = selection.with(startPos, endPos)
				const str = document.getText(textRange)
				vscode.window.showInformationMessage(str)
				const newStr = ru.toEn(str)
				editBuilder.replace(textRange, newStr);
			})
		})
	});


	context.subscriptions.push(replaceText);

}

// this method is called when your extension is deactivated
export function deactivate() { }