import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';
import {
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth';
import { db, auth, googleProvider } from './config';
import { handleFirestoreError, OperationType } from './error';
import { SchoolProfile } from '../types/curriculum';

export const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      // Save user record
      const userRef = doc(db, 'users', result.user.uid);
      await setDoc(
        userRef,
        {
          uid: result.user.uid,
          email: result.user.email || '',
          displayName: result.user.displayName || '',
          photoURL: result.user.photoURL || '',
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    }
    return result.user;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-Out Error:', error);
    throw error;
  }
};

export const subscribeToAuth = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const saveSchoolProfileToFirestore = async (
  userId: string,
  profile: SchoolProfile
): Promise<void> => {
  const path = `users/${userId}/profiles/main_profile`;
  try {
    const profileRef = doc(db, 'users', userId, 'profiles', 'main_profile');
    await setDoc(profileRef, {
      ...profile,
      userId,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path, auth);
  }
};

export const getSchoolProfileFromFirestore = async (
  userId: string
): Promise<SchoolProfile | null> => {
  const path = `users/${userId}/profiles/main_profile`;
  try {
    const profileRef = doc(db, 'users', userId, 'profiles', 'main_profile');
    const snap = await getDoc(profileRef);
    if (snap.exists()) {
      return snap.data() as SchoolProfile;
    }
    return null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path, auth);
  }
};

export interface SavedModul {
  id: string;
  userId: string;
  judul: string;
  bab: string;
  alokasi: string;
  elemen: string;
  tujuan: string;
  pemahamanBermakna: string;
  kearifanLokal: string;
  createdAt: string;
}

export const saveModulToFirestore = async (
  userId: string,
  modulData: Omit<SavedModul, 'userId' | 'createdAt'>
): Promise<void> => {
  const path = `users/${userId}/modul_ajar/${modulData.id}`;
  try {
    const modulRef = doc(db, 'users', userId, 'modul_ajar', modulData.id);
    await setDoc(modulRef, {
      ...modulData,
      userId,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path, auth);
  }
};

export const getSavedModulsFromFirestore = async (
  userId: string
): Promise<SavedModul[]> => {
  const path = `users/${userId}/modul_ajar`;
  try {
    const colRef = collection(db, 'users', userId, 'modul_ajar');
    const snap = await getDocs(colRef);
    const moduls: SavedModul[] = [];
    snap.forEach((docSnap) => {
      moduls.push(docSnap.data() as SavedModul);
    });
    return moduls;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path, auth);
  }
};
