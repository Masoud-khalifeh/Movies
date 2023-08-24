<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 0);

require_once "./db_config.php";

function sanitizeInput($input) {
    return htmlspecialchars(trim($input));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = sanitizeInput($_POST["email"]);
    $name = sanitizeInput($_POST["name"]);
    $password = $_POST["password"];  

    if (!empty($name) && !empty($email) && !empty($password)) {
        
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        
        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $link->prepare($sql);
        $stmt->bind_param("sss", $name, $email, $hashedPassword);

        if ($stmt->execute()) {
            echo "User registered successfully";
        } else {
            echo "Error registering user";
        }

        $stmt->close();
    } else {
        echo "Fields cannot be empty";
    }
} else {
    echo "Invalid request method";
}

$link->close();
?>
