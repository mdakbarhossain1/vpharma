import { Bounce } from "react-awesome-reveal";
import Title from "../../components/Form/Title";
import useFetch from "../../hook/useFetch"
import Product from "../Home/Products/Product";

const Products = () => {
  const data = useFetch('products.json');


  return (
    <section className="max-w-screen-xl py-24 mx-auto px-6">
      <Title title="Products" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
        {data.map(product => (
          <Bounce key={product.id}>
            <Product product={product} />
          </Bounce>
        ))}
      </div>
    </section>
  )
}

export default Products