<%--

    Licensed to Jasig under one or more contributor license
    agreements. See the NOTICE file distributed with this work
    for additional information regarding copyright ownership.
    Jasig licenses this file to you under the Apache License,
    Version 2.0 (the "License"); you may not use this file
    except in compliance with the License.  You may obtain a
    copy of the License at the following location:

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

--%>
<jsp:directive.include file="includes/top.jsp" />
  <div style="margin-buttom:5px"></div>  
  <div id="msg" class="success"> 
    <h2><spring:message code="screen.logout.header" /></h2>
    <!-- 
    <p><spring:message code="screen.logout.success" /></p>
    <p><spring:message code="screen.logout.security" /></p> -->
  </div>
    
  <div class="row" style="margin-left:5px;margin-right:5px;margin-top:15px">
                  <div class="col-md-4">

                  <div class="box box-success direct-chat direct-chat-warning">

                    <div class="box-header with-border">

                      <h3 class="box-title">SPR</h3>

                      <div class="box-tools pull-right">                        

                      </div>

                    </div><!-- /.box-header -->


                    <div class="box-body" style="display: block;">

               			 <table id="lineasPorEntidad" class="table table-striped ">
             				 <tr style="background-color: white;">
                 					<td class="text-center cell-bordered2">	
                 						<a href="http://spr.stp.gov.py">
                 							<figure>												
												<i class="fa fa-calendar" style="font-size:8em;color:grey"></i>
												<figcaption></figcaption>
											</figure>
										</a>
									 </td>
							</tr>
              			</table>

                    </div><!-- /.box-body -->

                    <div class="box-footer" style="display: block;">                      
                    </div><!-- /.box-footer-->

                  </div><!--/.direct-chat -->

                </div><!-- /.col -->
           
                
                <div class="col-md-4">

                  <div class="box box-success direct-chat direct-chat-warning">

                    <div class="box-header with-border">

                      <h3 class="box-title">TABLERO</h3>

                      <div class="box-tools pull-right">                        

                      </div>

                    </div><!-- /.box-header -->

                    <div class="box-body" style="display: block;">

               			 <table id="lineasPorEntidad" class="table table-striped ">
                 				<tr style="background-color: white;">
                 					<td class="text-center cell-bordered2">	
                 						<a href="http://spr.stp.gov.py/tablero">
                 							<figure>
												<i class="fa fa-dashboard" style="font-size:8em;color:grey"></i>
												<figcaption></figcaption>
											</figure>
										</a>
									 </td>                    				 
								</tr>
              			</table>

                    </div><!-- /.box-body -->

                    <div class="box-footer" style="display: block;">
						                      
                    </div><!-- /.box-footer-->

                  </div><!--/.direct-chat -->

                </div><!-- /.col -->

                <div class="col-md-4">

                  <div class="box box-success direct-chat direct-chat-warning">

                    <div class="box-header with-border">

                      <h3 class="box-title">REPORTES MOVILES</h3>

                      <div class="box-tools pull-right">                        

                      </div>

                    </div><!-- /.box-header -->


                    <div class="box-body" style="display: block;">

               			 <table id="lineasPorEntidad" class="table table-striped ">
                				<tr style="background-color: white;">
                 					<td class="text-center cell-bordered2">	
                 						<a href="http://movil.stp.gov.py/reportes">
                 							<figure>
												<i class="fa fa-mobile" style="font-size:8em;color:grey"></i>
												<figcaption></figcaption>
											</figure>
										</a>
									 </td>                    				 
								</tr>
              			</table>

                    </div><!-- /.box-body -->

                    <div class="box-footer" style="display: block;">
						                       
                    </div><!-- /.box-footer-->

                  </div><!--/.direct-chat -->

                </div><!-- /.col -->
			</div>
  
<jsp:directive.include file="includes/bottom.jsp" />