import {} from "react";
import Navigation from "./src/config/navigation/Navigation";
import { app, auth, db, storage } from "./src/config/util/firebaseConnection";

export default function App() {
  return <Navigation />;
}
