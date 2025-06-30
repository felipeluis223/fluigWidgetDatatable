var TreinamentoDatatable = SuperWidget.extend({
    //variáveis da widget - Variáveis Globais da SuperWidget:
    variavelNumerica: null,
    variavelCaracter: null,
    myTable: null,
    
    //método iniciado quando a widget é carregada
    init: function() {
    	this.initDatatable();
    },
  
    //BIND de eventos
    bindings: {
        local: {
        	// 'add-linha/rem-linha/select-linha'-> troca pelo nome função HTML;
        	// 'click' -> tipo de ação;
        	// addRow/delRow/selected -> nome da função criada.
            'add-linha': ['click_addRow'],
            'rem-linha': ['click_delRow'],
            'select-linha': ['click_selected'],
            'edit-linha': ['click_editRow'],
            'update-linha': ['click_updaterow']
        },
        global: {}
    },
    // Função responsável por atualizar os dados:
    updaterow: function(el, ev) {
        var editedRow = {
            id: $('#datatable-input-id').val(),
            name: $('#datatable-input-name').val(),
            uf: $('#datatable-input-uf').val()
        };
        this.myTable.updateRow(this.myTable.selectedRows()[0], editedRow);
     
        $('[data-datatable-edit-row]').prop("disabled", false);
     
        FLUIGC.toast({
            title: '',
            message: "Edited!",
            type: 'success'
        });
    },
    
    // Função responsável por editar item(linha):
    editRow: function(el, ev) {
        var row = this.myTable.getRow(this.myTable.selectedRows()[0]);
        this.myTable.updateRow(this.myTable.selectedRows()[0], row, '.template_datatable_edit');
        $('#datatable-input-name').val(row.name);
        $('#datatable-input-uf').val(row.uf);
     
        $('[data-datatable-edit-row]').prop("disabled", true);
     
    },
    
    // Função responsável por adicionar item(linha):    
    addRow: function(el, ev){
    	var row = { id: "27", name: "Tocantins", uf: "TO" };
    	this.myTable.addRow(0, row);
    },
    
    // Função responsável por remover item(linha):
    delRow: function(el, ev) {
    	var itemsToRemove = this.myTable.selectedRows();
    	if(itemsToRemove.length > 0){
    		for(var i=0; i<=itemsToRemove.length; i++){
    			this.myTable.removeRow(this.myTable.selectedRows()[0]);
    		}
    	}
    	
    	// Configuração - disparo de mensagem:
    	FLUIGC.toast({
    		title: '',
    		message: "Elemento Removido...",
    		type: "success"
    	});
    },
    
    // Função responsável por selecionar item(linha):
    selected: function(el, ev){
    	var index = this.myTable.selectedRows()[0];
    	var selected = this.myTable.getRow(index);
    	FLUIGC.toast({
    		title: "",
    		message: "{\"id\" :" + selected.id + ", \"name\" :" + selected.name + ", \"uf\" :" + selected.uf + "}",             
    		type: "success"
    	});
    },
    
    initDatatable: function(){
    	var myData = [
		 { id: "1", name: "Acre", uf: "AC" },
         { id: "2", name: "Alagoas", uf: "AL" },
         { id: "3", name: "Amapá", uf: "AP" },
         { id: "4", name: "Amazonas", uf: "AM" },
         { id: "5", name: "Bahia", uf: "BA" },
         { id: "6", name: "Ceará", uf: "CE" },
         { id: "7", name: "Distrito Federal", uf: "DF" },
         { id: "8", name: "Espírito Santo", uf: "ES" },
         { id: "9", name: "Goiás", uf: "GO" },
         { id: "10", name: "Maranhão", uf: "MA" },
         { id: "11", name: "Mato Grosso", uf: "MT" },
         { id: "12", name: "Mato Grosso do Sul", uf: "MS" },
         { id: "13", name: "Minas Gerais", uf: "MG" },
         { id: "14", name: "Pará", uf: "PA" },
         { id: "15", name: "Paraíba", uf: "PB" },
         { id: "16", name: "Paraná", uf: "PR" },
         { id: "17", name: "Pernambuco", uf: "PE" },
         { id: "18", name: "Piauí", uf: "PI" },
         { id: "19", name: "Rio de Janeiro", uf: "RJ" },
         { id: "20", name: "Rio Grande do Norte", uf: "RN" },
         { id: "21", name: "Rio Grande do Sul", uf: "RS" },
         { id: "22", name: "Rondônia", uf: "RO" },
         { id: "23", name: "Roraima", uf: "RR" },
         { id: "24", name: "Santa Catarina", uf: "SC" },
         { id: "25", name: "São Paulo", uf: "SP" },
         { id: "26", name: "Sergipe", uf: "SE" },
         
    	];
    	
    	this.myTable = FLUIGC.datatable('#target_datatable_' + this.instanceId, {
    	    dataRequest: myData,
    	    renderContent: ['id', 'name', 'uf'],
    	    header: [
    	        {'title': 'Código'},
    	        {'title': 'Nome'},
    	        {'title': 'UF'}
    	    ],
    	    actions: {
    	        enabled: true,
    	        template: '#area_acao',
    	        actionAreaStyle: 'col-md-6'
    	    },
    	    draggable: {
    	    	enabled: true,
    	    },
    	}, function(err, data) {
    	    // DO SOMETHING (error or success)
    	}).on('fluig.datatable.loadcomplete', function(data) {
    	    // Quando dispara: Assim que a tabela termina de carregar os dados.
    		console.log('EVENTO: fluig.datatable.loadcomplete');
    		console.log(data);
    	}).on('fluig.datatable.onselectrow', function(data) {
    	    // Quando dispara: Quando o usuário seleciona uma linha na tabela.
    		console.log('EVENTO: fluig.datatable.onselectrow');
    		console.log(data);
    	}).on('fluig.datatable.drag.start', function(data) {
    	    // Quando dispara: Quando o usuário inicia um arraste (drag) de uma linha.
    		console.log('EVENTO: fluig.datatable.drag.start');
    		console.log(data);
    	}).on('fluig.datatable.drag.end', function(data) {
    	    // Quando dispara: Quando o usuário finaliza o arraste de uma linha.
    		console.log('EVENTO: fluig.datatable.drag.end');
    		console.log(data);
    	}).on('fluig.datatable.scroll', function(data) {
    	    // Quando dispara: Ao rolar verticalmente a tabela.
    		console.log('EVENTO: fluig.datatable.scroll');
    		console.log(data);
    	}).on('fluig.datatable.search', function(data) {
    	    // Quando dispara: Quando o usuário faz uma pesquisa usando o campo de busca da tabela.
    		console.log('EVENTO: fluig.datatable.search');
    		console.log(data);
    	}).on('fluig.datatable.forward', function(data) {
    	    // Quando dispara: Ao clicar para avançar para a próxima página da tabela (se for paginada).
    		console.log('EVENTO: fluig.datatable.forward');
    		console.log(data);
    	}).on('fluig.datatable.backward', function(data) {
    	    // Quando dispara: Ao clicar para voltar para a página anterior da tabela.
    		console.log('EVENTO: fluig.datatable.backward');
    		console.log(data);
    	});
    }

});

