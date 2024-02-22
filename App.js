import {} from "react";
import Navigation from "./src/config/navigation/Navigation";
import { app, auth, db } from "./src/config/util/firebaseConnection";

export default function App() {
  return <Navigation />;
}
