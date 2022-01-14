const form = document.getElementById('comments');
// adding data to db
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
       name: form.name.value,
    //    email: form.email.value,
       comment: form.comment.value

    });
    form.name.value = '';
    // form.email.value='';
    form.comment.value = '';

});

// reading from db

const div = document.querySelector('.cont');

renderList = (doc) => {
    var main_div = document.createElement('div');
    var card_body = document.createElement('div');
    var name = document.createElement('h5');
    // var email= document.createElement('p');
    var comment = document.createElement('p');
    main_div.setAttribute('class','card mt-3');
    card_body.setAttribute('class','card-body');
    name.setAttribute('class','card-title');
    //email.setAttribute('class','card-text');
    comment.setAttribute('class','card-text');
    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;
    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);
    div.appendChild(main_div);
}

db.collection('comments').onSnapshot(snap => {
    let changes = snap.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderList(change.doc);
        }
    });
});






// function show() {

//     var name = document.getElementById("name").value;
//     var comment = document.getElementById("comment").value;

//     firebase.database().ref('User/' + name).set({
//         name: name,
//         comment: comment
//     }, function (error) {
//         if (error) {
//             alert("Error");
//         } else {
//             alert("Comment Posted");
//             window.location.reload();
//         }
//     });
// }

// // function retrieve() {
// //     var ref=firebase.database().ref();
// //     ref.on("value", function (snapshot){
// //         console.log(snapshot.val());
// //     })
// // }

// function retrieve() {

//     firebase.database().ref('User/').once('value').then(function (snapshot) { //storing reference as snapshot ->retrieving database elements
//         snapshot.forEach(function (child) {
//             var m = child.val().name;  //id is child of user; name, id, email are values under child id; so-> child [id as child of user] . val() [name, id, email as values under id] . name/id/email
//             var n = child.val().comment;
//             console.log(m+"\n"+n);
//         });
//     }, function (error) {
//         if (error) {
//             alert("Error");
//         } else {
//         }
//     });

// }