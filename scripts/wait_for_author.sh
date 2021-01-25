#!/bin/bash

until [ $(curl -LI localhost:3000/status -o /dev/null -w '%{http_code}\n' -s) == "200" ]
do
    echo 'Author is not ready yet'
    sleep 5
done

echo 'Author is ready'