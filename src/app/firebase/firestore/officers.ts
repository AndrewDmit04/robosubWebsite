
import firebase_app from "@/app/firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

interface OfficerInfo {
    id: string;
    name: string;
    title: string;
    imageURL: string;
  }

export const fetchAllOfficers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "officers"));
        const fetchedOfficers: OfficerInfo[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as OfficerInfo[];

        // Sort officers if needed
        const sortedOfficers = fetchedOfficers.sort((a, b) => {
          if (a.title === "President") return -1;
          if (b.title === "President") return 1;
          if (a.title === "Vice President") return -1;
          if (b.title === "Vice President") return 1;
          return 0; // Keep the rest in their original order
        });
        return sortedOfficers;

      } catch (error) {
        console.error("Error fetching officers:", error);
      } 
    }
