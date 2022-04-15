import Main from "../components/main";
import ProductDetail from "../components/productDetail";
import RecommendedProducts from "../components/recommendedProducts.";
import Sellers from "../components/sellers";
import UserComment from "../components/userComment";

export default function Products() {
  return (
  <Main>
      <ProductDetail />
      <Sellers />
      <RecommendedProducts />
      <UserComment />
  </Main>
  )
}
