import Header from "../header";

export default function index({children}) {
  return (
   <>
   <Header />
   {children}
   </>
  )
}
