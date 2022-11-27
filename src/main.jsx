// import Window from "@/Window/window"


// const content = <Window title="Hello world" parent={document.body}>Hello world</Window>

import { areaSelectionTool } from "./area-selection/area-selection";


areaSelectionTool(document.body,()=>{})



import './style.css'

const datas = []
for(var i=0;i<10;i++){
    const data = effect({selected:false})
    datas.push(data)

    const item = 
    <div class="item">
        <div class="item-thumbnail"></div>
        <div class="item-title">Hello world</div>
    </div>

    item
    .class("item-selected",()=>data.selected)
    .parent(document.body)
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
}