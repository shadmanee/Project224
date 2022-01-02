function search() 
{
    var id= document.getElementById("id1").value;

firebase.database().ref('User/'+ id).once('value').then(function(snapshot) {
                if (snapshot.exists()) {
                     var name_ = snapshot.val().name;
                     var id_ = snapshot.val().id;
                    var mail_ = snapshot.val().email;
                      document.getElementById("name").value = name_;
                      document.getElementById("id").value = id_;
                      document.getElementById("email").value =  mail_;
                }
                else
                {

                }
        }, function(error) {
            if (error) {

            } else {

            }
          });
}

function delete_()
{
    var del_user = document.getElementById("for_del").value;
    let userRef = firebase.database().ref('User/' + del_user);
    userRef.remove();
    alert("Successfully Removed");
}
function all_student_view()
{

    firebase.database().ref('User/').once('value').then(function(snapshot) {
        snapshot.forEach(function(child) {
            var m= child.val().id;
            var n= child.val().name;
            var o= child.val().email;
            alert(m + " "+ n+ " "+ o);


        });
        }, function(error) {
            if (error) {
            } else {

            }
          });

}

function show() {

    var name = document.getElementById("name").value;
    var id= document.getElementById("id").value;
    var email= document.getElementById("email").value;


     firebase.database().ref('User/' + id).set({
            name : name,
            id : id,
            email : email
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("DONE");
              
           
            }
          });
 } 

