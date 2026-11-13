import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// You'll need to generate a private key from Firebase Project Settings > Service Accounts
// and store the JSON values in your .env.local
const serviceAccount = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

export const customInitApp = () => {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert(serviceAccount),
    });
  }
};

customInitApp();
export const adminDb = getFirestore();