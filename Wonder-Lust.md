run enviroment
docker-compose up --build

create a new branch
git checkout -b faeat/auth-endpoits

commit format
git commit -m"feat:added signup endpoints"

nodemon --exec "docker-compose up --build" --watch .

watchexec -r docker-compose up --build