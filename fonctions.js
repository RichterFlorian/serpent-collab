var pos1 = 1
var pos2 = 1

function lancerDe(j, test){
    var de = ((Math.random() * 5 + 1)).toFixed(0)
    if(j == 1) {
        if(!test) clearColor(pos1)
        
        pos1 += parseInt(de) 
        if(pos1 == 50) {

            if(!test) endGame(1)
        }
        if(pos1 > 50) pos1 = 25

        if(pos1 == 37) pos1 == 12
        if(pos1 == 14) pos1 == 7
        if(pos1 == 46) pos1 == 33

        if(pos1 == 20) pos1 == 35
        if(pos1 == 2) pos1 == 17
        if(pos1 == 31) pos1 == 43

        if(!test) changeColor(2, pos1)

        return pos1
    }

    else {
        if(!test) clearColor(pos2)

        pos2 += parseInt(de)
        if(pos2 == 50) {
            if(!test) endGame(2)
        }

        if(pos2 > 50) pos2 = 25

        if(pos2 == 37) pos2 == 12
        if(pos2 == 14) pos2 == 7
        if(pos2 == 46) pos2 == 33

        if(pos2 == 20) pos2 == 35
        if(pos2 == 2) pos2 == 17
        if(pos2 == 31) pos2 == 43

        
        if(!test) changeColor(1, pos2)

        return pos2
    }
}

function changeColor(j, pos){
    if(j == 1){
        $("#case-" + pos).css("background-color", "red")
        $("#btn-de").attr('onClick', 'lancerDe(1, false)')
    }
    else{
        $("#case-" + pos).css("background-color", "blue")
        $("#btn-de").attr('onClick', 'lancerDe(2, false)')
    }
}

function clearColor(pos){
    $("#case-" + pos).css("background", "none")
}

function endGame(j){
    $('#victoire').val(j)
    $('#form-victoire').submit()
}

module.exports = {lancerDe}