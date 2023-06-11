import Menu from './components/Menu';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faShrimp } from '@fortawesome/free-solid-svg-icons'

const shrimp = <FontAwesomeIcon icon={faShrimp} />

const veggie = <FontAwesomeIcon icon={faLeaf} /> 

function App() {

  const menuItems = [{
    id: 1,
    name: "Turkey",
    description: "Iceberg|  Tomato|  Provolone|  Mayo|  Shaved Turkey|  Artisan Bun",
    price: 14,
    pic: './src/images/turkey.jpg'
},
{
    id: 2,
    name: "Smoked Meat",
    description: "Crispy Shoestring Potatoes| Dijonnaise| 24-Hour Smoked Brisket| Rye",
    price: 16,
    pic: './Jimmys-Sandwiches/src/images/smoked-meat.jpg'
},
{
    id: 3,
    name: "Veggie",
    description: "Arugula| Roasted Beets| Grilled Onions| Roasted Garlic Aioli| Artisan Bun",
    price: 11,
    icon: veggie,
    pic: './Jimmys-Sandwiches/src/images/veggie.jpg'
},
{
    id: 4,
    name: "Reuben",
    description: "Swiss Cheese| Sauerkraut| Housemade Russian Dressing| Corned Beef| Rye",
    price: 15,
    pic: './Jimmys-Sandwiches/src/images/reuben.jpg'
},
{
    id: 5,
    name: "Shrimp Po' Boy",
    description: "Coleslaw| Tartar| Garlic Shrimp| Soft baguette",
    price: 15,
    icon: shrimp,
    pic: './Jimmys-Sandwiches/src/images/poboi.jpg'
},
{
    id: 6,
    name: "Meatball",
    description: "Provolone| Marinara| Roasted Rep Peppers| 6 Oz Meatballs| Toasted Baguette",
    price: 13,
    pic: './Jimmys-Sandwiches/src/images/meatball.jpg'
}]

  return (
    <>
      <div className='app-wrapper'>
        <Nav />
        <Routes>
          <Route path='/' element={<Menu menuItems={menuItems}/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery menuItems={menuItems}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
