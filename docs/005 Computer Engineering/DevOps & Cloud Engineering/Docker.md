---
title: Docker
share: true
---
# What is Docker?
Docker is a containerization service.

[Docker Reference Cookbook](../../002%20Inbox/Docker-Reference-Cookbook.md)

# Terminologies and Definitions
1. Containers
2. Virtual Machine
3. Similarities or differences between containers and virtual machines
4. asd
5. as
6. das
7. da
8. sda
9. s
10. d

# Basics of Docker Architecture

# Working with Docker

## Basic Commands

### Listing Containers


### Listing Images


### Listing Volumes

### Pulling a Docker Image
**Description:** Used to download a docker image from the docker repository. 
**Command:** `docker pull image:tag`

```shell
docker pull node:latest
```

**Output**

```shell
as
as
as
as
as
as
as
as
as
as
as
```

Docker images are pulled in parts called <>. If a part pre-exists, it will not be downloaded again. Docker simply uses the previously downloaded part, even it was downloaded as part of another image. This ensures that there are no duplication and/or redundant image files in the system.

When a pull request is made to the docker repository, if the whole image (or parts of it) already exists, docker does not download the image (or the existing parts) once again. Instead, prints to the console that the image pre-exists.

Following is the case where the image preexisted locally when `docker pull node:latest` is run.

```shell
latest: Pulling from library/node
Digest: sha256:f62cd4433edc4b397218d9bc005a2f2865d7827753fd480a166e247127384900
Status: Image is up to date for node:latest
docker.io/library/node:latest
```

## Building Images with Dockerfile
**Pull a container image from a repository:** `docker pull image:tag`
**Run a container:** `docker run image:tag`
**Docker ps command:** `docker ps <flags>` --> `docker ps -a` (all containers, running or not)
**Docker stop command:** `docker stop <container_name/container_id>`
**Docker rm command:** `docker rm <container_name/container_id>`
**List local images:** `docker images` or `docker images ls`
**Execute a command on a container:** `docker exec <container_name/container_id> <command>`
**Running in detached mode:** `docker run -d image:tag`
**Attach a detached container:** `docker attach <container_name/container_id>`
