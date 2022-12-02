import "./IconGroup.css"
import Icon from './icon/icon'

export default function IconGroup()
{
    const window = <div></div>
    const menu = <div parent={window} class="icon-container"></div>
    
    const data = effect({type:"block"})
    
    const style = (
    <select>
        {["block","list"].map(type=><option value={type}>{type}</option>)}
    </select>
    )
    .parent(menu)
    .event("change",e=>{
        data.type = e.target.value
    })
    
    const container = <div parent={window} class="icon-container"></div>
    
    for(var i=0;i<10;i++){
        <Icon 
            parent={container} 
            name={"icon "+i} 
            type={() => "item-"+data.type} 
            effect={data}
        />   
    }
    return window
}