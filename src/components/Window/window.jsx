import './window.css'
import {dragElement} from './makeDragable'
import {resizeElement} from './makeResable'
export default function Window({title},children)
{
    const window = <div class="window"></div>
    window.property('onselectstart', () => false)

    const ref = {}

    const header = 
    <div class="header" parent={window}>
        <div class="title" >{title}</div>
        <div class="nav-button" id="closeButton" ref={ref}>×</div>
    </div>

    ref.closeButton.event('click', () => {
        window.remove()
    })
    ref.closeButton.event('mousedown', e => {
        e.stopPropagation()
    })

    const element = <div parent={window} class="content">{children}</div>
    dragElement(window, header);
    resizeElement(window); 

    return window
}
