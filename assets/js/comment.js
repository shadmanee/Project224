function show() {

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    firebase.database().ref('User/' + name).set({
        name: name,
        comment: comment
    }, function (error) {
        if (error) {
            alert("Error");
        } else {
            alert("Comment Posted");
            window.location.reload();
        }
    });
}

// function retrieve() {
//     var ref=firebase.database().ref();
//     ref.on("value", function (snapshot){
//         console.log(snapshot.val());
//     })
// }

function retrieve() {

    firebase.database().ref('User/').once('value').then(function (snapshot) { //storing reference as snapshot ->retrieving database elements
        snapshot.forEach(function (child) {
            var m = child.val().name;  //id is child of user; name, id, email are values under child id; so-> child [id as child of user] . val() [name, id, email as values under id] . name/id/email
            var n = child.val().comment;
            console.log(m+"\n"+n);
        });
    }, function (error) {
        if (error) {
            alert("Error");
        } else {
        }
    });

}