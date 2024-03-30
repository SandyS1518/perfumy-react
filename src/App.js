import Navbar from "./components/navbar.js"
import Search from "./components/search.js"
import Product from "./components/product.js"
import Footer from "./components/footer.js"
import About from "./components/about.js"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    )
}
export default App