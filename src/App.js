
import ShowDesk from './ShowDesk';

import { Routes , Route} from 'react-router-dom';





export default function App (){
 
return(
<>

  
  <Routes>

<Route path={`/`} element={<ShowDesk/>}/>

  </Routes>

</>
)
}