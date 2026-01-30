const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

// Initialize Firebase Admin
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
});

// Firestore reference
const db = admin.firestore();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/**
 * HEALTH CHECK
 */
app.get("/", (req, res) => {
  res.send("🔥 Firebase Express API is running");
});

/**
 * CREATE - Add a new user
 * POST /users
 */
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "name and email are required"
      });
    }

    const docRef = await db.collection("users").add({
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({
      id: docRef.id,
      message: "User created successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * READ ALL - Get all users
 * GET /users
 */
app.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * READ ONE - Get user by ID
 * GET /users/:id
 */
app.get("/users/:id", async (req, res) => {
  try {
    const doc = await db.collection("users").doc(req.params.id).get();

    if (!doc.exists) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json({
      id: doc.id,
      ...doc.data()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * UPDATE - Update user
 * PUT /users/:id
 */
app.put("/users/:id", async (req, res) => {
  try {
    const { name, email } = req.body;

    const userRef = db.collection("users").doc(req.params.id);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    await userRef.update({
      ...(name && { name }),
      ...(email && { email }),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({
      message: "User updated successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE - Delete user
 * DELETE /users/:id
 */
app.delete("/users/:id", async (req, res) => {
  try {
    const userRef = db.collection("users").doc(req.params.id);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    await userRef.delete();

    res.json({
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export API as Firebase Cloud Function
exports.api = functions.https.onRequest(app);
