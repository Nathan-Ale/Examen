import { AuthProvider } from "@/contexts/AuthContext";
import { TaskProvider } from "@/contexts/TaskContext";
import { Stack } from "expo-router";


export default function RootLayout(){
    return(
        <TaskProvider>
            <AuthProvider>
                <Stack/>
            </AuthProvider>
        </TaskProvider>
    )
}