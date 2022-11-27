export function dragElement(element, header = null) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const drag_handle = header || element;
    drag_handle.event('mousedown',dragMouseDown)
    .style('cursor','move')
  
    function dragMouseDown(e) {
      if(e.button !== 0) return
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      element
      .style('top',(element.get_property('offsetTop') - pos2) + "px")
      .style('left',(element.get_property('offsetLeft') - pos1) + "px")
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

