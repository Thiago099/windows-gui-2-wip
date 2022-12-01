import './iconGroup.css'
const datas = []
export default function Icon({name,type})
{
    const data = effect({selected:false})
    datas.push(data)

    const item = 
    <div class={()=>"item item-"+type()}>
        <div class="item-thumbnail"></div>
        <div class="item-title">{name}</div>
    </div>

    item
    .class("item-selected",()=>data.selected)
    .effect(data)
    .event("click",()=>{
        if(data.selected)
        {
            data.selected = false
        }
        else
        {
            for(const data of datas)
            {
                data.selected = false
            }
            data.selected = true
        }
    })
    return item
}