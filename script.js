const caollapsibleBtns = document.querySelectorAll('.collapsible-icon');
const caollapsibleContents = document.querySelectorAll('.content');


caollapsibleBtns.forEach((btn, btnIdx)=>{
    btn.addEventListener('click', () =>{
        let icon = btn.firstElementChild;
        if(icon.classList.contains('fa-chevron-down')){
            caollapsibleContents.forEach((content, contentIdx)=>{
                if(btnIdx == 0){
                if(btnIdx == contentIdx){
                    icon.className = 'fa fa-chevron-up';
                    content.classList.add('content-show');
                    content.classList.add('true');
                    }
                }else if(btnIdx > 0 && btnIdx == contentIdx){
                    
                    var idxAnteiror = btnIdx-1;
                    var itemAnterior = document.getElementById(idxAnteiror);
                    if(itemAnterior.className == 'content content-show true'){
                        icon.className = 'fa fa-chevron-up';
                        content.classList.add('content-show');
                        content.classList.add('true');
                    }else{
                        icon.className = 'fa fa-chevron-down';
                        confirm('Você deve seguir a ordem de leitura da esquerda para direita!');
                    }
                }   
            })
        }else if(icon.classList.contains('fa-chevron-up')){
            caollapsibleContents.forEach((content, contentIdx)=>{
                if(btnIdx == 0){
                    if(btnIdx == contentIdx){
                        icon.className = 'fa fa-chevron-down';
                        content.classList.remove('content-show');
                        content.classList.remove('true');
                        }
                    }else if(btnIdx > 0 && btnIdx == contentIdx){
                        icon.className = 'fa fa-chevron-down';
                        var idxAnteiror = btnIdx-1;
                        var itemAnterior = document.getElementById(idxAnteiror);
                        if(itemAnterior.className == 'content content-show true'){
                            content.classList.remove('content-show');
                            content.classList.remove('true');
                        }else{
                            icon.className = 'fa fa-chevron-up';
                            confirm('Você deve seguir a ordem de leitura da direita para esquerda!');
                        }
                    }   
            })
        }
    })
})

