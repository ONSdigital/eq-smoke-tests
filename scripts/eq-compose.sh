#!/bin/bash

curl https://raw.githubusercontent.com/ONSdigital/eq-compose/master/eq.yml > docker-compose.yml

docker-compose -f docker-compose.yml -f author-override.yml up &
pid=$!

function finish {
  echo "Shutting down the server..."

  echo "killing $pid"
  pgrep -P $pid | xargs kill # kills all child processes

  echo "stopping docker containers"
  docker-compose down

  rm docker-compose.yml
}
trap finish INT KILL TERM EXIT

./node_modules/.bin/wait-on $CYPRESS_baseUrl

if [ -z "${CYPRESS_RECORD_KEY-}" ]; then
  yarn test_headless 
else
  yarn test_headless --record
fi