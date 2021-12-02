#!/bin/bash

function get_to_docker_container(){
    docker exec -it aoc2021-node-app-1 /bin/bash
}


get_to_docker_container