import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const fruits = [
    {name: 'Kiwi', price: '$100'},
    {name: 'Custard Apple', price: '$200'},
    {name: 'Jackfruit', price: '$50'},
    {name: 'Black Berry', price: '$150'},
    {name: 'Water Melon', price: '$20'},
    {name: 'Strawberry', price: '$120'},
    {name: 'Grapes', price: '$40'}
  ];
  const heros = ['Salman Khan','Shahruk Khan','Amir Khan','Saif Ali Khan','Imran Hashmi','Ajay Devgan'];
  const products = [
    {name: 'Adobe Photoshop', price: '$90.99'},
    {name: 'Adobe Illustrator', price: '$68.99'},
    {name: 'Adobe Reader', price: '$6.99'},
    {name: 'Adobe Premier', price: '$249.99'}
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Developer</p>
        <Counter></Counter>
        <Users></Users>
        <ol>
          {
            fruits.map(fruit => <li>{fruit.name}</li>)
          }
        </ol>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
      </header>
    </div>
  );
}

function Counter() {
const[count, setCount] = useState(10);
// const handleIncrease = () => setCount(count + 1);
// {
//   const newCount = count + 1;
//   setCount(newCount);
// }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  // data load
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} Email: {user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid cyan',
    margin: '10px',
    borderRadius: '20px',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const {name, price} = props.product;
  // console.log(name, price);
  return(
    <div style = {productStyle}>
      <h3 style = {{backgroundColor: 'cyan', color: '#282C34', borderRadius: '5px'}}>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const PersonStyle = {
    border: '2px solid cyan',
    margin: '10px',
    borderRadius: '20px' 
  }

  return (
  <div style = {PersonStyle}>
    <h1 style = {{backgroundColor: 'cyan', color: '#282C34', borderRadius: '10px'}}>Hero: {props.name}</h1>
    <h3>Heroine of {props.name}: {props.heroine}</h3>
  </div>
  )
}

export default App;
