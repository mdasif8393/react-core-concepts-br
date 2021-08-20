    import logo from './logo.svg';
    import './App.css';

    function App() {
      const nayoks = ['Rajjak', 'Anomgir', 'Manna', 'Joshim', ];
      const products = [
        {name: 'Ball', price:'$120'},
          {name: 'Pen', price: '$20'},
          {name: 'Mouse', price: '$200'},
      ]

      
      return (
        <div className="App">
          <header className="App-header">
            <ul>
              {
                nayoks.map(nayok => <li>{nayok}</li>)
              }
              {
                products.map(product => <li>{product.name}</li>)
              }
            </ul>
              {
                products.map(p => <Product product={p}> </Product>)
              }
          </header>
        </div>
      );
    }

    

    function Product(props){
      const {name, price} = props.product;

      const style1 = {
        backgroundColor: 'gray',
        height: '200px',
        width: '200px',
        borderRadius: '10px',
        float: 'left',
        margin: '10px',
      }
      return(
        <div style={style1}>
          <h3>Name: {name}</h3>
          <h2>Price: {price}</h2>
          <button>Bye Now</button>
        </div>
      )
    }

    export default App;
