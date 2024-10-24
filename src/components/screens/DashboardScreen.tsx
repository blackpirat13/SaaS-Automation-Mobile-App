import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";

type DashboardScreenProps = {
    navigation: FrameNavigationProp<any, "Dashboard">,
};

const ProgressBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
    const percentage = (value / maxValue) * 100;
    return (
        <gridLayout columns="*, auto" className="mb-2">
            <stackLayout col="0" className="mr-2" backgroundColor="rgba(255,255,255,0.1)" borderRadius={4}>
                <stackLayout 
                    width={`${percentage}%`}
                    height={8}
                    backgroundColor="#00a3ff"
                    borderRadius={4}
                />
            </stackLayout>
            <label col="1" className="text-light">{`${percentage}%`}</label>
        </gridLayout>
    );
};

export function DashboardScreen({ navigation }: DashboardScreenProps) {
    return (
        <scrollView className="page">
            <stackLayout className="p-4">
                <gridLayout columns="*, *" rows="auto, auto" className="mb-4">
                    <stackLayout className="card col-0" onTap={() => navigation.navigate("AIModules")}>
                        <label className="text-xl font-bold text-light">AI Modules</label>
                        <label className="text-light opacity-70">Manage AI Services</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-1" onTap={() => navigation.navigate("Payments")}>
                        <label className="text-xl font-bold text-light">Payments</label>
                        <label className="text-light opacity-70">Crypto Transactions</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-0 row-1" onTap={() => navigation.navigate("Assistant")}>
                        <label className="text-xl font-bold text-light">Assistant</label>
                        <label className="text-light opacity-70">AI Support</label>
                    </stackLayout>
                    
                    <stackLayout className="card col-1 row-1">
                        <label className="text-xl font-bold text-light">Analytics</label>
                        <label className="text-light opacity-70">Resource Usage</label>
                    </stackLayout>
                </gridLayout>
                
                <stackLayout className="card">
                    <label className="text-xl font-bold text-light mb-2">Resource Monitor</label>
                    <ProgressBar value={75} maxValue={100} />
                    <label className="text-light opacity-70">CPU Usage: 75%</label>
                    
                    <ProgressBar value={45} maxValue={100} />
                    <label className="text-light opacity-70">Memory Usage: 45%</label>
                    
                    <ProgressBar value={60} maxValue={100} />
                    <label className="text-light opacity-70">Storage Usage: 60%</label>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}