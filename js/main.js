function test(){
  console.log('card-header');
}
function getProfile(){
        var userName = document.getElementById('searchUser').value;
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+userName, true)
        xhr.onload = function(){
          if (this.status == 200) {
            console.log('here:'+this.responseText);
            var user = JSON.parse(this.responseText);
            
            var profileOutput = '<div class="card border-dark mb-3"">' +
                                  
                                    '<h5 class="card-header">' + user.name +'</h3>' +
                                  
                                  '<div class="card-body">' +
                                    '<div class="row">' +
                                      '<div class="col-md-3 border-dark">' +
                                        '<img class="thumbnail-avatar border-dark" src="'+ user.avatar_url+'">' +
                                        '<br><br>' +
                                        '<a target="_blank" href = "'+user.html_url+'" class ="btn ' + 'btn-primary btn-block btn-dark bg-dark">GET PROFILE</a>' +
                                      '</div>' +
                                      '<div class="col-md-9">' +
                                        '<span class="badge badge-pill badge-primary">Public Repos: '+user.public_repos +'&nbsp;</span>'+
                                        '<span class="badge badge-pill badge-info">Public gists: '+user.public_gists+'&nbsp;</span>'+
                                        '<span class="badge badge-pill badge-success">Followers: '+user.followers+'&nbsp;</span>' +
                                        '<span class="badge badge-pill badge-danger">Following: '+ user.following+'&nbsp;</span>' +
                                        '<br><br>'+
                                        '<ul class="list-group">'+
                                          '<li class="list-group-item">Company: ' +user.company+ '</li>'+
                                          '<li class="list-group-item">Website/blog: <a href="'+ user.blog+'" target="_blank">'+ user.blog+'</a></li>'+
                                          '<li class="list-group-item">Location: '+ user.location +'</li>'+
                                          '<li class="list-group-item">Member Since: '+ user.created_at+'</li>'+
                                        '</ul>'+
                                      '</div>' +
                                    '</div>' +
                                    '</div>' +  
                                    
                                  '</div>' +

                                '</div>'+
                                '<div id="userRepos">' +

                                '</div>';
            document.getElementById('profile').innerHTML = profileOutput;
            var xhrRepos = new XMLHttpRequest();
            xhrRepos.open('GET', 'https://api.github.com/users/'+userName +'/repos', true); 
            xhrRepos.onload = function(){
              if(this.status == 200){
                console.log(this.responseText);
                var repos = JSON.parse(this.responseText);
                var output = '<h3 class="page-header">User Repositories</h3>';
                for(var i in repos){
                  output += '<div class="card">'
                          +'<div class="card-body row"><div class="col-md-4"><strong>'+repos[i].name+'</strong></div>'
                          
                         + '<div class="col-md-4"><span class="badge badge-pill badge-primary">Forks :'+repos[i].forks_count+'</span>'
                         + '<span class="badge badge-pill badge-success">Watchers :'+repos[i].watchers_count+'</span>'
                         + '<span class="badge badge-pill badge-dark">Stars :'+repos[i].stargazers_count+'</span></div>'
                          + '<a class ="btn btn-primary btn-dark bg-dark" target="_blank" href="'+repos[i].html_url
                          +'">Repo Page</a></div></div></div>'

                         
                }

                
                            ;
                document.getElementById('userRepos').innerHTML = output;

              }
            }
            xhrRepos.send();
          }

        }
        xhr.send();
      }
