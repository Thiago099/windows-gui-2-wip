import "./main.css"



import Icon from '@/components/IconGroup/IconGroup'

const menu = <div parent={document.body} class="icon-container"></div>

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


const container = <div parent={document.body} class="icon-container"></div>

for(var i=0;i<10;i++){
    <Icon 
        parent={container} 
        name={"icon "+i} 
        type={() => data.type} 
        effect={data}
    />   
}