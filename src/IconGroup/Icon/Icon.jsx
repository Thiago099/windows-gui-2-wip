import './icon.css'
const datas = []
export default function Icon({name,type})
{
    const data = effect({selected:false})
    datas.push(data)

    const item = 
    <div class="item">
        <div class="item-thumbnail"></div>
        <div class="item-title">{name}</div>
    </div>

    item
    .class("item-selected",()=>data.selected)
    .class(type)
    .effect(data)
    .event("click",()=>{
        if(!data.selected)
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