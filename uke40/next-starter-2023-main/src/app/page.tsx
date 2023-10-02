import ProductList from "@/components/ProductList";

const products = [
    {id: "ab1", name: "Test 1", price: 50.5, category: "ost", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus dolor justo, non dignissim velit viverra sed. Etiam lobortis ut nisi sed sollicitudin. Quisque maximus dolor nec ante tempor, ac semper mi elementum."},
    {id: "dc3", name: "Test 2", price: 23.2, category: "ost", description: "Nam non tristique enim. Etiam ut turpis porttitor, lacinia diam sit amet, porta ex. Mauris dapibus, nisl eu mattis posuere, purus eros lobortis neque, eu aliquet justo velit ac augue. "}
]

export default function Home() {
  return (
  <div>
  <ProductList products={products}  />
  </div>)
}
