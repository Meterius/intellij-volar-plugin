package com.github.meterius.lsp;

import com.intellij.openapi.application.PreloadingActivity;
import com.intellij.openapi.progress.ProgressIndicator;
import org.wso2.lsp4intellij.IntellijLanguageClient;
import org.wso2.lsp4intellij.client.languageserver.serverdefinition.ProcessBuilderServerDefinition;

public class LanguagePreloadingActivity extends PreloadingActivity {
    public void preload(ProgressIndicator indicator) {
        ProcessBuilder process = new ProcessBuilder("C:\\Program Files\\nodejs\\node.exe", "C:\\Users\\jonah\\WebstormProjects\\intellij-volar-plugin\\run-vls.js");
        IntellijLanguageClient.addServerDefinition(new ProcessBuilderServerDefinition("vue", process));
    }
}