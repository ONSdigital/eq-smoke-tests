#!/bin/bash

until [ $(curl -LI localhost:4000/status -o /dev/null -w '%{http_code}\n' -s) == "200" ]
do
    echo 'The API is not ready yet'
    sleep 5
done

echo 'The API is ready'