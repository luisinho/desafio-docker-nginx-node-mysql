# Desafio docker, nginx, nodejs e mysql

# Sobre o projeto
  
Quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js. 
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela.
O retorno da aplicação node.js para o nginx deverá ser:
**Full Cycle Rocks!**
**Lista de nomes cadastrada no banco de dados.**

# Images criadas e utilizadas no docker compose do projeto
  
   https://hub.docker.com/repository/docker/luisq/db-mysql/general

   https://hub.docker.com/repository/docker/luisq/node-app/general

   https://hub.docker.com/repository/docker/luisq/nginx-app/general
  


