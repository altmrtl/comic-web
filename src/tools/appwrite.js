import { Client, Functions } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your Project ID

const functions = new Functions(client);

export async function getComics(searchTerm) {
    console.log("Function ID:", import.meta.env.VITE_APPWRITE_COMIC_VINE_FUNCTION_ID);
    console.log("Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);


    try {
        const execution = await functions.createExecution(
            import.meta.env.VITE_APPWRITE_COMIC_VINE_FUNCTION_ID, // Your Function ID
            JSON.stringify({ q: searchTerm }) // Pass search term
        );

        // Execution response is a string — parse it
        return JSON.parse(execution.responseBody);
    } catch (err) {
        console.error("Error fetching comics:", err);
        return [];
    }
}