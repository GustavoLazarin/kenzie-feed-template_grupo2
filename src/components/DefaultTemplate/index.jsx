import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemplate = ({children}) => {
  return (
    <div className="everything">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
