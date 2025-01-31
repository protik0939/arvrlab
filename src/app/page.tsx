import Feed from "./(components)/Feed";
import Home from "./(components)/Home";

export default function HomeFunc() {
  return (
    <div className="overflow-hidden">
      <Feed />
      <Home />
    </div>
  );
}
