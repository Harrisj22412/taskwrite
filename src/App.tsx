import { client } from "./utils/appwrite";

const App = () => {
    console.log("Appwrite", client);
    return <div className="text-purple-500 text-center font-bold text-      5xl">App</div>;
};

export default App;