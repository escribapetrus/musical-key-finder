// DEFINE NOTES ON EACH KEY
const nc = "C, D, E, F, G, A, B";
const nd = "D, E, F#, G, A, B, C#";
const ne = "E, F#, G#, A, B, C#, D#";
const nf = "F, G, A, A#, C, D, E";
const ng = "G, A, B, C, D, E, F#";
const na = "A, B, C#, D, E, F#, G#";
const nb = "B, C#, D#, E, F#, G#, A#";
// DEFINE CHORDS
const cmaj = "C";
const cmin = "Cm";
const csmaj = "C#";
const csmin = "C#m";
const csdim = "C#º";
const dmaj = "D";
const dmin = "Dm";
const dsmaj = "D#";
const dsmin = "D#m";
const dsdim = "D#º";
const emaj = "E";
const emin = "Em";
const edim = "Eº";
const fmaj = "F";
const fmin = "Fm";
const fsmaj = "F#";
const fsmin = "F#m";
const fsdim = "F#º";
const gmaj = "G";
const gmin = "Gm";
const gsmaj = "G#";
const gsmin = "G#m";
const gsdim = "G#º";
const amaj = "A";
const amin = "Am";
const asmaj = "A#";
const asmin = "A#m";
const asdim = "A#º";
const bmaj = "B";
const bmin = "Bm";
const bdim = "Bº";
// DEFINE CHORDS ON EACH KEY
const cc = [cmaj, dmin, emin, fmaj, gmaj, amin, bdim];
const cd = [dmaj, emin, fsmin, gmaj, amaj, bmin, csdim];
const ce = [emaj, fsmin, gsmin, amaj, bmaj, csmin, dsdim];
const cf = [fmaj, gmin, amin, asmaj, cmaj, dmin, edim];
const cg = [gmaj, amin, bmin, cmaj, dmaj, emin, fsdim];
const ca = [amaj, bmin, csmin, dmaj, emaj, fsmin, gsdim];
const cb = [bmaj, csmin, dsmaj, emaj, fsmaj, gsmin, asdim];

//APP
//SELECT KEY
$("body").on("click", function() {
    var selKey = $("input:checked").val();
//CHANGE DISPLAY TO selKey    
    $(".key").text(selKey);
// //CHANGE NOTES ACCORDING TO KEY
    if (selKey === "C") {
        $("#keyNotes").text(nc);
    }
    else if (selKey === "D") {
        $("#keyNotes").text(nd);
    }
    else if (selKey === "E") {
        $("#keyNotes").text(ne);
    }
    else if (selKey === "F") {
        $("#keyNotes").text(nf);
    }
    else if (selKey === "G") {
        $("#keyNotes").text(ng);
    }
    else if (selKey === "A") {
        $("#keyNotes").text(na);
    }
    else if (selKey === "B") {
        $("#keyNotes").text(nb);
    };
//CHANGE CHORDS ACCORDING TO KEY
    var ju = document.getElementsByClassName("chord");
    switch(selKey){
        case "C":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = cc[i];
        }
        break;
        case "D":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = cd[i];
        }
        break;
        case "E":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = ce[i];
        }
        break;
        case "F":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = cf[i];
        }
        break;
        case "G":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = cg[i];
        }
        break;
        case "A":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = ca[i];
        }
        break;
        case "B":
            for (var i = 0; i < 7; i++) {
            ju[i].textContent = cb[i];
        }
        break;                
    };
});