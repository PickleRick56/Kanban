
import ShowDesk from './ShowDesk';

import { Routes , Route} from 'react-router-dom';





export default function App (){
 
return(
<>

  
  <Routes>

<Route path={`/`} element={<ShowDesk/>}/>
<Route path={`/1`} element={<h1>Cat is good </h1>}/>
  </Routes>

</>
)
}