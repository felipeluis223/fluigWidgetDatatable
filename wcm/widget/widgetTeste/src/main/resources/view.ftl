<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
    <h2>VIEW .FTL = Fica visivel na parte geral (Usuários)</h2>
    <h3>Olá ${pageRender.getUser().fullName}</h3>
    <button type="button" class="btn btn-success" data-chamarBtn1>Success</button>
    <button type="button" class="btn btn-info" data-chamarBtn2>Info</button>
    <button type="button" class="btn btn-warning" data-chamarBtn3>Warning</button>
	
	<hr/>
	
	<div class="row">
		<div class="form-group">
	        <label for="exampleInputEmail1">Email address</label>
	        <input type="email" class="form-control" id="exampleInputEmail1_${instanceId}" placeholder="Enter email">
	    </div>
		<button type="button" class="btn btn-warning" data-chamarBtn4>Ler Valor Email</button>
	</div>

</div>

