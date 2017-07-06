$( document ).ready(function() {
	
	var datosNiveles = $.ajax({
        url:'http://spr.stp.gov.py/ajaxSelects?accion=getNiveles&nivel=12',
        type:'get',
        dataType:'json',
        async:false       
      }).responseText;
      datosNiveles = JSON.parse(datosNiveles);
      datosNiveles.niveles;
      
     var datosEntidad = $.ajax({
          url:'http://spr.stp.gov.py/ajaxSelects?accion=getEntidad&nivel=12&entidad=1',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
        datosEntidad = JSON.parse(datosEntidad);
        datosEntidad=datosEntidad.entidades;
        
    $("#nivel").attr("value",datosEntidad[0].nivel);
    $("#entidad").attr("value",datosEntidad[0].entidad);
	$("#descripcion").html(datosEntidad[0].descripcion);
	$("#abrev").attr("value",datosEntidad[0].abrevEntidad);
	$("#sigla").attr("value",datosEntidad[0].siglaEntidad);
	$("#baseLegal").html(datosEntidad[0].baseLegal);
	$("#mision").html(datosEntidad[0].mision);
	$("#vision").attr("value",datosEntidad[0].vision);
	$("#politica").html(datosEntidad[0].politica);
	$("#objetivo").html(datosEntidad[0].objetivo);
	$("#diagnostico").html(datosEntidad[0].diagnostico);
	

	$("body").on("click", "#listarEntidades",function(event){
		window.location.replace("./entidad.jsp");
	});
	$("body").on("click", "#listarProgramacion",function(event){
		window.location.replace("./programacion.jsp");
	});
	$("body").on("click", "#listarProductos",function(event){
		window.location.replace("./producto.jsp");
	});
	$("body").on("click", "#listarProgramas",function(event){
		window.location.replace("./pnd.jsp");
	});
});