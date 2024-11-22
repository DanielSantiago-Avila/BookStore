<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

header("Content-Type: application/json");
$servidor = "localhost"; // Asegúrate de usar localhost sin el puerto
$usuario = "root";
$contrasenia = "";
$nombreBaseDatos = "bookstore";

$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// Verificar conexión
if ($conexionBD->connect_error) {
    die(json_encode(["success" => 0, "message" => "Conexión fallida: " . $conexionBD->connect_error]));
}

//--------------------------------LOGIN----------------------------
if (isset($_GET["consultarempleado"])) {
    $data = json_decode(file_get_contents("php://input"));
    $usuario = $data->usuario;
    $contrasena = $data->contrasena;
    $sqlEmpleaados = mysqli_query($conexionBD, "SELECT * FROM empleados WHERE usuario = '$usuario' AND contrasena = '$contrasena'");
    if (mysqli_num_rows($sqlEmpleaados) > 0) {
        $empleaados = mysqli_fetch_all($sqlEmpleaados, MYSQLI_ASSOC);
        echo json_encode($empleaados);
    } else {
        echo json_encode(["success" => 0, "message" => "Usuario o contraseña incorrectos"]);
    }
}

//---------------------------Clientes----------------------
if (isset($_GET["allclientes"])) {
    $sqlClientes = mysqli_query($conexionBD, "SELECT * FROM clientes");
    if (mysqli_num_rows($sqlClientes) > 0) {
        $clientes = mysqli_fetch_all($sqlClientes, MYSQLI_ASSOC);
        echo json_encode($clientes);
    } else {
        echo json_encode([["success" => 0]]);
    }
}

if (isset($_GET["insertarcliente"])) {
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $dpi = $data->dpi;
    $telefono = $data->telefono;
    $correo = $data->correo;
    if ($nombre != "" && $dpi != "") {
        $sqlEmpleaados = mysqli_query($conexionBD, "INSERT INTO clientes (nombre, apellido, dpi, telefono, correo) VALUES ('$nombre', '$apellido', '$dpi', '$telefono', '$correo')");
        echo json_encode(["success" => 1]);
    }
    exit();
}

if (isset($_GET["actualizarcliente"])) {
    $data = json_decode(file_get_contents("php://input"));
    $id = (isset($data->id)) ? $data->id : $_GET["actualizarcliente"];
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $dpi = $data->dpi;
    $telefono = $data->telefono;
    $correo = $data->correo;
    $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE clientes SET nombre='$nombre', apellido='$apellido', dpi='$dpi', telefono='$telefono', correo='$correo' WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultarcliente"])) {
    $sqlClientes = mysqli_query($conexionBD, "SELECT * FROM clientes WHERE id=" . $_GET["consultarcliente"]);
    if (mysqli_num_rows($sqlClientes) > 0) {
        $Clientes = mysqli_fetch_all($sqlClientes, MYSQLI_ASSOC);
        echo json_encode($Clientes);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

// Borrar cliente
if (isset($_GET["borrarcliente"])) {
    $sqlEmpleaados = mysqli_query($conexionBD, "DELETE FROM clientes WHERE id=" . $_GET["borrarcliente"]);
    if ($sqlEmpleaados) {
        echo json_encode(["success" => 1]);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

//-----------------------------------Inventario-----------------------------------
if (isset($_GET["alllibros"])) {
    $sqlinventario = mysqli_query($conexionBD, "SELECT inventario_libros.id, inventario_libros.nombre_libro, inventario_libros.autor, inventario_libros.tipo, inventario_libros.disponibilidad, clientes.nombre FROM inventario_libros LEFT JOIN clientes ON inventario_libros.id_cliente = clientes.id;");
    if (mysqli_num_rows($sqlinventario) > 0) {
        $inventario = mysqli_fetch_all($sqlinventario, MYSQLI_ASSOC);
        echo json_encode($inventario);
    } else {
        echo json_encode([["success" => 0]]);
    }
}

if (isset($_GET["insertarlibro"])) {
    $data = json_decode(file_get_contents("php://input"));
    $nombre = $data->nombre;
    $autor = $data->autor;
    $tipo = $data->tipo;
    if ($nombre != "" && $autor != "") {
        $sqlEmpleaados = mysqli_query($conexionBD, "INSERT INTO inventario_libros (nombre_libro, autor, tipo, disponibilidad) VALUES ('$nombre', '$autor', '$tipo', 'Disponible')");
        echo json_encode(["success" => 1]);
    }
    exit();
}

if (isset($_GET["borrarlibro"])) {
    $sqlinventario = mysqli_query($conexionBD, "DELETE FROM inventario_libros WHERE id=" . $_GET["borrarlibro"]);
    if ($sqlinventario) {
        echo json_encode(["success" => 1]);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}
if (isset($_GET["rentarlibro"])){ 
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["rentarlibro"];
    $disponibilidad=$data->disponibilidad;
    echo $disponibilidad;
    $id_cliente=$data->id_cliente;
    if(($id_cliente!="")){
        $sqlinventario = mysqli_query($conexionBD,"UPDATE inventario_libros SET `inventario_libros`.`disponibilidad`='$disponibilidad', `inventario_libros`.`id_cliente`='$id_cliente' WHERE `inventario_libros`.`id`='$id'");
        echo json_encode(["success"=>1]);
        exit();
    }else {
        $sqlinventario = mysqli_query($conexionBD,"UPDATE inventario_libros SET `inventario_libros`.`disponibilidad`='$disponibilidad', `inventario_libros`.`id_cliente`=null WHERE `inventario_libros`.`id`='$id'");
        echo json_encode(["success"=>1]);
    }
}
if (isset($_GET["consultarlibro"])) {
    $sqlinventario = mysqli_query($conexionBD, "SELECT * FROM inventario_libros WHERE id=" . $_GET["consultarlibro"]);
    if (mysqli_num_rows($sqlinventario) > 0) {
        $inventario = mysqli_fetch_all($sqlinventario, MYSQLI_ASSOC);
        echo json_encode($inventario);
        exit();
    } else {
        echo json_encode(["success" => 0]);
    }
}

if (isset($_GET["actualizarlibro"])) {
    $data = json_decode(file_get_contents("php://input"));
    $id = (isset($data->id)) ? $data->id : $_GET["actualizarlibro"];
    $nombre_libro = $data->nombre_libro;
    $autor = $data->autor;
    $tipo = $data->tipo;
    $sqlinventario = mysqli_query($conexionBD, "UPDATE inventario_libros SET nombre_libro='$nombre_libro', autor='$autor', tipo='$tipo' WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

//---------------------------Empleados----------------------------

// Consulta todos los registros de la tabla empleados
if (isset($_GET["allempleados"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM empleados ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }
}



?>