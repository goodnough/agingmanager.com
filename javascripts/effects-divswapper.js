Effect.divSwap = function(element,container){
    var div = document.getElementById(container);
    var nodeList = div.childNodes;
    var queue = Effect.Queues.get('menuScope');

    if(queue.toArray().length<1){
        if(Element.visible(element)==false){
            for(i=0;i<nodeList.length;i++){
                if(nodeList.item(i).nodeName=="DIV" && nodeList.item(i).id!=element){
                    if(Element.visible(nodeList.item(i))==true){
                        Effect.SlideUp(nodeList.item(i),{duration:.75,queue:{position:'end',scope:'menuScope',limit:2}})
                    }
                }
            }
            Effect.SlideDown(element,{duration:.75,queue:{position:'end',scope:'menuScope',limit:2}})
       }
   }
}