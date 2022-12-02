import "./IconGroup.css"
import Icon from './icon/icon'

export default function IconGroup()
{
    const ref = {}
    const container = 
    <div>
        <div class="icon-container" id="menu" ref={ref}></div>
        <div class="icon-container" id="content" ref={ref}></div>
    </div>


    const data = effect({type:"block"})
    
    const style = (
    <select>
        {["block","list"].map(type=><option value={type}>{type}</option>)}
    </select>
    )
    .parent(ref.menu)
    .model(
         ()=>data.type,
        (value)=>data.type=value
    )
    
    
    for(var i=0;i<10;i++){
        <Icon 
            parent={ref.content} 
            name={"icon "+i} 
            type={() => "item-"+data.type} 
            effect={data}
        />   
    }
    return container
}