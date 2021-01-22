#!/bin/bash

until [ $(curl -LI localhost:9000/status -o /dev/null -w '%{http_code}\n' -s) == "200" ]
do
    echo 'Publisher is not ready yet'
    sleep 5
done

echo 'Publisher is ready'