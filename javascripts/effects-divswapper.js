Effect.divSwap = function(element,container){
    var div = document.getElementById(container);
    var nodeList = div.childNodes;
    var queue = Effect.Queues.get('menuScope');

    if(queue.toArray().length<1){
        if(Element.visible(element)==false){
            for(i=0;i<nodeList.length;i++){
                if(nodeList.item(i).nodeName=="DIV" && nodeList.item(i).id!=element){
                    if(Element.visible(nodeList.item(i))==true){
                        Effect.Fade(nodeList.item(i),{duration:0,queue:{position:'end',scope:'menuScope',limit:2}});
                    }
                }
            }
            Effect.Appear(element,{duration:1,queue:{position:'end',scope:'menuScope',limit:2}});
       }
   }
}
