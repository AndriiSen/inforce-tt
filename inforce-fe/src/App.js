import { Header } from "./containers/Header";
import { ProductsList } from "./containers/ProductsList";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductsList />
    </div>
  );
};
