<?php
    include("header.php");

    if(isset($_POST['victoire'])){
        if($_POST['victoire'] == 1) $j = $_POST['J1'];
        else $j = $_POST['J2'];
        echo "Le gagant est <strong>".$j."</strong>, Félicitation !";
    }

    elseif(isset($_POST['joueur1']) && isset($_POST['joueur1'])){
        $joueur1 = $_POST['joueur1'];
        $joueur2 = $_POST['joueur2'];

        echo '<form id="form-victoire" method="post">
                    <input type="hidden" id="victoire" name="victoire">
                    <input type="hidden" name="J1" value="'.$joueur1.'">
                    <input type="hidden" name="J2" value="'.$joueur2.'">
            </form>';

        $pos1 = 0;
        $pos2 = 0;

        $val = 1;
        echo "<div class='conteneur'><table>";
        for($i = 0; $i < 10; $i++){
            echo "<tr>";
            for($y = 0; $y < 5; $y++){
                echo '<td class="cases" id="case-'.$val.'">'.$val.'</td>';
                $val++;
            }   
            echo "</tr>";
        }
        echo "</table>";

        ?>
            <button id="btn-de" type="button" onClick="lancerDe(1, false)">Lancer le dé</button></div>
        <?php

    }
    else{
        ?>
            <form class="form" action="" method="post">
                <div>
                    <label for="joueur1">joueur 1</label>
                    <input type="text" name="joueur1" id="joueur1">
                </div>
                <div>
                    <label for="joueur2">joueur 2</label>
                    <input type="text" name="joueur2" id="joueur2">
                </div>
                <input type="submit" value="Valider">
            </form>
        <?php
    }



    include("footer.php");

