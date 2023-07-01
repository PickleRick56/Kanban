export default function Footer ( {prop}){

  
    return(
    <>
    
      
     
      <div>{`Active tasks:< ${prop[1]=== undefined || prop[2]=== undefined ? "NO": prop[1].length + prop[2].length}> Finished tasks: <${prop[3]=== undefined? "NO": prop[3].length}>  Kanban board by <NAME>, <YEAR>`} </div>
    </>
    )
    }