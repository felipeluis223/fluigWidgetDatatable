<div id="TreinamentoDatatable_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="TreinamentoDatatable.instance()">
	<h2>Treinameto Datatable</h2>
	
	<div id="target_datatable_${instanceId}"></div>
	
	<script type="text/template" id="area_acao">
		<div class="button-container">
			<!-- Botão de add linha -->
			<button type="button" class="btn btn-success btn-sm" data-add-linha>
				<i class="flaticon flaticon-add-plus icon-xs" aria-hidden="true"></i>Adicionar
			</button>
			
			<!-- Botão de remover linha -->
			<button type="button" class="btn btn-danger btn-sm" data-rem-linha>
				<i class="flaticon flaticon-close icon-xs" aria-hidden="true"></i>Remover
			</button>
			
			<!-- Botão de selecionar linha -->
			<button type="button" class="btn btn-info btn-sm" data-select-linha>
				<i class="flaticon flaticon-check-circle icon-xs" aria-hidden="true"></i>Selecionar
			</button>
			
			<!-- Botão de editar linha -->
			<button type="button" class="btn btn-warning btn-sm" data-edit-linha>
				<i class="flaticon flaticon-check-circle icon-xs" aria-hidden="true"></i>Editar
			</button>	
	   </div>
	</script>
	
	<script type="text/template" class="template_datatable_edit">
	    <tr>
	        <td>
	           	{{id}}
	        </td>
	        <td>
	            <input type="text" value="{{name}}" id="datatable-input-name">
	        </td>
	        <td>
	            <select class="form-control" value="{{uf}}" id="datatable-input-uf">
	                <option value="TST">TESTE</option>
	            </select>
	        </td>
	        <td>
	            <button class="btn btn-default" data-update-linha>Editar</button>
	        </td>
	    </tr>
	</script>
	
</div>

