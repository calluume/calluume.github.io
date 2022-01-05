<html lang="en">
    <head>
        <title>Callum Evans</title>
        <meta name="viewport" content="width=device-width, user-scalable=no"/>
        <link rel="icon" href="img/icon.png">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Yrsa:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
        <link href="css/style.css" rel='stylesheet' type='text/css'/>
        <?php
        if( !isset($_POST['redirectTo']) ) {
            $redirect = 'index.php';
        } else {
            $redirect = $_POST['redirectTo'];
        }
        ?>
        <meta http-equiv="refresh" content="3;URL=<?php echo $redirect;?>">
    </head>
    <body>
        <div class="message-div">
            <?php
                if($_POST['lang'] == "fr"){
                    echo(
                        "<h1 class='message-title'>Message envoyé.</h1>
                        <p class='message'>Si vous n'êtes pas redirigés, cliquez <a href=" . $redirect . "><i>ici</i></a>."
                    );
                } else {
                    echo(
                        "<h1 class='message-title'>Message sent.</h1>
                        <p class='message'>If you are not redirected back shortly, click <a href=" . $redirect . "><i>here</i></a>."
                    );
                }
            ?>
        </div>
    </body>
</html>