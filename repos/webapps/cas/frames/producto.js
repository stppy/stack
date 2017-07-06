  function Combo(){

    this.nivelFocus = function(){
	
   	  var listaDatalist=document.getElementsByTagName('datalist');
      var datosNiveles = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getNiveles',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;

        
        datosNiveles = JSON.parse(datosNiveles);
		
        if(listaDatalist.length === 0 )
        {
	        var datalistNiveles = document.createElement('datalist');
	        datalistNiveles.setAttribute('id','listaf1c2');
	        datalistNiveles.setAttribute('size','5'); 
	        var ubicacionDatalistNiveles = document.getElementById('formulario');
	        ubicacionDatalistNiveles.appendChild(datalistNiveles);
	
	        for(var i = 0; i < datosNiveles.niveles.length ; i++) 
	        {       
	        	var option = document.createElement('option');
	          	option.setAttribute('value',datosNiveles.niveles[i].nivel);
	          	option.setAttribute('label',datosNiveles.niveles[i].nombreNivel);
	          	datalistNiveles.appendChild(option);      
	      	} 
        }
    } 

    this.nivel = function(){
    	var rutaNivel = document.getElementById('nivel-formulario').value;
      	var datosNiveles = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getNiveles',
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        
        datosNiveles = JSON.parse(datosNiveles);
      	for(var x = 0; x < datosNiveles.niveles.length; x++)
      	{
        	if(datosNiveles.niveles[x].nivel === parseInt(rutaNivel))
        	{
	        	var mostrarNivel = datosNiveles.niveles[x].nombreNivel;
	          	var nt=document.createTextNode(mostrarNivel+" >");
	          	var nparrafo=document.getElementById('f1c2');
	          	nparrafo.innerHTML="";
	          	nparrafo.appendChild(nt);
	        }
      	}
    }  


    this.entidadFocus = function(){ 
      	var linkEntidad = document.getElementById('nivel-formulario').value;

    	var datosEntidades = $.ajax({
         	 url:'http://spr.stp.gov.py/ajaxSelects?accion=getEntidades&nivel='+linkEntidad,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosEntidades = JSON.parse(datosEntidades);
 
        var datalistEntidades = document.createElement('datalist'); 
        datalistEntidades.setAttribute('id','listaf2c2'); 
        var ubicacionDatalistEntidades = document.getElementById('formulario');
        ubicacionDatalistEntidades.appendChild(datalistEntidades);

        for(var i = 0; i < datosEntidades.entidades.length ; i++) 
        {       
        	var option = document.createElement('option');
          	option.setAttribute('value',datosEntidades.entidades[i].entidad);
          	option.setAttribute('label',datosEntidades.entidades[i].nombreEntidad);
          	datalistEntidades.appendChild(option);      
      	}   
    } 


    this.entidad = function(){ 
    	var linkEntidad = document.getElementById('nivel-formulario').value;
      	var rutaEntidad2 = document.getElementById('entidad-formulario').value;

      	var datosEntidades = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getEntidades&nivel='+linkEntidad,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosEntidades = JSON.parse(datosEntidades);
 
    	for(var x = 0; x < datosEntidades.entidades.length; x++)
      	{
        	if(datosEntidades.entidades[x].entidad === parseInt(rutaEntidad2)) 
        	{
        		document.getElementById('entidad-formulario').setAttribute("entidad",rutaEntidad2 );
        		var mostrarEntidad = datosEntidades.entidades[x].nombreEntidad;
          		var nt=document.createTextNode(mostrarEntidad);
          		var nparrafo=document.getElementById('f2c2');
          		nparrafo.innerHTML="";
          		nparrafo.appendChild(nt);
        	} 
      	} 
    }  

    this.tipoProgramaFocus = function(){

      	var datosTipoPrograma = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getTiposPrograma',
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosTipoPrograma = JSON.parse(datosTipoPrograma);
        var datalistEntidades = document.createElement('datalist'); 
        datalistEntidades.setAttribute('id','listaf3c2'); 
        var ubicacionDatalistEntidades = document.getElementById('formulario');
        ubicacionDatalistEntidades.appendChild(datalistEntidades);

        for(var i = 0; i < datosTipoPrograma.tiposPrograma.length ; i++) 
        {       
        	var option = document.createElement('option');
          	option.setAttribute('value',datosTipoPrograma.tiposPrograma[i].numeroFila);
          	option.setAttribute('label',datosTipoPrograma.tiposPrograma[i].nombreTipoPrograma);
          	datalistEntidades.appendChild(option);      
      	}      
    }
    this.tipoPrograma = function(){
    	var linkTipoPrograma = document.getElementById('tipoPrograma-formulario').value;

      	var datosTipoPrograma = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getTiposPrograma',
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosTipoPrograma = JSON.parse(datosTipoPrograma);
 
    	for(var x = 0; x < datosTipoPrograma.tiposPrograma.length; x++)
      	{
        	if(datosTipoPrograma.tiposPrograma[x].numeroFila === parseInt(linkTipoPrograma)) 
        	{
        		var mostrarTipoPrograma = datosTipoPrograma.tiposPrograma[x].nombreTipoPrograma;
          		var nt=document.createTextNode(mostrarTipoPrograma);
          		var nparrafo=document.getElementById('f3c2');
          		nparrafo.innerHTML="";
          		nparrafo.appendChild(nt);
        	} 
      	}
    }

    this.programasFocus = function(){
      	var linkNivel = document.getElementById('nivel-formulario').value;
      	var linkEntidad = document.getElementById("entidad-formulario").value;
      	var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;

    	var datosProgramas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProgramas&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;
        
        datosProgramas = JSON.parse(datosProgramas);

        var datalistProgramas = document.createElement('datalist');
        datalistProgramas.setAttribute('id','listaf4c2'); 
        var ubicacionDatalistProgramas = document.getElementById('formulario');
        ubicacionDatalistProgramas.appendChild(datalistProgramas);

        for(var i = 0; i < datosProgramas.programas.length ; i++) 
        {       
	        var option = document.createElement('option');
    	    option.setAttribute('value',datosProgramas.programas[i].codigoPrograma);
    	    option.setAttribute('label',datosProgramas.programas[i].nombrePrograma);
        	datalistProgramas.appendChild(option);       
      	} 
    }
    this.programas = function(){
      	var linkNivel = document.getElementById('nivel-formulario').value;
      	var linkEntidad = document.getElementById("entidad-formulario").value;
      	var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;
      	var numeroProgramaIngresado = document.getElementById("programa-formulario").value;

    	var datosProgramas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProgramas&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosProgramas = JSON.parse(datosProgramas);
	    for(var x = 0; x < datosProgramas.programas.length; x++)
    	{
        	if(datosProgramas.programas[x].codigoPrograma === parseInt(numeroProgramaIngresado))
        	{
        		var mostrarNombrePrograma = datosProgramas.programas[x].nombrePrograma;
		        var nt=document.createTextNode(mostrarNombrePrograma);
		        var nparrafo=document.getElementById('f4c2');
		        nparrafo.innerHTML="";
		        nparrafo.appendChild(nt);
		    }
      	}
    } 

    this.subProgramasFocus = function(){
	    var linkNivel = document.getElementById('nivel-formulario').value;
	    var linkEntidad = document.getElementById('entidad-formulario').value;
	    var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;
	    var linkPrograma = document.getElementById("programa-formulario").value;

    	var datosSubProgramas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getSubprogramas&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma+'&programa='+linkPrograma,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosSubProgramas = JSON.parse(datosSubProgramas);

        var datalistSubProgramas = document.createElement('datalist');
        datalistSubProgramas.setAttribute('id','listaf5c2'); 
        var ubicacionDatalistProgramas = document.getElementById('formulario');
        ubicacionDatalistProgramas.appendChild(datalistSubProgramas);

          for(var i = 0; i < datosSubProgramas.subprogramas.length ; i++) 
          {       
          var option = document.createElement('option');
          option.setAttribute('value', datosSubProgramas.subprogramas[i].codigoSubprograma);
          option.setAttribute('label', datosSubProgramas.subprogramas[i].nombreSubprograma);
          datalistSubProgramas.appendChild(option);     
      } 
    } 
    this.subProgramas = function(){
	    var linkNivel = document.getElementById('nivel-formulario').value;
	    var linkEntidad = document.getElementById('entidad-formulario').value;
	    var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;
	    var linkPrograma = document.getElementById("programa-formulario").value;
	    var numeroSubProgramaIngresado = document.getElementById("subPrograma-formulario").value;

    	var datosSubProgramas = $.ajax({
        	url:'http://spr.stp.gov.py/ajaxSelects?accion=getSubprogramas&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma+'&programa='+linkPrograma,
          	type:'get',
          	dataType:'json',
          	async:false       
        }).responseText;

        datosSubProgramas = JSON.parse(datosSubProgramas);

      	for(var x = 0; x < datosSubProgramas.subprogramas.length; x++)
      	{
        	if(datosSubProgramas.subprogramas[x].codigoSubprograma === parseInt(numeroSubProgramaIngresado))
        	{
	        	var mostrarNombrePrograma = datosSubProgramas.subprogramas[x].nombreSubprograma;
	          	var nt=document.createTextNode(mostrarNombrePrograma);
	          	var nparrafo=document.getElementById('f5c2');
	          	nparrafo.innerHTML="";
	          	nparrafo.appendChild(nt);
	        }
      	}
    } 

    this.proyectoFocus = function(){
	    var linkNivel = document.getElementById("nivel-formulario").value;
	    var linkEntidad = document.getElementById("entidad-formulario").value;
	    var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;
	    var linkPrograma = document.getElementById('programa-formulario').value;
	    var linkSubPrograma = document.getElementById('subPrograma-formulario').value;

    	var datosProyectos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getProyectos&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma+'&programa='+linkPrograma+'&subprograma='+linkSubPrograma,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;

        
        datosProyectos = JSON.parse(datosProyectos);

        var datalistProyectos = document.createElement('datalist');
        datalistProyectos.setAttribute('id','listaf6c2'); 
        var ubicacionDatalistProyectos = document.getElementById('formulario');
        ubicacionDatalistProyectos.appendChild(datalistProyectos);

          for(var i = 0; i < datosProyectos.proyectos.length ; i++) 
          {       
          var option = document.createElement('option');
          option.setAttribute('value', datosProyectos.proyectos[i].codigoProyecto);
          option.setAttribute('label', datosProyectos.proyectos[i].nombreProyecto);
          datalistProyectos.appendChild(option);      
      } 
    }
    this.proyecto = function(){
	    var linkNivel = document.getElementById("nivel-formulario").value;
	    var linkEntidad = document.getElementById("entidad-formulario").value;
	    var linkTipoPrograma = document.getElementById("tipoPrograma-formulario").value;
	    var linkPrograma = document.getElementById('programa-formulario').value;
	    var linkSubPrograma = document.getElementById('subPrograma-formulario').value;
	    var numeroProyectoIngresado = document.getElementById("proyecto-formulario").value;

    	var datosProyectos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getProyectos&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPrograma+'&programa='+linkPrograma+'&subprograma='+linkSubPrograma,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;

        datosProyectos = JSON.parse(datosProyectos);

	    for(var x = 0; x < datosProyectos.proyectos.length; x++)
      	{
        	if(datosProyectos.proyectos[x].codigoProyecto === parseInt(numeroProyectoIngresado))
        	{
        		var mostrarNombreProyecto = datosProyectos.proyectos[x].nombreProyecto;
          		var nt=document.createTextNode(mostrarNombreProyecto);
          		var nparrafo=document.getElementById('f6c2');
          		nparrafo.innerHTML="";
          		nparrafo.appendChild(nt);
        	}
      	}
    }

    this.dibujar = function(){
     	var linkNivel = document.getElementById("nivel-formulario").value;
      	var linkEntidad = document.getElementById("entidad-formulario").value;
      	var linkTipoPresupuesto = document.getElementById("tipoPrograma-formulario").value;
      	var linkPrograma = document.getElementById("programa-formulario").value;
      	var linkSubPrograma = document.getElementById("subPrograma-formulario").value;
      	var linkProyecto = document.getElementById("proyecto-formulario").value;
      	var anho=2015;
      //crear nuevo producto
    	$("#anho-crear-producto").attr("value",2015);
    	$("#nivel-crear-producto").attr("value",12);
    	$("#entidad-crear-producto").attr("value",1);
    	$("#tipo-crear-producto").attr("value",linkTipoPresupuesto);
    	$("#programa-crear-producto").attr("value",linkPrograma);
    	$("#subprograma-crear-producto").attr("value",linkSubPrograma);
    	$("#proyecto-crear-producto").attr("value",linkProyecto);
    	$("#crear-producto").toggle();
    	
    	var optionProducto="";
    	var productos = $.ajax({
	    	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProductos',
	      	type:'get',
	      	dataType:'json',
	      	async:false       
	    }).responseText;
    	productos = JSON.parse(productos);
    	productos = productos.productos;
		for(i = 0;i<productos.length; i++){
			optionProducto+='<option value="'+productos[i].codigoCatalogo+'">'+productos[i].nombreCatalogo+'</option>';
		}
		$("#producto_id-crear-producto").append(optionProducto);
		
		

     	var datosMeses = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getMeses',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
        datosMeses = JSON.parse(datosMeses);

        var datosDepartamentos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getDepartamentos',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
        datosDepartamentos = JSON.parse(datosDepartamentos);


      var datosProductos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getProductosPresupuesto&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPresupuesto+'&programa='+linkPrograma+'&subprograma='+linkSubPrograma+'&proyecto='+linkProyecto,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
        datosProductos = JSON.parse(datosProductos);

        for(var i = 0; i < datosProductos.producto.length ; i++) 
        {       
                   
       		var contenedorDeProducto = document.createElement('div');
       		contenedorDeProducto.setAttribute('nivel',linkNivel);
   			contenedorDeProducto.setAttribute('entidad',linkEntidad);
			contenedorDeProducto.setAttribute('tipoPresupuesto',linkTipoPresupuesto);
			contenedorDeProducto.setAttribute('programa',linkPrograma);
			contenedorDeProducto.setAttribute('subprograma',linkSubPrograma);
			contenedorDeProducto.setAttribute('proyecto',linkProyecto);
			contenedorDeProducto.setAttribute('id',"producto-"+datosProductos.producto[i].id);
			//contenedorDeProducto.setAttribute('producto',linkProducto);
			contenedorDeProducto.setAttribute('class',"col-md-12");


			var producto = datosProductos.producto[i].id
			var cajaProducto=' <!-- PRODUCTO -->'+
		                  '<div class="box box-warning direct-chat direct-chat-warning">'+
		                    '<div class="box-header with-border">'+
		                      '<h3 class="box-title">Nombre Producto</h3>'+
		                      '<div class="box-tools pull-right">'+
		                       '     <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>'+
		                      '</div>'+
		                    '</div><!-- /.box-header -->'+
		                    '<div class="box-body" style="display:block;">'+
		                      '<table class="table table-striped table-bordered  table-hover">'+
		                     ' 	<tr>'+
		                      '		<th>Depto</th>'+
		                      '		<th>Ene</th>'+
		                      '		<th>Feb</th>'+
		                      '		<th>Mar</th>'+
		                      '		<th>Abr</th>'+
		                      '		<th>May</th>'+
		                      '		<th>Jun</th>'+
		                      '		<th>Jul</th>'+
		                      '		<th>Ago</th>'+
		                      '		<th>Set</th>'+
		                      '		<th>Oct</th>'+
		                      '		<th>Nov</th>'+
		                      '		<th>Dic</th>'+
		                      '		<th>Tot</th>'+
		                    //  '		<th>Accion</th>'+
		                      '	</tr>'+
		                      '<tbody class="table-body-producto" producto='+producto+'>'+
		                      '</tbody>'+
		                      '</table>'+
		                      '<br>'+
		                    '</div>'+
		                    '<div class="box-footer">'+
		                    	'<input style="float:right;margin-left:50px" type="text" id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+producto+'-anho3"'+' placeholder="Total para 2018">'+
		                    	'<input style="float:right;margin-left:50px" type="text" id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+producto+'-anho2"'+' placeholder="Total para 2017">'+
		                    	'<button type="submit" style="margin-right:50px" class="btn btn-primary" id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+producto+'-guardar-producto" >Guardar</button>'+
		                    	'<button class="btn btn-warning"  id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+producto+'-asignar-beneficiario" owner="" disabled="">Asignar Destinatario</button>'+
		                    '</div>'+
		                    '</div>';
		    contenedorDeProducto.innerHTML=cajaProducto;

			var nparrafo=document.getElementById('row-body-programacionfisica');
          	nparrafo.appendChild(contenedorDeProducto);

    		var codigoProducto = datosProductos.producto[i].id;
		    var productos = $.ajax({
		        url:'http://spr.stp.gov.py/ajaxSelects?accion=getProductos&producto='+codigoProducto,
		        type:'get',
		        dataType:'json',
		        async:false       
		    }).responseText;
        	productos = JSON.parse(productos);
        	var mostrarTituloProducto = productos.productos[0].nombreCatalogo;
      		var nt=document.createTextNode(mostrarTituloProducto);
      		var linkProducto = datosProductos.producto[i].id
      		$("div [nivel='"+linkNivel+"'][entidad='"+linkEntidad+"'][tipopresupuesto='"+linkTipoPresupuesto+"'][programa='"+linkPrograma+"'][subprograma='"+linkSubPrograma+"'][proyecto='"+linkProyecto+"'][id='producto-"+linkProducto+"']").find('h3').html(nt);

        	var codigoUnidadMedida = datosProductos.producto[i].unidad_medida_id;
		    var unidadMedida = $.ajax({
		        url:'http://spr.stp.gov.py/ajaxSelects?accion=getUnidadesMedida&unidadMedida='+codigoUnidadMedida,
		        type:'get',
		        dataType:'json',
		        async:false       
		    }).responseText;
        	unidadMedida = JSON.parse(unidadMedida);
        	var unidadMedida=unidadMedida.unidadesMedida[0];

        	$("div [nivel='"+linkNivel+"'][entidad='"+linkEntidad+"'][tipopresupuesto='"+linkTipoPresupuesto+"'][programa='"+linkPrograma+"'][subprograma='"+linkSubPrograma+"'][proyecto='"+linkProyecto+"'][id='producto-"+linkProducto+"']").find('h3').append(" ("+unidadMedida.nombre+")");

////////////generar tabla de mentas
        	var depto =0;
		    var deptoN ="";
		    var filaProduct="";
		    var mes=0;
		    var mesN="";
		    var mPDeptoMes="0.0";
		    var metaProducto = $.ajax({
		        url:'ajaxSelects?accion=getProductosPresupuestoMeta&nivel='+linkNivel+'&entidad='+linkEntidad+'&tipoPresupuesto='+linkTipoPresupuesto+'&programa='+linkPrograma+'&subprograma='+linkSubPrograma+'&proyecto='+linkProyecto+'&producto='+linkProducto,
		        type:'get',
		        dataType:'json',
		        async:false       
		    }).responseText;
		    metaProducto = JSON.parse(metaProducto);
		    metaProducto=metaProducto.productoPresupuestoMeta;
		    metaProducto.getCantidadPorMesDepto = function( mesB, deptoB ) {
		    	var depto;
		        for( var mes in this ) {
		            if( this.hasOwnProperty( mes ) ) {
		            	depto=this[mes][ 'departamento' ];
		                 if( this[mes][ 'mes' ] == mesB && this[mes][ 'departamento' ] == deptoB )
		                     return  this[mes][ 'cantidad' ];
		            }
		        }
		    }
		  
		    var cant;
		    var sumaMes=[0,0,0,0,0,0,0,0,0,0,0,0,0];
		    var sumaTotal=0;
			for(var j = 0; j < datosDepartamentos.departamentos.length; j++  )
			{
				depto = datosDepartamentos.departamentos[j].deptoPais;
				deptoN = datosDepartamentos.departamentos[j].abrevDepartamento;
				filaProduct+="<tr departamento=\""+depto+"\"><td>"+deptoN+"</td>";
				for (var k = 0; k < datosMeses.meses.length; k++)
				{	
					mes = datosMeses.meses[k].id;
					var flag=0;
					var suma=0;
					cant = metaProducto.getCantidadPorMesDepto(mes,depto)
					if (cant>0){
						filaProduct+='<td><input type="text"  class= "cantidad-depto-mes" size="5px" id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-'+depto+'-'+mes+'" value="'+cant+'"></td>';
						flag=1;
						suma+=cant;
						sumaMes[mes]+=cant;
						sumaTotal+=cant;
					}
						
					if (flag==0) 
						filaProduct+='<td><input type="text" class= "cantidad-depto-mes" size="5px" id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-'+depto+'-'+mes+'" value=""></td>';				    
				}
				filaProduct+='<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-'+depto+'-suma" suma="">'+suma+'</td></tr>';

			}
			filaProduct+=
			'<tr>'+
				'<td>Total Mes</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-1-sumaMes">'+sumaMes[1]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-2-sumaMes">'+sumaMes[2]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-3-sumaMes">'+sumaMes[3]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-4-sumaMes">'+sumaMes[4]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-5-sumaMes">'+sumaMes[5]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-6-sumaMes">'+sumaMes[6]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-7-sumaMes">'+sumaMes[7]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-8-sumaMes">'+sumaMes[8]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-9-sumaMes">'+sumaMes[9]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-10-sumaMes">'+sumaMes[10]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-11-sumaMes">'+sumaMes[11]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-12-sumaMes">'+sumaMes[12]+'</td>'+
				'<td id="'+linkNivel+'-'+linkEntidad+'-'+linkTipoPresupuesto+'-'+linkPrograma+'-'+linkSubPrograma+'-'+linkProyecto+'-'+linkProducto+'-13-sumaMes">'+sumaTotal+'</td>'+
			'</tr>';
				
			$("div [nivel='"+linkNivel+"'][entidad='"+linkEntidad+"'][tipopresupuesto='"+linkTipoPresupuesto+"'][programa='"+linkPrograma+"'][subprograma='"+linkSubPrograma+"'][proyecto='"+linkProyecto+"'][id='producto-"+datosProductos.producto[i].id+"']").find("[producto="+datosProductos.producto[i].id+"]").html(filaProduct);

		}
            
	// /frames/codigocomentado.html
    }

  }

  var eje1 = new Combo();
  document.getElementById('nivel-formulario').addEventListener('focus',eje1.nivelFocus,false);
  document.getElementById('nivel-formulario').addEventListener('change',eje1.nivel,false);
  document.getElementById('entidad-formulario').addEventListener('focus',eje1.entidadFocus,false);
  document.getElementById('entidad-formulario').addEventListener('change',eje1.entidad,false);
  document.getElementById('tipoPrograma-formulario').addEventListener('focus',eje1.tipoProgramaFocus,false); 
  document.getElementById('tipoPrograma-formulario').addEventListener('change',eje1.tipoPrograma,false);
  document.getElementById('programa-formulario').addEventListener('focus',eje1.programasFocus,false); 
  document.getElementById('programa-formulario').addEventListener('change',eje1.programas,false); 
  document.getElementById('subPrograma-formulario').addEventListener('focus',eje1.subProgramasFocus,false); 
  document.getElementById('subPrograma-formulario').addEventListener('change',eje1.subProgramas,false);  
  document.getElementById('proyecto-formulario').addEventListener('focus',eje1.proyectoFocus,false); 
  document.getElementById('proyecto-formulario').addEventListener('change',eje1.proyecto,false);
  document.getElementById('proyecto-formulario').addEventListener('change',eje1.dibujar,false);

$( document ).ready(function() {
	//cargar producto
	$("body").on("change", "#producto_id-crear-producto",function(event){
		var productos = $.ajax({
	    	url:'http://spr.stp.gov.py/ajaxSelects?accion=getProductos&producto='+$("#producto_id-crear-producto").val(),
	      	type:'get',
	      	dataType:'json',
	      	async:false       
	    }).responseText;
    	productos = JSON.parse(productos);
    	productos = productos.productos;
    	
		var unidadesMedida = $.ajax({
			url:'http://spr.stp.gov.py/ajaxSelects?accion=getUnidadesMedida&unidadMedida='+productos[0].codUnidadMedida,
		  	type:'get',
		  	dataType:'json',
		  	async:false       
		}).responseText;
		unidadesMedida = JSON.parse(unidadesMedida);
		unidadesMedida = unidadesMedida.unidadesMedida;
		$("#producto_unidad_medida_id-crear-producto").val(unidadesMedida[0].codigoUnidadMedida);
		$("#producto_unidad_medida_nombre-crear-producto").val(unidadesMedida[0].nombre);
		$("#producto_unidad_medida_nombre-crear-producto").attr("disabled","");
		$("#producto_clase-crear-producto").attr("disabled","");
		event.stopPropagation();
	});
	$("body").on("click", "#crear-producto-boton",function(event){
		var productoPresupuesto= new Object();
		var accion = "insProductoPresupuesto";
		productoPresupuesto.anho=$("#anho-crear-producto").val();
		productoPresupuesto.nivel_id=$("#nivel-crear-producto").val();
		productoPresupuesto.entidad_id=$("#entidad-crear-producto").val();
		productoPresupuesto.tipo_presupuesto_id=$("#tipo-crear-producto").val();
		productoPresupuesto.programa_id=$("#programa-crear-producto").val();
		productoPresupuesto.subprograma_id=$("#subprograma-crear-producto").val();
		productoPresupuesto.proyecto_id=$("#proyecto-crear-producto").val();
		productoPresupuesto.id=$("#producto_id-crear-producto").val();
		productoPresupuesto.producto_id=$("#producto_id-crear-producto").val();
		productoPresupuesto.unidad_medida_id=$("#producto_unidad_medida_id-crear-producto").val();		
		 $.ajax({
		        url: "ajaxInserts?accion="+accion,
		        type: 'POST',
		        dataType: 'json',
		        data: JSON.stringify(productoPresupuesto),
		        contentType: 'application/json',
		        mimeType: 'application/json',
		        success: function (data) {alert("Guardado!")},
		        //error: function(data,status,er) {alert("error: "+data+" status: "+status+" er:"+er);}
		        error: function(data,status,er) {alert("Guardado");}
		 });
		
		event.stopPropagation();
	});
	
	
	
	
//edicion de producto meta
	
	$("body").on("change", ".cantidad-depto-mes",function(event){
		
	      var id = $(this).attr("id");
	      var idParsed = id.split("-");
	      var nivel=idParsed[0];
	      var entidad=idParsed[1];
	      var tipo=idParsed[2];
	      var programa=idParsed[3];
	      var subprograma=idParsed[4];
	      var proyecto=idParsed[5];
	      var producto=idParsed[6];
	      var departamento=idParsed[7];
	      var mes=idParsed[8];
	      var datos;
	      var suma =parseInt(0);
	      var sumaMes =parseInt(0);
	      var sumaTotal =parseInt(0);
	      
	      $("#"+id+"-suma").html(" ");
	     
	      for (var i=0;i<13;i++){
	       if ($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+departamento+"-"+i).val()>0)
	    	   suma+= parseInt($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+departamento+"-"+i).val());
	      }
	      for (var i=0;i<19;i++){
		       if ($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+i+"-"+mes).val()>0)
		    	   sumaMes+= parseInt($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+i+"-"+mes).val());
		      }
	      if ($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+88+"-"+'sumaMese').val()>0)
	    	   sumaMes+= parseInt($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+88+"-"+mes).val());
	      if ($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+99+"-"+mes).val()>0)
	    	   sumaMes+= parseInt($("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+99+"-"+mes).val());
	      
	      for (var i=0;i<13;i++){
		       if (parseInt($("#"+nivel+'-'+entidad+'-'+tipo+'-'+programa+'-'+subprograma+'-'+proyecto+'-'+producto+'-'+i+'-sumaMes').text())>0)
		    	   sumaTotal+= parseInt($("#"+nivel+'-'+entidad+'-'+tipo+'-'+programa+'-'+subprograma+'-'+proyecto+'-'+producto+'-'+i+'-sumaMes').text());
		  }
	      
	      $("#"+nivel+"-"+entidad+"-"+tipo+"-"+programa+"-"+subprograma+"-"+proyecto+"-"+producto+"-"+departamento+"-suma").html(suma);
	      $("#"+nivel+'-'+entidad+'-'+tipo+'-'+programa+'-'+subprograma+'-'+proyecto+'-'+producto+'-'+mes+'-sumaMes').html(sumaMes);
	      $("#"+nivel+'-'+entidad+'-'+tipo+'-'+programa+'-'+subprograma+'-'+proyecto+'-'+producto+'-13-sumaMes').html(sumaTotal);
	    });

});

  
 
