import { db } from "../services/firebase";

const fetchUserName = async () => {
    try {
        const query = await db
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
        const data = query && query.docs ? await query.docs[0].data() : null;
        return 
    } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
    }
  };