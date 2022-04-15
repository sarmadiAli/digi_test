import Footer from "../footer";
import Header from "../header";

export default function index({children}) {
  return (
   <div style={{
     position:'relative',
   }}>
   <Header />
   {children}
   <Footer />
   </div>
  )
}
