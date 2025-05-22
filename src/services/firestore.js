import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const db = getFirestore();

export async function salvarNomeUsuario(uid, nome, email) {
  await setDoc(doc(db, "usuarios", uid), {
    nome: nome,
    email: email,
  });
}

export async function buscarNomeUsuario(uid) {
  const docRef = doc(db, "usuarios", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().nome;
  } else {
    return null;
  }
}