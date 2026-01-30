// Import the Express framework to create our route map
import express from 'express';
// Import the Controller (the Brain) that should handle this specific route
import { handleRewrite } from '../controllers/rewriteController.js';

// Create a new "Router" object to hold our specific AI-related paths
const router = express.Router();

// Map the URL "/rewrite" to our handleRewrite function using the POST method
// This means when someone hits http://localhost:5000/api/rewrite, the Brain wakes up
router.post('/rewrite', handleRewrite);

// Export the router map so the main server.js file can use it
export default router;