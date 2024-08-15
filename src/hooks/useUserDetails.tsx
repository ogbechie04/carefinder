import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../onAuthStateChanged";
import auth, { db } from "../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

interface UserDetails {
    firstName: string;
    avatarURL: string;
    role: string;
    email: string
  }

function useUserDetails() {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const { user } = useContext(AuthContext) ?? {};

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data() as UserDetails);
            console.log(docSnap.data());
          } else {
            console.log("User is not logged in");
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
      fetchUserData();
    } else {
      setUserDetails(null);
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut(auth);
    setUserDetails(null); // Clear user details on sign out
  };

  return {userDetails, handleSignOut}
}

export default useUserDetails