function error(msg)
{
    document.getElementById("error").innerHTML = msg;
}
	
function warn(msg)
{
    document.getElementById("warn").innerHTML = msg;
}

function setLetterCase(characters)
{
    var refined = "";
    var comma = characters.split(',');
    for(var c = 0; c < comma.length; c++)
    {
        var space =  comma[c].split(' ');
        if(space[0].length > 0)
        {
            for(var s = 0; s < space.length; s++) refined += " " + space[s].charAt(0).toUpperCase() + space[s].substring(1).toLowerCase();
            refined += ",";
        }
    }
    return refined;
}

function trackLocation()
{
    var cnic = document.getElementById("cnic");
    var val = cnic.value.trim();
    if(val.length != 15) 
    {
        warn("Example: 12345-6789012-3");
        return error("CNIC should be 15 digit long including dashes");
    }
    error("");
    warn("");
    var Location = document.getElementById("Location");
    var Gender = document.getElementById("Gender");
    Gender.innerHTML = "Gender: " + gender(val);
    Location.innerHTML = "Residence: " + setLetterCase(locate(val));
}
