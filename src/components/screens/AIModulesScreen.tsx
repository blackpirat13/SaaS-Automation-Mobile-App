import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";

type AIModulesScreenProps = {
    navigation: FrameNavigationProp<any, "AIModules">,
};

export function AIModulesScreen({ navigation }: AIModulesScreenProps) {
    return (
        <scrollView className="page">
            <stackLayout className="p-4">
                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">OpenAI Integration</label>
                    <label className="text-light opacity-70 mb-4">GPT-4 and DALL-E Services</label>
                    <button className="btn-primary" text="Configure" />
                </stackLayout>

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">IBM Watson</label>
                    <label className="text-light opacity-70 mb-4">Natural Language Processing</label>
                    <button className="btn-primary" text="Configure" />
                </stackLayout>

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Google Cloud AI</label>
                    <label className="text-light opacity-70 mb-4">Machine Learning Services</label>
                    <button className="btn-primary" text="Configure" />
                </stackLayout>

                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Custom Models</label>
                    <label className="text-light opacity-70 mb-4">Deploy Your Own AI Models</label>
                    <button className="btn-primary" text="Add Model" />
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}