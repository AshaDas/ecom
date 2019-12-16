<?php
class Product {
    public $id;
    public $name;
    public $photo;
    public $price;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $arrayOfProducts = array();

    while($row = $result->fetch_assoc()) {
        $product = new Product();
        $product->id = $row["id"];
        $product->name = $row["name"];
        $product->photo = $row["photo"];
        $product->price = $row["price"];

        array_push($arrayOfProducts, $product);
    }

    header('Content-type: application/json');
    echo json_encode( $arrayOfProducts );
} else {
    echo json_encode( array() );
}
$conn->close();
?>