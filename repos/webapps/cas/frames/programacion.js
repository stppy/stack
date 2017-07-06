var entidad=1;
var nivel=12;
var entidades;
//ISO-8859-1

$(document).ready(function(){
	/* $("body").on("click", "#titulolistaProgramacion",function(event){
	
	$("#listarProgramcion").click();
	event.stopPropagation();
	}); */
	var optionDepartamentos="";
	var optionFuncionales="";
	var optionUnidadResponsable="";
	var optionPnd='<optgroup label="DESARROLLO SOCIAL EQUITATIVO">'+
		'<option value="1">Universalizar el acceso a la identidad de las personas en el país.</option>'+
		'<option value="2">Erradicar la pobreza extrema de hombres y mujeres.</option>'+
		'<option value="3">Reducir en 90% la desnutrición crónica infantil, con énfasis en grupos vulnerables.</option>'+
		'<option value="4">Reducir en 75% la mortalidad materna.</option>'+
		'<option value="5">Reducir en 70% la mortalidad infantil.</option>'+
		'<option value="6">Aumentar a 70% la cobertura de educación inicial.</option>'+
		'<option value="7">Universalizar la educación preescolar.</option>'+
		'<option value="8">Aumentar 5 veces la escolaridad promedio de la población indígena.</option>'+
		'<option value="9">Universalizar el alfabetismo en la población indígena.</option>'+
		'<option value="10">Universalizar la cobertura de la educación escolar básica.</option>'+
		'<option value="11">"Aumentar la cobertura de educación media al 92% (tasa bruta de matriculación en educación media), con énfasis en poblaciones vulnerables.</option>'+
		'<option value="12">Universalizar la alfabetización en adolescentes y adultos.</option>'+
		'<option value="13">Aumentar en 75% la participación de las mujeres en el mundo laboral formal en igualdad de condiciones.</option>'+
	'</optgroup>'+

	'<optgroup label="SERVICIOS SOCIALES DE CALIDAD">'+
		'<option value="14">Alcanzar los estándares internacionales de calidad educativa (universalización del nivel 2 en prueba PISA y promedio en nivel 3 o más).</option>'+
		'<option value="15">Aumentar la esperanza de vida al nacer a 79 años.</option>'+
		'<option value="16">Disminuir en 50% las muertes por enfermedades no contagiosas.</option>'+
		'<option value="17">Disminuir en 50% la tasa de obesidad de la población.</option>'+
		'<option value="18">Reducir en 75% la tasa de homicidios dolosos.</option>'+
		'<option value="19">Reducir en 50% la tasa de muertes por accidentes de tránsito.</option>'+
		'<option value="20">Disminuir en 50% la tasa de suicidios.</option>'+
		'<option value="21">Aumentar la proporción de funcionarios públicos incorporados o promocionados con criterio de méritos y aptitudes.</option>'+
		'<option value="22">Aumentar el acceso a información pública y trámites por medio de redes electrónicas.</option>'+
		'<option value="23">Mejora del sistema estadístico nacional por encima de 85 puntos en el índice internacional de capacidad estadística.</option>'+
	'</optgroup>'+

	'<optgroup label="DESARROLLO LOCAL PARTICIPATIVO">'+
		'<option value="24">Mejorar condiciones de los asentamientos precarios a través de un proceso de ordenamiento y mejora urbanística adecuada.</option>'+
		'<option value="25">Descentralización de la gestión de las políticas públicas.</option>'+
		'<option value="26">Ordenamiento territorial a nivel municipal que determine el uso del suelo rural y urbano considerando los efectos económicos, sociales, culturales y ambientales, de forma a contar con una densidad poblacional adecuada que facilite la provisión de servicios públicos con eficiencia.</option>'+
		'<option value="27">Rendición de cuentas periódicas de todos los niveles de gobierno.</option>'+
	'</optgroup>'+

	'<optgroup label="HABITAT ADECUADO Y SOSTENIBLE">'+
		'<option value="28">Reducir en 70% el déficit habitacional.</option>'+
		'<option value="29">Universalizar el acceso a agua potable (agua corriente segura domiciliaria).</option>'+
		'<option value="30">Universalizar el acceso a saneamiento mejorado.</option>'+
		'<option value="31">Universalizar el acceso a energía eléctrica de calidad.</option>'+
		'<option value="32">Reducir en 95% las muertes atribuibles a la contaminación del aire.</option>'+
		'<option value="33">Universalizar la disposición y manejo de residuos urbanos e industriales.</option>'+
	'</optgroup>'+

	'<optgroup label="EMPLEO Y PROTECCION SOCIAL">'+
		'<option value="34">Mantener la tasa de crecimiento del ingreso del 40% de la población de menores ingresos por encima de la tasa promedio de crecimiento de la economía.</option>'+
		'<option value="35">Aumentar en 7 veces el promedio nacional de población con estudios terciarios, con énfasis en poblaciones vulnerables.</option>'+
		'<option value="36">Universalizar la cobertura de la seguridad social.</option>'+
		'<option value="37">Alcanzar la inclusión financiera del 100% de los hogares.</option>'+
		'<option value="38">85% de jóvenes de 20-32 años de los quintiles más pobres incluidos en programas de capacitación laboral.</option>'+
	'</optgroup>'+

	'<optgroup label="COMPETITIVIDAD E INNOVACION">'+
		'<option value="39">Tasa de crecimiento promedio del PIB de 6,8%.</option>'+
		'<option value="40">Consolidar una red de transporte multimodal eficiente (fluvial, aéreo, terrestre, ferroviario) que disminuya los costos logísticos promedios a niveles competitivos internacionalmente.</option>'+
		'<option value="41">Mantener bajas tasas de inflación (de acuerdo al objetivo definido) y con reducida volatilidad.</option>'+
		'<option value="42">"Alcanzar el 90% de formalización de la actividad económica en los principales sectores, logrando asimismo un incremento en recaudaciones fiscales que permita una presión tributaria de aproximadamente el 18% del PIB.</option>'+
		'<option value="43">Contar con al menos 1 universidad paraguaya ubicada entre las primeras 400 a nivel mundial (en cualquiera de los 3 rankings más utilizados).</option>'+
		'<option value="44">Aumentar al 80% el uso de internet de banda ancha –o tecnología equivalente-.</option>'+
		'<option value="45">Regularizar la tenencia de la tierra por medio de un catastro fiable que incluya también a todos los beneficiarios de la reforma agraria en las últimas décadas, ceñido a un estricto cumplimiento de la Ley.</option>'+
		'<option value="46">Quintuplicar el número de patentes de invenciones nacionales.</option>'+
		'<option value="47">Asegurar la transparencia del gasto público en los tres niveles de gobierno y en los tres Poderes del Estado.</option>'+
	'</optgroup>'+

	'<optgroup label="REGIONALIZACION Y DIVERSIFICACION PRODUCTIVA">'+
		'<option value="48">Reducir a menos de 3% el rezago potencial de la productividad por hectárea de la agricultura familiar con respecto a la agricultura empresarial</option>'+
		'<option value="49">Reducir a menos de 7% el rezago potencial de los ingresos laborales promedios en la región centro-norte del país (San Pedro, Concepción, Canindeyú, Caazapá y Caaguazú) con respecto al resto de la región oriental.</option>'+
		'<option value="50">Incrementar el consumo de electricidad para uso industrial.</option>'+
		'<option value="51">Fomentar la creación de MiPyMEs en industrias de servicios y tecnologías.</option>'+
	'</optgroup>'+

	'<optgroup label="VALORIZACION DEL CAPITAL AMBIENTAL">'+
		'<option value="52">Aumentar en 60% el consumo de energías renovables.</option>'+
		'<option value="53">Reducir en 20% el consumo de combustible fósil.</option>'+
	'</optgroup>'+

	'<optgroup label="IGUALDAD DE OPORTUNIDADES EN UN MUNDO GLOBALIZADO">'+
		'<option value="54">Asegurar servicios consulares útiles, eficientes a paraguayos migrantes y propiciar los vínculos culturales paraguayos con sus familiares.</option>'+
		'<option value="55">Ampliar la cobertura territorial y la presencia del país en el mundo, en particular en los países donde existen comunidades crecientes de paraguayos y donde deben promocionarse los productos nacionales y el turismo.</option>'+
		'<option value="56">Gestión efectiva de la diáspora paraguaya en el exterior.</option>'+
		'<option value="57">Propiciar la re-incorporación de paraguayos destacados en el exterior, al servicio público, al sector empresarial o científico.</option>'+
		'<option value="58">Potenciar la contribución al desarrollo paraguayo de la comunidad de inmigrantes en Paraguay en forma armónica e integrada.</option>'+
	'</optgroup>'+


	'<optgroup label="ATRACCION DE INVERSIONES, COMERCIO EXTERIOR E IMAGEN PAIS.">'+
		'<option value="59">Ubicar a Paraguay entre los primeros exportadores mundiales de alimentos, en rubros tales como sésamo, almidón de mandioca, stevia, frutas y hortalizas, soja, carne, etc.</option>'+
		'<option value="60">Aumentar la exportación de productos y servicios culturales y tecnológicos.</option>'+
		'<option value="61">Incrementar a al menos 2 millones el número de turistas por año.</option>'+
		'<option value="62">Disminuir sustancialmente las vulnerabilidades y amenazas de lavado de activos, financiamiento del terrorismo y proliferación de armas de destrucción masiva.</option>'+
		'<option value="63">Aumentar los ingresos por venta de energía eléctrica.</option>'+
	'</optgroup>'+

	'<optgroup label="INTEGRACION ECONOMICA REGIONAL">'+
		'<option value="64">Hacer del Paraguay el eje de una integración energética regional, aprovechando las potenciales complementariedades energéticas en la región, garantizando así el uso sostenible y eficiente de los recursos energéticos de cada país.</option>'+
		'<option value="65">Aumentar la capacidad de movimiento portuario.</option>'+
		'<option value="66">Incrementar el tiempo disponible de uso de las hidrovías a 365 días al año.</option>'+
		'<option value="67">Aumentar la transitabilidad de transporte de cargas a todas las cabeceras distritales.</option>'+
		'<option value="68">Restaurar al menos el 20% de los ecosistemas degradados.</option>'+
		'<option value="69">Aumentar los ingresos nacionales por la venta de servicios ambientales.</option>'+
	'</optgroup>'+

	'<optgroup label="SOSTENIBILIDAD DEL HABITAT GLOBAL">'+
		'<option value="70">Reducir los costos de recuperación ante eventos de desastres causados por efectos climáticos.</option>'+
		'<option value="71">Explotar los acuíferos en base a planes ambientales debidamente monitoreados.</option>'+
		'<option value="72">Aumentar la cobertura de áreas forestales y biomasa protegida.</option>'+
	'</optgroup>';
	
	$("body").on("click", "#titulolistaProgramacion",function(event){
		var departamentos = $.ajax({
	    	url:'http://spr.stp.gov.py/ajaxSelects?accion=getDepartamentos',
	      	type:'get',
	      	dataType:'json',
	      	async:false       
	    }).responseText;
		departamentos = JSON.parse(departamentos);
		departamentos = departamentos.departamentos;
		for(i = 0;i<departamentos.length; i++){
			optionDepartamentos+='<option value="'+departamentos[i].deptoPais+'">'+departamentos[i].abrevDepartamento+'</option>';
		}
		
		var funcionales = $.ajax({
	    	url:'http://spr.stp.gov.py/ajaxHelper?accion=getFuncionales&anio=2015',
	      	type:'get',
	      	dataType:'json',
	      	async:false       
	    }).responseText;
		funcionales = JSON.parse(funcionales);
		funcionales = funcionales.funcionales;
		for(i = 0;i<funcionales.length; i++){
			optionFuncionales+='<option value="'+funcionales[i].codigoFuncional+'">'+funcionales[i].nombre+'</option>';
		}
		
		
		
		var unidadesResponsables = $.ajax({
	    	url:'http://spr.stp.gov.py/ajaxHelper?accion=getUnidadesResponsables&anio=2015',
	      	type:'get',
	      	dataType:'json',
	      	async:false       
	    }).responseText;
		unidadesResponsables = JSON.parse(unidadesResponsables);
		unidadesResponsables = unidadesResponsables.unidadesResponsables;
		for(i = 0;i<unidadesResponsables.length; i++){
			optionUnidadResponsable+='<option value="'+unidadesResponsables[i].unrCodigo+'">'+unidadesResponsables[i].unrNombre+'</option>';
		}
		
		
		
		$("#row-body-programacionfisica").html("");
		var tiposPrograma = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getTiposPrograma',
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

		tiposPrograma = JSON.parse(tiposPrograma);
		tiposPrograma = tiposPrograma.tiposPrograma;
    	var i =0;
    	for(i = 0;i<tiposPrograma.length; i++){
    		$("#row-body-programacionfisica").append(' <!-- tipos -->'+
	                  '<div class="box box-info">'+
                    '<div class="box-header with-border">'+
                      '<h3 class="box-title tituloTipoPrograma" id="" tipoPrograma="'+tiposPrograma[i].numeroFila+'">'+tiposPrograma[i].numeroFila+') '+tiposPrograma[i].nombreTipoPrograma+'</h3>'+
                      '<div class="box-tools pull-right">'+
                       '     <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>'+
                      '</div>'+
                    '</div><!-- /.box-header -->'+
                    '<div class="box-body lista-programas" id="programas-contenedor-'+tiposPrograma[i].numeroFila+'" tipoPrograma="'+tiposPrograma[i].numeroFila+'" style="display:block;" >'+
                    '</div>'+
                   '</div>'); 
    	}
    	event.stopPropagation();
	});
	$("body").on("click", ".tituloTipoPrograma",function(event){
		var tipoPrograma= $(this).attr("tipoPrograma");
		$("#programas-contenedor-"+tipoPrograma).html("");
		var programas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProgramas&nivel='+nivel+'&entidad='+entidad+'&tipoPresupuesto='+tipoPrograma+'',
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

		programas = JSON.parse(programas);
		programas = programas.programas;
    	var i =0;
    	for(i = 0;i<programas.length; i++){
    		$("#programas-contenedor-"+tipoPrograma).append(' <!-- programas -->'+
	                  '<div class="row" ><div class="col-md-10"><div class="box box-success" >'+
                    '<div class="box-header with-border">'+
                      '<h3 class="box-title tituloPrograma" id="" tipoPrograma="'+tipoPrograma+'" programa="'+programas[i].codigoPrograma+'">12.1.'+tipoPrograma+'.'+programas[i].codigoPrograma+') '+programas[i].nombrePrograma+'('+programas[i].abrevPrograma+')</h3>'+
                      '<div class="box-tools pull-right">'+
                       '     <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>'+
                      '</div>'+
                    '</div><!-- /.box-header -->'+
                    '<div class="box-body cuerpo-programa" id="cuerpo-programa-'+programas[i].codigoPrograma+'" programa="'+programas[i].codigoPrograma+'" style="display:block;" >'+
                    '<form>'+
                    '<table class="table table-striped table-bordered  table-hover">'+
                    ' 	<tr>'+
                     '		<td>Descripcion</td>'+
                     '		<td><textarea id="descripcion-programa-'+programas[i].codigoPrograma+'" rows="4" cols="180">'+programas[i].descripcionPrograma+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Objetivo</td>'+
                     '		<td><textarea id="objetivo-programa-'+programas[i].codigoPrograma+'" rows="4" cols="180">'+programas[i].objetivo+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Diagnostico</td>'+
                     '		<td><textarea id="diagnostico-programa-'+programas[i].codigoPrograma+'" rows="4" cols="180">'+programas[i].diagnostico+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Base Legal</td>'+
                     '		<td><textarea id="baseLegal-programa-'+programas[i].codigoPrograma+'" rows="4" cols="180">'+programas[i].baseLegal+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Resultado</td>'+
                     '		<td><textarea id="resultado-programa-'+programas[i].codigoPrograma+'" rows="4" cols="180">'+programas[i].resultado+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Departamento</td>'+
                     '		<td><select id="departamento-programa-'+programas[i].codigoPrograma+'" >'+
                     			optionDepartamentos+
                     '		</select></td>'+
                     ' 	</tr>'+
                     '</table>'+
                     '<button type="submit" style="margin-right:50px" class="btn btn-primary" id="guardar-programa-'+programas[i].codigoPrograma+'">Guardar</button>'+
                     '</form>'+
                    '</div>'+
                    '<div class="box-body lista-subprogramas" id="subprogramas-contenedor-'+programas[i].codigoPrograma+'-'+tipoPrograma+'" programa="'+programas[i].codigoPrograma+'" style="display:block;" >'+
                    '</div>'+
                   '</div></div></div>'); 
    		$('#departamento-programa-'+programas[i].codigoPrograma+' option[value="'+programas[i].codigoDepartamento+'"]').attr("selected", "selected");
    	}
    	event.stopPropagation();
	});
	$("body").on("click", ".tituloPrograma",function(event){
		var programa= $(this).attr("programa");
		var tipoPrograma= $(this).attr("tipoPrograma");
		$("#subprograma-contenedor-"+programa+"-"+tipoPrograma).html("");
		var subprogramas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getSubprogramas&nivel='+nivel+'&entidad='+entidad+'&tipoPresupuesto='+tipoPrograma+'&programa='+programa,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

		subprogramas = JSON.parse(subprogramas);
		subprogramas = subprogramas.subprogramas;
    	var i =0;
    	for(i = 0;i<subprogramas.length; i++){
    		$("#subprogramas-contenedor-"+programa+"-"+tipoPrograma).append(' <!-- subprogramas -->'+
	                  '<div class="row" ><div class="col-md-10"><div class="box box-warning" >'+
                    '<div class="box-header with-border">'+
                      '<h3 class="box-title tituloSubprograma" id="" subprograma="'+subprogramas[i].codigoSubprograma+'" tipoPrograma="'+tipoPrograma+'" programa="'+programa+'">12.1.'+tipoPrograma+'.'+programa+'.'+subprogramas[i].codigoSubprograma+') '+subprogramas[i].nombreSubprograma+'('+subprogramas[i].abrevSubprograma+')</h3>'+
                      '<div class="box-tools pull-right">'+
                       '     <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>'+
                      '</div>'+
                    '</div><!-- /.box-header -->'+
                    '<div class="box-body cuerpo-programa" id="cuerpo-programa-'+subprogramas[i].codigoSubprograma+'" programa="'+subprogramas[i].codigoSubprograma+'" style="display:block;" >'+
                    '<form>'+
                    '<table class="table table-striped table-bordered  table-hover">'+
                    ' 	<tr>'+
                     '		<td>Descripcion</td>'+
                     '		<td><textarea id="descripcion-subprograma-'+subprogramas[i].codigoSubprograma+'" rows="4" cols="140">'+subprogramas[i].descripcionSubprograma+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Objetivo</td>'+
                     '		<td><textarea id="objetivo-subprograma-'+subprogramas[i].codigoSubprograma+'" rows="4" cols="140">'+subprogramas[i].objetivo+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Departamento</td>'+
                     '		<td><select id="departamento-subprograma-'+subprogramas[i].codigoSubprograma+'" >'+
                     			optionDepartamentos+
                     '		</select></td>'+
                     ' 	</tr>'+
                     '</table>'+
                     '<button type="submit" style="margin-right:50px" class="btn btn-primary" id="guardar-programa-'+subprogramas[i].codigoSubprograma+'">Guardar</button>'+
                     '</form>'+
                    '</div>'+
                    '<div class="box-body lista-subprogramas" id="proyecto-contenedor-'+subprogramas[i].codigoSubprograma+'-'+programa+'-'+tipoPrograma+'" subprograma="'+subprogramas[i].codigoSubprograma+'"  tipoPrograma="'+tipoPrograma+'" programa="'+programa+' style="display:block;" >'+
                    '</div>'+
                   '</div></div></div>'); 
    		$('#departamento-subprograma-'+subprogramas[i].codigoSubprograma+' option[value="'+subprogramas[i].codigoDepartamento+'"]').attr("selected", "selected");
    	}
    	event.stopPropagation();
	});
	$("body").on("click", ".tituloSubprograma",function(event){
		var subprograma= $(this).attr("subprograma");
		var programa= $(this).attr("programa");
		var tipoPrograma= $(this).attr("tipoPrograma");
		
		$("#proyecto-contenedor-"+subprograma+"-"+programa+"-"+tipoPrograma).html("");
		var proyectos = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProyectos&nivel='+nivel+'&entidad='+entidad+'&tipoPresupuesto='+tipoPrograma+'&programa='+programa+'&subprograma='+subprograma,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

		proyectos = JSON.parse(proyectos);
		proyectos = proyectos.proyectos;
    	var i =0;
    	for(i = 0;i<proyectos.length; i++){
    		$("#proyecto-contenedor-"+subprograma+"-"+programa+"-"+tipoPrograma).append(' <!-- proyectos -->'+
	                  '<div class="row" ><div class="col-md-10"><div class="box box-danger" >'+
                    '<div class="box-header with-border">'+
                      '<h3 class="box-title tituloProyecto" id="" proyecto="'+proyectos[i].codigoProyecto+'" subprograma="'+subprograma+'" tipoPrograma="'+tipoPrograma+'" programa="'+programa+'">12.1.'+tipoPrograma+'.'+programa+'.'+subprograma+'.'+proyectos[i].codigoProyecto+') '+proyectos[i].nombreProyecto+'('+proyectos[i].abrevProyecto+')</h3>'+
                      '<div class="box-tools pull-right">'+
                       '     <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>'+
                      '</div>'+
                    '</div><!-- /.box-header -->'+
                    '<div class="box-body cuerpo-programa" id="cuerpo-programa-'+proyectos[i].codigoProyecto+'" programa="'+proyectos[i].codigoProyecto+'" style="display:block;" >'+
                    '<form>'+
                    '<table class="table table-striped table-bordered  table-hover">'+
                    '<tr>'+
                    '		<td>Diagnostico</td>'+
                    '		<td><textarea id="diagnostico-proyecto-'+proyectos[i].codigoProyecto+'" rows="4" cols="110">'+proyectos[i].diagnostico+'</textarea></td>'+
                    ' 	</tr>'+
                    ' 	<tr>'+
                     '		<td>Descripcion</td>'+
                     '		<td><textarea id="descripcion-proyecto-'+proyectos[i].codigoProyecto+'" rows="4" cols="110">'+proyectos[i].descripcionProyecto+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Objetivo Estrategico PND</td>'+
                     '		<td><select width="130" style="width: 130px" id="departamento-proyecto-'+proyectos[i].codigoProyecto+'" >'+
                     			optionPnd+
                     '		</select>'+
                     '<br> <a href="pnd.jsp" target="_blank">Mas Info</a>'+
                     '</td>'+
                     ' 	</tr>'+
                     '  <tr>'+
                     '		<td>Resultado Esperado</td>'+
                     '		<td><textarea id="resultadoEsperado-proyecto-'+proyectos[i].codigoProyecto+'" rows="4" cols="110">'+proyectos[i].resultadoEsperado+'</textarea></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Unidad Responsable</td>'+
                     '		<td><select id="unidad_responsable-proyecto-'+proyectos[i].codigoProyecto+'" >'+
                     optionUnidadResponsable+
                    '		</select></td>'+
                     ' 	</tr>'+
                     '  <tr>'+
                     '		<td>Clasificacion Funicional</td>'+
                     '		<td><select id="funcional-proyecto-'+proyectos[i].codigoProyecto+'" >'+
                     optionFuncionales+
                    '		</select></td>'+
                     ' 	</tr>'+
                     ' 	<tr>'+
                     '		<td>Departamento</td>'+
                     '		<td><select id="departamento-proyecto-'+proyectos[i].codigoProyecto+'" >'+
                     			optionDepartamentos+
                     '		</select></td>'+
                     ' 	</tr>'+
                     '</table>'+
                     '<button type="submit" style="margin-right:50px" class="btn btn-primary" id="guardar-programa-'+proyectos[i].codigoProyecto+'">Guardar</button>'+
                     '<button class="btn btn-warning"  id="'+proyectos[i].codigoProyecto+"-"+subprograma+"-"+programa+"-"+tipoPrograma+'1-12-agregar-resultado" owner="" disabled="">Agregar Resultado Esperado</button>'+
                     '</form>'+
                    '</div>'+
                    '<div class="box-body lista-proyecto" id="detalle-proyecto-contenedor-'+proyectos[i].codigoProyecto+'-'+programa+'-'+tipoPrograma+'-'+subprograma+'" proyecto="'+proyectos[i].codigoProyecto+'" subprograma="'+subprograma+'"  tipoPrograma="'+tipoPrograma+'" programa="'+programa+' style="display:block;" >'+
                    '</div>'+
                   '</div></div></div>'); 
    		$('#departamento-proyecto-'+proyectos[i].codigoProyecto+' option[value="'+proyectos[i].codigoDepartamento+'"]').attr("selected", "selected");
    		$('#funcional-proyecto-'+proyectos[i].codigoProyecto+' option[value="'+proyectos[i].codigoFuncional+'"]').attr("selected", "selected");
    		$('#unidad_responsable-proyecto-'+proyectos[i].codigoProyecto+' option[value="'+proyectos[i].unrCodigo+'"]').attr("selected", "selected");
    	}
    	event.stopPropagation();
	});
//programacioncomentado
});

