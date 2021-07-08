import { AppStateProvider } from '../AppGlobalState'


import AllProductsComponent from '../components/AllProductsComponent';
import CheckOutReciept from '../components/CheckOutReciept';
import NavBar from '../components/NavBar'

function Home() {



  return(
    <div>
    <AppStateProvider>
      <NavBar></NavBar>
      <AllProductsComponent></AllProductsComponent>
      <CheckOutReciept></CheckOutReciept>
      
  
</AppStateProvider>
    </div>
 
  )}

export default Home



