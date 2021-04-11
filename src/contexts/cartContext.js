import * as React from 'react'

const cartContext = React.createContext()
const items = [
    { id:'0', quantity:'0'},
    { id:'1',  quantity:'0'}
  ];  


const [cart, setCart] = useState(items);

function addItem(item, quantity) {

  
}

function removeItem(id) {

  
}

function clear() {

  
}

function isInCart(id) {

  
}

export default cartContext;