export function resizeElement(element, minW = 100, minH = 100, size = 20)
{
    MakeTopResizable()
    MakeBottomResizable()
    MakeLeftResizable()
    MakeRightResizable()

    MakeTopLeftResizable()
    MakeTopRightResizable()
    MakeBottomLeftResizable()
    MakeBottomRightResizable()

    function MakeTopResizable()
    {
      const top = <div></div>

      top.style('width', '100%')
        .style('height', size + 'px')
        .style('backgroundColor', 'transparent')
        .style('position', 'absolute')
        .style('top', - (size/2) + 'px')
        .style('left', '0px')
        .style('cursor', 'n-resize')
  
        .event('mousedown',resizeYNegative())
        
        .parent(element)
    }
    
    function MakeBottomResizable()
    {
      const bottom = <div></div>
      bottom.style('width', '100%')
        .style('height', size + 'px')
        .style('backgroundColor', 'transparent')
        .style('position', 'absolute')
        .style('bottom', - (size/2) + 'px')
        .style('left', '0px')
        .style('cursor', 'n-resize')
  
        .event('mousedown',resizeYPositive())
  
        .parent(element)
    }

    function MakeLeftResizable()
    {
      const left = <div></div>
      left.style('width', size + 'px')
      .style('height', '100%')
      .style('backgroundColor', 'transparent')
      .style('position', 'absolute')
      .style('top', '0px')
      .style('left', - (size/2) + 'px')
      .style('cursor', 'e-resize')

      .event('mousedown',resizeXNegative())

      .parent(element)
    }

    function MakeRightResizable()
    {
      const right = <div></div>
      right.style('width',size + 'px')
      .style('height','100%')
      .style('backgroundColor','transparent')
      .style('position','absolute')
      .style('top','0px')
      .style('right',- (size/2) + 'px')
      .style('cursor','e-resize')

      .event('mousedown',resizeXPositive())

      .parent(element)
    }

    function MakeTopLeftResizable()
    {
      const corner1 = <div></div>
      corner1.style('width',size + 'px')
      .style('height',size + 'px')
      .style('backgroundColor','transparent')
      .style('position','absolute')
      .style('top',- (size/2) + 'px')
      .style('left',- (size/2) + 'px')
      .style('cursor','nw-resize')
      
      .event('mousedown',resizeXNegative())
      .event('mousedown',resizeYNegative())
      
      .parent(element)
    }

    function MakeTopRightResizable()
    {
      const corner2 = <div></div>
      corner2.style('width', size + 'px')
      .style('height', size + 'px')
      .style('backgroundColor', 'transparent')
      .style('position', 'absolute')
      .style('top', - (size/2) + 'px')
      .style('right', - (size/2) + 'px')
      .style('cursor', 'ne-resize')

      .event('mousedown',resizeXPositive())
      .event('mousedown',resizeYNegative())

      .parent(element)
    }


    function MakeBottomLeftResizable()
    {
      const corner3 = <div></div>
      corner3.style('width', size + 'px')
      .style('height', size + 'px')
      .style('backgroundColor', 'transparent')
      .style('position', 'absolute')
      .style('bottom', - (size/2) + 'px')
      .style('left', - (size/2) + 'px')
      .style('cursor', 'sw-resize')

      .event('mousedown',resizeXNegative())
      .event('mousedown',resizeYPositive())

      .parent(element)
    }

    function MakeBottomRightResizable()
    {
      const corner4 = <div></div>
      corner4.style('width', size + 'px')
      .style('height', size + 'px')
      .style('backgroundColor', 'transparent')
      .style('position', 'absolute')
      .style('bottom', - (size/2) + 'px')
      .style('right', - (size/2) + 'px')
      .style('cursor', 'se-resize')

      .event('mousedown',resizeXPositive())
      .event('mousedown',resizeYPositive())

      .parent(element)
    }

    
    function resizeXPositive()
    {
        let offsetX
        function dragMouseDown(e) {
            if(e.button !== 0) return
            e = e || window.event;
            e.preventDefault();
            const {clientX} = e;
            offsetX = clientX - element.get_property('offsetLeft') - element.get_computed_style('width');
            document.addEventListener('mouseup', closeDragElement)
            document.addEventListener('mousemove', elementDrag)
          }
        
          function elementDrag(e) {
                const {clientX} = e;
                let x = clientX - element.get_property('offsetLeft') - offsetX
                if(x < minW) x = minW;
                element.style('width',  x + 'px');
          }
        
          function closeDragElement() {
            document.removeEventListener("mouseup", closeDragElement);  
            document.removeEventListener("mousemove", elementDrag);
          }
        return dragMouseDown
    }

    function resizeYPositive()
    {
        let offsetY
        function dragMouseDown(e) {
            if(e.button !== 0) return
            e = e || window.event;
            e.preventDefault();
            const {clientY} = e;
            offsetY = clientY - element.get_property('offsetTop') -  element.get_computed_style('height');
    
            document.addEventListener('mouseup',closeDragElement)
            document.addEventListener('mousemove',elementDrag)
          }
        
          function elementDrag(e) {
                const {clientY} = e;
                let y =  clientY - element.get_property('offsetTop') - offsetY;
                if(y < minH) y = minH;
                element.style('height', y + 'px');
          }
        
          function closeDragElement() {
            document.removeEventListener("mouseup", closeDragElement);  
            document.removeEventListener("mousemove", elementDrag);
          }
        return dragMouseDown
    }

    function resizeXNegative()
    {
        let offsetX
        let startX
        let startW
        let maxX
        function dragMouseDown(e) {
            if(e.button !== 0) return
            e = e || window.event;
            e.preventDefault();
            const {clientX} = e;
            startX = element.get_computed_style('left')
            startW = element.get_computed_style('width')
            offsetX = clientX - startX;
            maxX = startX + startW - minW
    
            document.addEventListener('mouseup',closeDragElement)
            document.addEventListener('mousemove',elementDrag)
          }
        
          function elementDrag(e) {
                const {clientX} = e;
                let x = clientX - offsetX
                let w = startW + startX - x
                if(w < minW) w = minW;
                if(x > maxX) x = maxX;
                element.style('left', x + 'px')
                       .style('width', w + 'px');
          }
        
          function closeDragElement() {
            document.removeEventListener("mouseup", closeDragElement);  
            document.removeEventListener("mousemove", elementDrag);
          }
        return dragMouseDown
    }

    function resizeYNegative()
    {
        let offsetY
        let startY
        let startH
        let maxY
        function dragMouseDown(e) {
            if(e.button !== 0) return
            e = e || window.event;
            e.preventDefault();
            const {clientY} = e;
            startY = element.get_computed_style('top')
            startH = element.get_computed_style('height')
            offsetY = clientY - startY;
            maxY = startY + startH - minH 
    
            document.addEventListener('mouseup',closeDragElement,false)
            document.addEventListener('mousemove',elementDrag,false)
          }
        
          function elementDrag(e) {
                const {clientY} = e;
                let y =  clientY - offsetY
                let h = startH + startY - y
                if(h < minH) h = minH;
                if(y > maxY) y = maxY;
                element.style('top', y + 'px')
                    .style('height', h + 'px')
          }
        
          function closeDragElement() {
            document.removeEventListener("mouseup", closeDragElement);  
            document.removeEventListener("mousemove", elementDrag);
          }
        return dragMouseDown
    }
}