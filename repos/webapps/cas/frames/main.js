
  $(document).ready(function(){
/*    $( "#listarProgramacion" ).on( "click", function(event) {
      if ($("#listaProgramacion").children().length <= 0 && $(this).attr("class")!="entidad"){
      var datos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxHelper?accion=getEntidades&nivel=12',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
        datos = JSON.parse(datos); 
        var i=0;
        for (i=0;i<datos.entidades.length;i++){
          //$("#listaProgramacion").append("<li class=\"entidad\" id=\""+datos.entidades[i].entidad+"\"><a href=\"#\"><i class=\"fa fa-circle-o\"></i>"+datos.entidades[i].nombreEntidad+"</a></li>");
          $("#listaProgramacion").append("<li class=\"entidad\" id=\""+datos.entidades[i].entidad+"\"><a href=\"#\"><i class=\"fa fa-circle-o\"></i>"+datos.entidades[i].nombreEntidad+"<i class=\"fa fa-angle-left pull-right\"></i></a><ul class=\"treeview-menu\" style=\"display:none\"><li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li><li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li></ul></li>");
        }
      }else{
        ;
      }
    });
    //muestra tipo de presupuesto por anho y entidad
    $("body").on("click", ".entidad",function(event){
      var idEntidad = $(this).attr("id");
      var datos;
      $("#programacion").html(" ");
      var tiposPrograma = $.ajax({
          url:'http://spr.stp.gov.py/ajaxHelper?accion=getTipoPrograma',
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
      tiposPrograma = JSON.parse(tiposPrograma); 
      var i = 0;
      for (i=0;i<tiposPrograma.tiposPrograma.length;i++){
       
        $("#programacion").append("<div class=\"row\" id=\""+tiposPrograma.tiposPrograma[i].codTipoPrograma+"\" dato=\"tipoPrograma\" entidad=\""+idEntidad+"\"><div class=\"col-md-12\"><div class=\"box\" height=\"1000px\"><div class=\"box-header with-border\" height=\"1000px\"><h3 class=\"box-title\" id=\"tituloTipoPrograma\"><button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-plus\"></i></button>"+tiposPrograma.tiposPrograma[i].codTipoPrograma+" ) "+tiposPrograma.tiposPrograma[i].nombreTipoPrograma+"</h3><div class=\"box-tools pull-right\" height=\"1000px\"><button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-plus\"></i></button>                        </div></div><div class=\"box-body\" style=\"display:none\"></div></div></div></div>");
      }
    });
      //muestra programa por tipo de presupueso entidad y anho
    $("body").on("click", "#tituloTipoPrograma",function(event){
      var idEntidad = $(this).parent().parent().parent().parent().attr("entidad");
      var idTipoPrograma = $(this).parent().parent().parent().parent().attr("id");
      var datos;
      var programas = $.ajax({
          url:'http://spr.stp.gov.py/ajaxHelper?accion=getProgramas&nivel=12&entidad='+idEntidad+'&tipoPresupuesto='+idTipoPrograma,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
      programas = JSON.parse(programas); 
      var i = 0;
      $(this).parent().parent().children().next().html(" ");
      for (i=0;i<programas.programas.length;i++){
       
        $(this).parent().parent().children().next().append("<div class=\"row\" id=\""+programas.programas[i].codigoPrograma+"\" dato=\"programa\" tipoPrograma=\""+idTipoPrograma+"\" entidad=\""+idEntidad+"\"><div class=\"col-md-10\"><div class=\"box box-info\" height=\"1000px\"><div class=\"box-header with-border\" height=\"1000px\"><h3 class=\"box-title\" id=\"tituloPrograma\">"+programas.programas[i].codigoPrograma+" ) "+programas.programas[i].nombrePrograma+"</h3><div class=\"box-tools pull-right\" height=\"1000px\"><button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-plus\"></i></button>                         </div></div><div class=\"box-body\" style=\"display:none\"></div></div></div></div>");
      }
    });
    
    $("body").on("click", "#tituloPrograma",function(event){
      var idEntidad = $(this).parent().parent().parent().parent().attr("entidad");
      var idPrograma = $(this).parent().parent().parent().parent().attr("id");
      var idTipoPrograma = $(this).parent().parent().parent().parent().attr("tipoprograma");
      var datos;
      var subprogramas = $.ajax({
          url:'http://spr.stp.gov.py/ajaxHelper?accion=getSubprogramas&nivel=12&entidad='+idEntidad+'&tipoPresupuesto='+idTipoPrograma+'&programa='+idPrograma,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
      subprogramas = JSON.parse(subprogramas); 
      var i = 0;
      $(this).parent().parent().children().next().html(" ");
      for (i=0;i<subprogramas.subprogramas.length;i++){
       
        $(this).parent().parent().children().next().append("<div class=\"row\" id=\""+subprogramas.subprogramas[i].codigoSubprograma+"\" dato=\"subprograma\" tipoPrograma=\""+idTipoPrograma+"\" entidad=\""+idEntidad+"\" programa=\""+idPrograma+"\"><div class=\"col-md-10\"><div class=\"box box-danger\" height=\"1000px\"><div class=\"box-header with-border\" height=\"1000px\"><h3 class=\"box-title\" id=\"tituloSubprograma\">"+subprogramas.subprogramas[i].codigoSubprograma+" ) "+subprogramas.subprogramas[i].nombreSubprograma+"</h3><div class=\"box-tools pull-right\" height=\"1000px\"><button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-plus\"></i></button>                        </div></div><div class=\"box-body\" style=\"display:none\"></div></div></div></div>");
      }
    });
    $("body").on("click", "#tituloSubprograma",function(event){
      var idEntidad = $(this).parent().parent().parent().parent().attr("entidad");
      var idPrograma = $(this).parent().parent().parent().parent().attr("programa");
      var idSubprograma = $(this).parent().parent().parent().parent().attr("id");
      var idTipoPrograma = $(this).parent().parent().parent().parent().attr("tipoprograma");
      var datos;
      var proyectos = $.ajax({
          url:'http://spr.stp.gov.py/ajaxHelper?accion=getProyectos&nivel=12&entidad='+idEntidad+'&tipoPresupuesto='+idTipoPrograma+'&programa='+idPrograma+'&subprograma='+idSubprograma,
          type:'get',
          dataType:'json',
          async:false       
        }).responseText;
      proyectos = JSON.parse(proyectos); 
      var i = 0;
      $(this).parent().parent().children().next().html(" ");
      for (i=0;i<proyectos.proyectos.length;i++){
       
        $(this).parent().parent().children().next().append("<div class=\"row\" id=\""+proyectos.proyectos[i].codigoProyecto+"\" dato=\"proyecto\" tipoPrograma=\""+idTipoPrograma+"\" entidad=\""+idEntidad+"\" programa=\""+idPrograma+"\" subprograma=\""+idSubprograma+"\"><div class=\"col-md-10\"><div class=\"box box-success\" height=\"1000px\"><div class=\"box-header with-border\" height=\"1000px\"><h3 class=\"box-title\" id=\"tituloProyecto\">"+proyectos.proyectos[i].codigoProyecto+" ) "+proyectos.proyectos[i].nombreProyecto+"</h3><div class=\"box-tools pull-right\" height=\"1000px\"><button class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-plus\"></i></button>                        </div></div><div class=\"box-body\" style=\"display:none\"></div></div></div></div>");
      }
    });
    
    $("body").on("click", ".fa-minus",function(event){
      $(this).parent().parent().parent().next().toggle();
      $(this).attr("class", "fa fa-plus");
    });
    $("body").on("click", ".fa-plus",function(event){
      $(this).parent().parent().parent().children().click();
      $(this).parent().parent().parent().next().toggle();
      $(this).attr("class", "fa fa-minus");
    });

      //  event.stoppropagation();
    
        $("body").on("click", ".programa",function(event){
        var idPrograma = $(this).attr("id");
        var idEntidad =$(this).attr("entidad");
        var idTipoPrograma=$(this).attr("tipo");
        if( $(this).attr("active")=="true") {$(this).child("1").siblings().toggle();$(this).attr("active","false");}
       // var idEntidad= $("#programacion .box-body").attr("id");
        var datos;
        $(this).children().children().html(" ");
        if ($(this).children().length <= 1 ){
          var subprogramas = $.ajax({
              url:'http://spr.stp.gov.py/ajaxHelper?accion=getSubprogramas&nivel=12&entidad='+idEntidad+'&tipoPresupuesto='+idTipoPrograma+'&programa='+idPrograma,
              type:'get',
              dataType:'json',
              async:false       
            }).responseText;
            datos = JSON.parse(subprogramas); 
            i=0;
            for (i=0;i<datos.subprogramas.length;i++){
              $(".programa[id="+idPrograma+"][entidad="+idEntidad+"][tipo="+idTipoPrograma+"]").append("<span class=\"subprograma\" id=\""+datos.subprogramas[i].subprograma+"\">"+datos.subprogramas[i].nombreSubprograma+"</span><br>");
            }
            $(".programa[id="+idPrograma+"][entidad="+idEntidad+"][tipo="+idTipoPrograma+"]").focus();
            $(".programa[id="+idPrograma+"][entidad="+idEntidad+"][tipo="+idTipoPrograma+"]").attr("active","true");
         }else{
            ;
         }
        
      //  event.stoppropagation();
        });
*/
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