<!DOCTYPE html>

<html>
    <head>
        <meta charset = "utf-8">
        <title> Web </title>#
    </head>
    
    
    <body>
        <?php
           /* foreach ($_POST as $key => $value){
                echo $key.'='.$value.'<br />';
            }
            */

            $servername = "127.0.0.1";
            $username = "admin";
            $password = "admin";
            $dbname = "myDb";

            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 

            $sql = "INSERT INTO users (firstname, lastname)
            VALUES ('" . $_POST["firstNameI"] . "', '" . $_POST["lastNameI"] . "')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();

        ?>
        
        
    </body>

</html>