import Head from 'next/head';
import Layout from "../components/layout";
import Container from '../components/container';

export default function TerminosYCondiciones(props) {
    
    return (
        <>
            <Head>
                <title>Ualá</title>
            </Head>

            <Layout nav footer>

                <Container className="mt-24 md:mt-36 mb-20">
                    <div className="text-xl w-5/6 ">
                        <div className="">Términos y Condiciones</div>
                    </div>

                    <h1 className="title-3 md:w-5/6 my-4">
                        <div className="">Términos y Condiciones de Uso de la Aplicación Móvil Ualá</div>
                    </h1>

                    
                    <div className="text-justify">
                        <p className="mb-2 text-justify">
                        Los presentes términos y condiciones (en adelante, el “Acuerdo” o “Términos y Condiciones” o “Términos”) constituyen un contrato entre usted (en adelante, el “Usuario”) y Alau Tecnología S.A.U. (en adelante, “Ualá” y, junto con el Usuario, las “Partes”), respecto del uso del servicio de la aplicación Ualá (en adelante, la “App”). Excepto en caso de que resulten expresamente aplicables otros términos y condiciones especiales, los Términos y Condiciones regirán los derechos y obligaciones de las Partes respecto de cualquier producto y/o servicio ofrecido a través de la App (en adelante, los “Servicios”). El Usuario se compromete a leer, comprender y aceptar todas las condiciones establecidas en este Acuerdo, al momento de solicitud de su registro como Usuario de la App. En caso de no encontrarse de acuerdo con los Términos y Condiciones, por favor, absténgase de utilizar los Servicios. Los presentes Términos y Condiciones se considerarán aceptados desde el momento en el que el registro sea aprobado por Ualá, de acuerdo a las Políticas de Alta del Usuario.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">1. OBJETO</h3>
                        
                        La App permite al Usuario administrar y monitorear los Servicios de Ualá, entre los cuales se encuentran, a título enunciativo:
                        <br/><br/>
                        (i) solicitar la emisión de la tarjeta prepaga Ualá (en adelante, las “Tarjetas Ualá”);
                        <br/><br/>
                        (ii) realizar recargas, pagos, extracciones, solicitud de adelantos y demás transacciones que impliquen movimientos de fondos con relación al uso de las Tarjetas Ualá;
                        <br/><br/>
                        (iii) realizar cobros Ualá Bis, transferencias y pagos mediante la lectura de un código QR interoperable;
                        <br/><br/>
                        (iv) monitorear los pagos realizados a través de la App, con códigos QR y con las Tarjetas Ualá de titularidad del Usuario;
                        <br/><br/>
                        (v) recibir pagos o transferencias de dinero desde cuentas propias bancarias, de billeteras virtuales, de otras cuentas de Usuarios Ualá o de cuentas bancarias de terceros;
                        <br/><br/>
                        (vi) realizar pagos o transferencias de dinero hacia cuentas de Usuarios Ualá, hacia otras cuentas bancarias o billeteras virtuales, usando la Clave Virtual Uniforme (“CVU”) como identificadora de clientes y/o alias;
                        <br/><br/>
                        (vii) recibir pagos por la venta de bienes y servicios ofrecidos a terceros, en forma presencial o remota, exclusivamente mediante la utilización del servicio Ualá Bis y previa aceptación de los términos y condiciones de este servicio;
                        <br/><br/>
                        (viii) suspender transitoriamente, solicitar nuevos plásticos o dar de baja las Tarjetas Ualá del Usuario o el registro como Usuario;
                        <br/><br/>
                        (xix) efectuar transferencias de dinero a otros usuarios, a billeteras virtuales y a cuentas bancarias mediante el uso de dispositivos de titularidad del Usuario;
                        <br/><br/>
                        (x) realizar el pago de facturas o recargas de los servicios habilitados en la App;
                        <br/><br/>
                        (xi) solicitar y obtener préstamos personales y realizar el repago de los mismos;
                        <br/><br/>
                        (xii) mantener conversaciones a través de mensajería instantánea con el servicio de atención a usuarios y con otros usuarios;
                        <br/><br/>
                        (xiii) realizar inversiones en Fondos Comunes de Inversión;
                        <br/><br/>
                        (xiv) todos los demás servicios que oportunamente ofrezca Ualá a través de la App.
                        <br/><br/>
                        Ualá no estará obligada a efectuar las operaciones solicitadas por el Usuario cuando la cuenta asociada a la Tarjeta Ualá no cuenten con los fondos suficientes para ello.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">2. COMUNICACIONES</h3>

                        Todas las comunicaciones que se cursen al Usuario, incluyendo sin limitación, las que dispongan cambios en las condiciones establecidas en los presentes y toda otra condición aplicable sobre los Servicios, serán cursadas únicamente a través de la App y/o al correo electrónico indicado por el Usuario al momento de registrarse.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">3. MEDIOS DE UTILIZACIÓN</h3>

                        Los Servicios son prestados a través de Internet por medio de la App, mediante el uso de dispositivos móviles de titularidad del Usuario, y con la participación de terceros prestadores de servicios complementarios como, a título enunciativo, procesadores de pago, redes de tarjetas de crédito y proveedores de servicios de procesamiento automatizado de datos.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">4. REQUISITOS PARA LA UTILIZACIÓN DE LA APP</h3>

                        El Usuario deberá contar con un dispositivo móvil con acceso a Internet, haber completado el registro satisfactoriamente y ser aprobado por Ualá de acuerdo a las políticas de alta de clientes.
                        <br/><br/>
                        El Usuario podrá operar desde cualquier dispositivo móvil en el cual se haya descargado la App luego de haber registrado dicho dispositivo en el sistema de Ualá por los medios previstos a tal fin. El Usuario deberá descargar la App desde las tiendas oficiales habilitadas para tal fin.
                        <br/><br/>
                        El Usuario deberá generar un perfil con una contraseña para acceder a la App (en adelante, la “Cuenta de Usuario”).
                        <br/><br/>
                        Algunos Servicios disponibles a través de la App requerirán de una segunda clave privada de 6 dígitos numéricos para la confirmación de determinadas operaciones (en adelante, la “Clave de Confirmación” y, junto con la contraseña de acceso a la App, las “Claves”). El Usuario deberá generar la Clave de Confirmación siguiendo los pasos establecidos por Ualá a través de la App, y será el único y exclusivo responsable de la confidencialidad de sus Claves, así como también de todas las operaciones y/o actividades llevadas a cabo con las Claves y la Cuenta de Usuario.


                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">5. TRANSFERENCIAS DE FONDOS ENVIADOS DESDE Y HACIA CUENTAS DE PAGO</h3>

                        El Usuario autoriza a Ualá a realizar las transferencias de fondos ordenadas por éste para enviar y recibir transferencias desde y hacia cuentas de Usuarios Ualá, como asimismo, desde y hacia cuentas bancarias, cuentas de pago propias, y cuentas de pago de otros PSPs usando la Clave Virtual Uniforme como identificadora de clientes y/o alias.
                        <br/><br/>
                        Asimismo, el Usuario autoriza a Ualá a realizar la recarga de la Tarjeta Ualá o extracciones de dinero de la cuenta asociada a su Tarjeta Ualá desde la App y a efectuar los movimientos correspondientes para el pago de los Servicios que el Usuario solicite, siempre de acuerdo con los topes y restricciones fijados por Ualá. Ualá no estará obligada a efectuar las operaciones solicitadas por el Usuario cuando la cuenta asociada a la Tarjeta Ualá no cuenten con los fondos suficientes para ello.


                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">6. VALIDEZ</h3>

                        Las transacciones ordenadas por el Usuario únicamente tendrán validez en aquellos casos en los que el Usuario utilice los medios específicamente determinados por Ualá al efecto. No tendrán validez alguna, las instrucciones formuladas a través de cualquier otro medio distinto de los que Ualá determine específicamente a través de la App.
                        <br/><br/>
                        Toda transacción que se efectúe desde la App mediante la Cuenta de Usuario se entenderá realizada personalmente por el Usuario, considerándose las mismas como válidas, legítimas, auténticas y vinculantes, sin necesidad de realizar otro tipo de confirmación.
                        <br/><br/>
                        Ualá podrá utilizar sistemas aptos para acreditar la pertenencia de las transacciones cursadas, y asimismo declara que aplicará sus mejores esfuerzos y las mejores prácticas exigidas por la industria a fin de garantizar la seguridad informática de los sistemas y registros empleados.

                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">7. FECHA DE LAS OPERACIONES</h3>

                        Todas las operaciones efectuadas por el Usuario serán registradas en la fecha y horario en que efectivamente se cursen. En ciertos casos, la fecha u horario de registro de la operación podrá ser posterior al momento en que se haya solicitado su ejecución, dependiendo del tipo de operación.
                        <br/><br/>
                        Asimismo, el registro de la fecha y horario de las operaciones de recarga y extracción de dinero pueden encontrarse sujetas a condiciones adicionales por parte de cada tercero prestador de servicios.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">8. CÓDIGO DE RESPUESTA RÁPIDA (QR)</h3>

                        El Usuario podrá realizar, a través de la App, cobros Ualá Bis, transferencias y pagos mediante la utilización de un código QR interoperable (“Código QR” y/o “Códigos QR”), entendido como código de respuesta rápida que cumple con las reglas de interoperabilidad establecidas por la Interfaz Estandarizada de Pagos (IEP) de acuerdo a la normativa del BCRA, cuya generación y lectura se realiza siguiendo estos estándares.
                        <br/><br/>
                        Todas las operaciones realizadas por el Usuario mediante el uso del Código QR se entenderán consentidas por el Usuario, presumiendo las mismas como válidas, legítimas y auténticas sin necesidad de realizar otro tipo de confirmación.
                        <br/><br/>
                        En ningún caso se podrán realizar transferencias o pagos por un importe superior al saldo disponible en cada momento. El saldo disponible, existente a cada momento, podrá ser consultado a través de la App. El límite de utilización está determinado por el saldo disponible. Sin perjuicio de esto, Ualá podrá establecer medidas de control y protección sobre las operaciones con el fin de resguardar a los Usuarios.
                        <br/><br/>
                        La actividad de Ualá es ajena a las relaciones de consumo entre el Usuario y el proveedor de bienes y/o servicios, en razón de la cual impliquen un pago mediante Código QR a un tercero, no podrán ser en ningún caso revocadas y/o anuladas, salvo en los casos excepcionales en los que una disposición legal así lo establezca expresamente. A todos los efectos, los productos o servicios se entienden adquiridos de los comercios proveedores por lo que cualquier reclamo deberá dirigirse a estos últimos
                        <br/><br/>
                        El Usuario declara reconocer y aceptar que la correcta lectura de un Código QR puede depender de factores externos de carácter técnico y propios del dispositivo móvil que utilice el Usuario, por ejemplo, y a título meramente ejemplificativo: cámara fotográfica, sistema operativo, conexión a Internet, luz, batería, entre otros. Ualá no asume ninguna responsabilidad ni garantiza el acceso y/o uso continuado o ininterrumpido, así como tampoco que el mismo esté exento de errores y/o defectos. En ningún caso recaerá sobre Ualá responsabilidad alguna derivada la interrupción y/o no concreción de pagos y/o transferencias y/o cobros con Códigos QR y/o cualquier otra dificultad técnica externa que pueda impedir la realización de pagos, transferencias y/o cobros mediante la utilización de Códigos QR a través de la App de Ualá.
                        <br/><br/>
                        Ualá no asume ninguna responsabilidad ni se encuentra obligado en forma alguna a asegurar la lectura a través de la App de Códigos QR que no cumplan con los estándares de interoperabilidad dispuestos por el BCRA.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">9. RESPONSABILIDAD POR LOS FONDOS</h3>

                        Ualá mantendrá el 100% (cien por ciento) de los fondos de las cuentas de los Usuarios disponibles en cuentas bancarias a la vista a su nombre en entidades financieras de la República Argentina de su elección. Ualá no será responsable en ningún caso por hechos que afecten la disponibilidad de los fondos depositados en las cuentas recaudadoras y/o por la insolvencia de las entidades que obran en custodia de los mismos.dichas entidades.
                        <br/><br/>
                        Como consecuencia de ello, Ualá no será responsable por hechos o acontecimientos que restrinjan o imposibiliten la libre disponibilidad de los fondos del Usuario. Tampoco Ualá responderá por caso fortuito o por cualquier otra causa de imposibilidad de cumplimiento de los Términos y Condiciones, que no fueran atribuibles a su parte.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">10. IRREVOCABILIDAD</h3>

                        Una vez efectuadas, las operaciones llevadas a cabo por el Usuario no podrán revocarse. La confirmación por parte de Ualá se realizará a través de un mensaje de confirmación para cada operación en particular, el cual se visualizará en la App al concluir cada transacción.
                        <br/><br/>
                        El Usuario libera a Ualá de toda responsabilidad por las operaciones llevadas a cabo a través de su Cuenta de Usuario, y garantiza mantener indemne a Ualá por cualquier reclamo, daño y/o perjuicio derivado directa o indirectamente de la utilización de su Cuenta de Usuario.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">11. PRUEBA DE LAS OPERACIONES</h3>

                        El Usuario acepta que las órdenes impartidas por éste a través de los medios especialmente habilitados al efecto para los Servicios, serán tenidas como prueba de su voluntad de haber realizado las operaciones personalmente.
                        <br/><br/>
                        El Usuario acepta expresamente la información sobre su utilización de los Servicios que surja de los soportes magnéticos y/o electrónicos provistos por Ualá a través de la App y/o de los medios especiales que Ualá disponga a tal efecto.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">12. INCUMPLIMIENTOS DEL USUARIO</h3>

                        La App, los Servicios y los Contenidos sólo podrán ser utilizados con fines lícitos. Ualá prohíbe específicamente cualquier utilización de la App, los Servicios o los Contenidos para:
                        <br/><br/>
                        (i) Suministrar información fraudulenta, datos biográficos incompletos, falsos o inexactos ya sea durante el proceso de registro del Usuario o en cualquier momento durante la vigencia de la relación contractual con Ualá;
                        <br/><br/>
                        (ii) Negarse a proporcionar cualquier información, documentación o justificación de cualquier acción, requerida por Ualá.
                        <br/><br/>
                        (iii) Usar cualquier mecanismo para impedir o intentar impedir el adecuado funcionamiento de la App, los Servicios o los Contenidos.
                        <br/><br/>
                        (iv) Revelar o compartir las Claves con terceras personas, o usar las Claves para propósitos no autorizados.
                        <br/><br/>
                        (v) El uso o intento de uso de cualquier máquina, software, herramienta, agente u otro mecanismo para navegar o buscar en la App, los Servicios o los Contenidos que sean distintos a las herramientas de búsqueda provistos por Ualá en la App.
                        <br/><br/>
                        (vi) Intentar descifrar, descompilar u obtener el código fuente de cualquier programa de software de la App.
                        <br/><br/>
                        (vii) Realizar acciones que contravengan las regulaciones y disposiciones emitidas por el Banco Central de la República Argentina o la Unidad de la Información Financiera y/o cualquier otro organismo público que corresponda.
                        <br/><br/>
                        (viii) Cometer delitos, infracciones, contravenciones y/o daños de cualquier tipo, incluyendo discriminación y/o acoso, a cualquier persona.
                        <br/><br/>
                        El usuario sólo podrá utilizar su Cuenta de Usuario y las Claves para sí y no podrá emplearla para que terceros efectúen transacciones y/o reciban información, ni tampoco para realizar transacciones por cuenta y orden de terceros. Ualá se reserva el derecho de suspender o dar de baja a cualquier Cuenta de Usuario que, a exclusivo criterio de Ualá, no cumpla con los estándares definidos en este Acuerdo, sin que ello genere derecho a resarcimiento alguno.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">13. MEDIDAS EN CASO DE INCUMPLIMIENTO</h3>

                        Ualá podrá realizar una serie de medidas ("las Medidas") con el fin de proteger a Ualá, los empleados y Usuarios, debido a cualquier acción que realice el Usuario según el punto 11, o a criterio exclusivo de Ualá. Las Medidas pueden ser, sin que sea entendida como una lista taxativa: (i) exigir que el Usuario justifique cualquier operación realizada que Ualá considere inusual, sospechosa, fraudulenta, o de mala fe, independientemente de su monto, a fin de proteger a Ualá y/o sus filiales y/o subsidiarias y/o controlantes y/o controladas y/o vinculadas y/o socios y/o accionistas y/o gerentes y/o administradores y/o directores y/o funcionarios y/o empleados y/o dependientes y/o representantes y/o apoderados y/o apoderados legales y/o asesores y/o cualquier otra persona humana o jurídica que pudiera estar relacionada con ella, (ii) proceder a inhabilitar, congelar, cerrar la/s cuenta/s y/o la baja de Servicio/s de cualquier Usuario por el tiempo que Ualá considere necesario para analizar y resolver la situación y sin que ello le genere a Ualá responsabilidad alguna. A su vez Ualá se reserva la facultad de iniciar las denuncias y acciones judiciales que correspondan contra el Usuario; (iii) proceder a retener por tiempo indeterminado los Fondos que se encuentren acreditados y/o que se acrediten en el futuro en la Cuenta del Usuario cuando existan sospechas de ilegalidades, fraude y/ o cualquier otro acto contrario a estos Términos y Condiciones y/o sospechas de violación de preceptos legales por los cuales Ualá deba responder; (iv) resolver, en caso de incumplimiento del Usuario, el presente Contrato y consecuentemente dar de baja la cuenta del Usuario que incumpla estos Términos y Condiciones y/o se tenga sospechas de violación de preceptos legales por los cuales Ualá deba responder.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">14. CONFIDENCIALIDAD</h3>

                        La Cuenta de Usuario y las Claves serán personales, secretos, confidenciales e intransferibles, quedando terminantemente prohibida su divulgación a terceros por parte del Usuario.
                        <br/><br/>
                        En caso de que el Usuario llegase a saber y/o sospechar sobre una vulneración de la confidencialidad de sus Claves, deberá modificarla de inmediato.
                        <br/><br/>
                        El Usuario será el único y exclusivo responsable de la confidencialidad de sus Claves, así como también de todas las operaciones y/o actividades llevadas a cabo con las Claves y la Cuenta de Usuario.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">15. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>

                        Los contenidos de la App, tales como texto, información, gráficos, imágenes, logos, marcas, programas de computación, bases de datos, diseños, APIs, arquitectura funcional y cualquier otro material (en adelante, "el Contenido"), están protegidos por las leyes vigentes en Argentina, incluyendo, pero sin limitación, las leyes sobre derechos de autor, patentes, marcas, modelos de utilidad, diseños industriales y nombres de dominio, se encuentren o no registrados, en el país o en el exterior. Todo el Contenido es propiedad de Ualá y/o de cualquier otra sociedad filial, subsidiaria, sucursal, agencia, representaciones, controlantes, controladas, vinculadas y cualquier persona humana o jurídica que pudiera estar relacionada con Ualá y su contenido. La compilación, interconexión, operatividad y disposición de los contenidos de la App es de propiedad exclusiva de Ualá y/o de sus empresas vinculadas. El Usuario se encuentra autorizado a utilizar, visualizar e imprimir los elementos de la App para su uso personal y no lucrativo, absteniéndose de realizar sobre los mismos cualquier acto de descompilación, ingeniería inversa, modificación, divulgación o suministro. El uso, adaptación, reproducción y/o comercialización no autorizada del Contenido puede encontrarse penado por la legislación vigente en la República Argentina.
                        <br/><br/>
                        El Usuario no copiará ni adaptará el código de programación desarrollado por, o por cuenta de, Ualá para generar y operar la App o los Servicios, el cual se encuentra protegido por la legislación aplicable y vigente en la República Argentina.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">16. PROVEEDOR DE SERVICIOS DE PAGO</h3>

                        Ualá es un Proveedor de Servicios de Pago registrado ante el Banco Central de la República Argentina. En tal carácter, se limita a ofrecer servicios de pago y no se encuentra autorizado a operar como entidad financiera. Los fondos depositados en la cuenta de pago no constituyen depósitos en una entidad financiera, ni cuentan con ninguna de las garantías que tales depósitos puedan gozar de acuerdo con la legislación y reglamentación aplicables en materia de depósitos de entidades financieras.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">17. RESPONSABILIDADES</h3>

                        El Usuario declara y acepta que el uso de la App, de los Servicios y de los Contenidos se efectúa bajo su única y exclusiva responsabilidad.
                        <br/><br/>
                        Ualá se reserva el derecho de suspender y/o interrumpir el servicio a su exclusivo criterio.
                        <br/><br/>
                        UALÁ NO ASUME NINGUNA RESPONSABILIDAD POR EL FUNCIONAMIENTO DEL DISPOSITIVO Y/O EL SOFTWARE UTILIZADOS POR EL USUARIO PARA ACCEDER A LA APP, LOS CONTENIDOS Y/O LOS SERVICIOS, COMO ASÍ TAMPOCO RESPECTO DE AQUELLOS RELACIONADOS Y/U OCASIONADOS POR TERCEROS PRESTADORES DE SERVICIOS DE ACCESO A INTERNET, TELEFONÍA CELULAR Y/U CUALQUIER OTRO SERVICIO OTORGADO POR PERSONAS DISTINTAS A UALÁ.
                        <br/><br/>
                        EN NINGÚN CASO UALÁ SERÁ RESPONSABLE DE CUALQUIER DAÑO INCLUYENDO, PERO SIN LIMITACIÓN, DAÑOS DIRECTOS Y/O INDIRECTOS, LUCRO CESANTE Y/O PÉRDIDA DE CHANCE QUE RESULTEN DEL USO Y/O DE LA IMPOSIBILIDAD DE USO DE LA APP, DE LOS SERVICIOS O DE LOS CONTENIDOS, SIN PERJUICIO DE QUE UALÁ HAYA SIDO ADVERTIDO SOBRE LA POSIBILIDAD DE TALES DAÑOS.
                        <br/><br/>
                        UALÁ EXCLUYE TODA RESPONSABILIDAD POR LOS DAÑOS Y PERJUICIOS DE TODA NATURALEZA QUE PUDIERAN DEBERSE AL ACCIONAR DE TERCEROS NO AUTORIZADOS RESPECTO DE LOS DATOS PERSONALES DE LOS USUARIOS, ASÍ COMO DE LOS CONTENIDOS Y SERVICIOS OFRECIDOS A TRAVÉS DE LA APP.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">18. PRIVACIDAD Y PROTECCIÓN DE LOS DATOS PERSONALES</h3>

                        Cuando se registre en la App, se le pedirá al Usuario que aporte a Ualá cierta información que incluirá, a fines identificatorios y de conocimiento del cliente, entre otras, nombre y apellido, DNI, fecha de nacimiento, nacionalidad, sexo, CUIL o CUIT, domicilio real y de entrega de la tarjeta, número de teléfono celular del dispositivo donde se instala la aplicación, una dirección válida de correo electrónico, entre otros datos personales, además de declaraciones juradas de persona políticamente expuesta y licitud de fondos. Opcionalmente, el usuario podrá proveer CBU de cuenta bancaria de su titularidad a los efectos de realizar recargas o pagos de las Tarjetas Ualá, y otros datos que asistan a Ualá en la elaboración de un perfil crediticio del Usuario. Usted reconoce y acepta que Ualá puede revelar a terceras partes, de forma anónima, cierto conjunto de los datos suministrados por el Usuario para la utilización de los Servicios.
                        <br/><br/>
                        Ualá no revelará a terceras partes sus datos personales sin su consentimiento previo, excepto en la medida en que sea necesario para el cumplimiento de las leyes y/o procedimientos legales vigentes, donde tal información sea relevante.
                        <br/><br/>
                        Ualá se reserva el derecho de ofrecerle servicios y productos de terceros basados en las preferencias que el Usuario haya indicado al momento de registrarse y/o en cualquier momento posterior; tales ofertas pueden efectuarse por Ualá o por terceros.
                        <br/><br/>
                        Por favor consulte la Política de Privacidad de la App para conocer los detalles respecto del tratamiento de sus datos personales.
                        <br/><br/>
                        El Usuario será responsable de todos los usos de su cuenta, tanto si están autorizados o no por el Usuario. El Usuario deberá notificar inmediatamente a Ualá sobre cualquier uso sin autorización de su Cuenta de Usuario y/o las Claves.
                        <br/><br/>
                        Los Usuarios que utilicen los Servicios de Ualá garantizan la veracidad, exactitud, vigencia y autenticidad de la información facilitada, y se comprometen a mantenerlos debidamente actualizados, informando a Ualá sobre cualquier modificación a través de la actualización de la información correspondiente en su Cuenta de Usuario, o poniéndose en contacto a hola@uala.com.ar.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">19. VÍNCULOS A SITIOS DE TERCEROS</h3>

                        La App puede contener vínculos a sitios web y/o aplicaciones de terceros (en adelante, los “Sitios de Terceros”). Ualá no respalda ni garantiza los contenidos de estos Sitios de Terceros. Ualá no es responsable del contenido de los Sitios Terceros y no hace ninguna afirmación relativa al contenido y/o exactitud en estos Sitios de Terceros. Si Usted decide acceder a Sitios de Terceros, lo hace a su propio riesgo.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">20. COSTO DE LOS SERVICIOS</h3>

                        Ualá podrá cobrar comisiones por el mantenimiento y/o uso de los Servicios, previa notificación al Usuario dentro del plazo legal correspondiente, entendiéndose expresamente facultado para efectuar los correspondientes débitos en las cuentas asociadas a las Tarjetas Ualá del Usuario. Las comisiones mencionadas precedentemente no incluyen los costos que aplican las empresas de telefonía celular por los servicios de transmisión de datos.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">21. MODIFICACIÓN DE LOS SERVICIOS</h3>

                        Ualá se reserva el derecho a modificar, restringir y/o suprimir todos o cualquiera de los Servicios brindados a través de la App, en forma temporal o definitiva, sin que estas medidas puedan ser objeto de requerimiento alguno, ni de derecho a reclamar daños o perjuicios por parte del Usuario.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">22. MODIFICACIÓN DE LOS TÉRMINOS Y CONDICIONES</h3>

                        Ualá podrá modificar en cualquier momento los Términos y Condiciones notificando previamente los cambios al Usuario vía mail y/o notificación push en la App y publicando una versión actualizada de dichos Términos y Condiciones en el sitio web www.uala.com.ar con expresión de la fecha de la última modificación. Todos los términos modificados entrarán en vigor en la fecha indicada en la notificación. Dentro de los 10 (diez) días corridos siguientes a la notificación de las modificaciones introducidas, el Usuario podrá comunicar por e-mail si no acepta las mismas; en ese caso quedará disuelto el vínculo contractual. Vencido dicho plazo, se considerará que el Usuario acepta los nuevos Términos y Condiciones y el contrato continuará vinculando a ambas partes.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">23. RESCISIÓN DEL SERVICIO</h3>

                        La prestación de los Servicios tiene una duración indeterminada. Sin perjuicio de lo anterior, Ualá está autorizada para terminar o suspender la prestación de los Servicios y/o de cualquiera de los Contenidos en cualquier momento y sin expresión de causa notificando previamente al Usuario.
                        <br/><br/>
                        El Usuario podrá solicitar el cierre de la Cuenta a través de los canales de comunicación habilitados por Ualá.
                        <br/><br/>
                        Si existieran fondos remanentes, al cierre de la Cuenta, el Usuario deberá transferirlos a la cuenta de su preferencia y/o extraerlos de la misma, dejando la Cuenta Ualá con un saldo de $0 (cero pesos). Luego de transcurridos 90 (noventa) días y si existiesen fondos remanentes, los mismos se categorizarán como “Saldos Inmovilizados” y se procederá al cierre de la cuenta del Usuario.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">24. CESIÓN O USO COMERCIAL NO AUTORIZADO</h3>

                        El Usuario acepta no ceder, bajo ningún título, sus derechos u obligaciones bajo el presente Acuerdo. El Usuario también acepta que no realizará algún uso comercial no autorizado de la App, de los Servicios o de los Contenidos.
                        <br/><br/>
                        Asimismo, el Usuario se compromete a utilizar la App, el Contenido y los Servicios diligentemente y de conformidad con la ley aplicable y vigente de la República Argentina y con este Acuerdo.
                        <br/><br/>
                        Ualá se reserva el derecho, a su exclusivo criterio, de emplear todos los medios legales a su alcance en caso de que el Usuario infrinja cualquiera de estos Términos y Condiciones.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">25. TOTALIDAD DEL ACUERDO</h3>

                        Los presentes Términos y Condiciones, junto con la Política de Privacidad, los términos específicos correspondientes a las Tarjetas Ualá y aquellos que eventualmente se especifiquen para cada Servicio constituyen la totalidad del acuerdo entre el Usuario y Ualá.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        <h3 className="text-blue-250 font-bold my-8">27. DOMICILIO. LEY APLICABLE. COMPETENCIA</h3>

                        Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Toda acción derivada de estos Términos y Condiciones o del uso de la App deberá someterse exclusivamente a la jurisdicción de los tribunales competentes de la República Argentina.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        En caso de declararse la nulidad de alguna de las cláusulas de este Acuerdo, tal nulidad no afectará a la validez de las restantes, las cuales mantendrán su plena vigencia y efecto. A todos los efectos emergentes de estos Términos, Ualá constituye domicilio en Nicaragua 4677, Ciudad Autónoma de Buenos Aires, República Argentina.
                        </p>
                        
                        <p className="mb-2 text-justify">
                        Última actualización: 23 de noviembre de 2021.
                        </p>
                    </div>
                </Container>

            </Layout>

        </>
    );
}
