var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'chamarBtn1': ['click_btn1'],
            'chamarBtn2': ['dblclick_btn2'],
            'chamarBtn3': ['mouseover_btn3'],
            'chamarBtn4': ['click_btn4']
        },
        global: {}
    },
 
    btn1: function(htmlElement, event) {
    	console.log('Btn1-clickado...');
    },
    btn2: function(){
    	console.log('Btn2-clickado DOUBLE CLICK...');
    },
    btn3: function(){
    	console.log('Btn3-mouse passou por cima do botão...');
    },
    btn4: function(){
    	var emailValue = $("#exampleInputEmail1_"+this.instanceId).val();
    	console.log("E-mail digitado: " + emailValue);
    }

});

