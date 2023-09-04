import { Footer } from "../Footer";
import { Header } from "../header";

export const DefaultTemplate = ({ children }) => {
  return (
    <div className="everything">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
