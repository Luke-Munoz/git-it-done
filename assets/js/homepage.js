var getUserRepos = function() {
    fetcb("https://api.github.com/users/octocat/repos")
};

getUserRepos();