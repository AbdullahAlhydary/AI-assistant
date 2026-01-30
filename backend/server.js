// Import the core tools: Express for the server and CORS for security
import express from 'express';
import cors from 'cors';
// Import our config organizer to get the Port and other settings
import { config } from './src/config/index.js';
// Import our Route "Map" to tell the server which URLs exist
import rewriteRoutes from './src/routes/rewriteRoutes.js';

// Initialize the actual Express application
const app = express();

// --- Global Middleware (The Gatekeepers) ---

// Allow your Frontend (React) to talk to this Backend across different ports
app.use(cors());
// Automatically translate incoming JSON data into a format JavaScript understands
app.use(express.json());

// --- Connect the Layers ---

// Plug in our route map and prefix all paths with "/api" (e.g., /api/rewrite)
app.use('/api', rewriteRoutes);

// --- Simple Health Check ---

// A basic route to test if the server is "alive" when you visit it in a browser
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

// --- Start the Engine ---

// Tell the server to start listening for requests on our chosen port (5000)
app.listen(config.port, () => {
    console.log(`Professional Server running at http://localhost:${config.port}`);
});