---
# Basic Note Frontmatter
title: Docker
tags: [Reference]
description: "Get up and running with one of the most popular containerization service"
# Site Configurations
share: true
sidebar_position: 1
# Dataview Fetch Fields
content_type: MOC
content_topics:
 - Dev-Ops
 - Containerization
---
```mdx-code-block
import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';
```
## Why Containers?
Containers are the talk of the town these days. It is no secret that in the recent years a lot of businesses have started to adopt containerization technology and are starting to reap the benefits out of it. To understand why containerization came to existence, it is required to understand the problems that it aimed to fix in the industry.

### Age of Bare-Metal Hardware
Applications and services form the basis of all enterprises and businesses. These applications and services run on servers. And by convention, due to several operational best practices, one server runs only one application. This meant that for `n` number of applications, `n` number of servers were required to be bought, licensed for, set-up, hosted, maintained, patched and decommissioned by the IT operations team.

This might not sound like a tedious and an error prone task, but the following list captures some of the shortcomings of this method.
1. **Capacity Calculations** - Miscalculation (underestimation/overestimation) of the capacity needed to host and serve the application.
2. **Untapped Potential** - Closely related to the capacity calculation, if the required capacity is overestimated, the hardware and the capacity of the server goes underutilized.
3. **Service Constraints** - The opposite end of the spectrum of untapped potential is being bottlenecked by the hardware due to insufficient space for the application to grow. To circumvent this, IT bought big and bigger hardware, which circles back to the resource being underutilized.
4. **Licensing Cost** - Often operating systems like those that run enterprise grade applications cost a lot of money to buy and maintain.
5. **Patch Work** - Patching the operating systems and application means that the service had to be taken down completely and worked on.

### Virtualization to the rescue

#### VMs, the first step in virtualization
At the time when the operations team were so frustrated about the single-host, bare-metal hardware architecture, [VMware](https://www.vmware.com/) came up with the solution called as Virtual Machines. Virtual Machines (VMs) are ways to run multiple, isolated operating systems in a single operating system. This shook the industry overnight (for the better of course). The following are some of the advantages when it comes to VMs over bare-metal hardware.
- Each machine (server) could now host as many application as the server's resources allow.
- This reduced the need to procure new servers for each of the new application that the business decides to implement.
- The environments in which these applications reside (called the virtual machine) came with its own operating system, meaning full isolation and data security.
- This enabled companies to fully utilize their existing infrastructure.

However, VMs also had some issues and the following are some of the shortcomings.
1. **Wasted Space and Potential** - As each VM comes with its own Operating System, they tend to take up space that could be used by the application itself.
2. **Licensing Cost** - As each VM has to come with its own Operating System, it means that each of those operating systems cost money to buy and patch.
3. **Operational Constraints** -  VMs are less portable and are slow to boot. This was a nightmare for teams that manage a hybrid deployment between cloud and on-premises infrastructure.

#### The Good, the Better and Containers
Containers came into existence to fix the problems that VMs had. In a way Containers are like VMs, in that they provide isolation between the applications and the host hardware and operating system. But, they solve some of the crucial pain points of the previous 2 computing paradigms namely bare-metal and virtual machines, which is tabulated below.

| The Pain Point                                | Containers and Answers                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clunky OS and Dependencies                    | Containers share the the same OS as the Host Hardware. There is no duplication of the OS for each and every instance of an application being deployed in containers. This also means that there is no additional cost and overhead of maintaining the OS Licenses for each and every instance (bare-metal or VM).                                                              |
| Capacity Miscalculations and Utilization Gaps | Containers utilize only the resources allocated to them. All remaining resources are available for utilization by other containers. This ensures that no resource goes wasted in capacity.                                                                                                                                                                                     |
| Portability and Scaling                       | Being lightweight and conforming to a standard (usually follow a set standard), containers are extremely portable, where almost all cloud providers allow running containers with little to no headway in setting up the environment. Moreover, as containers are units of operations, multiple containers can be deployed thus horizontally scaling the operational capacity. |
| Operational Speed                             | As containers share the kernel with the operating system, they are much faster than VMs to boot-up and get to an operational state.                                                                                                                                                                                                                                                                                                                                                                                |

:::tip About Dependencies and Libraries
All operating systems and virtual environments require certain supporting tools to keep the machine running. These are always required no matter the technology used, may it be bare-metal hosts, VMs or containers. 
:::

### So, Which is the best?
Both virtualization technologies VMs and Containers solve some of the crucial problems faced by deploying to bare-metal instances. In an ideal world, containers are not directly deployed onto bare-metal instances. Instead, Bare-metal instances host VMs, which in turn host containers. This brings the best of both worlds while maintaining operational best practices. 

**Read More:** [Explore the benefits of containers on bare metal vs. on VMs | TechTarget](https://www.techtarget.com/searchitoperations/tip/Explore-the-benefits-of-containers-on-bare-metal-vs-on-VMs)

![BMs-VMs-Containers.png](../../BMs-VMs-Containers.png)

---
## Introduction to Docker
Containerization technology has been around for longer before Docker popularized it. But it was Docker which made the containerization technology accessible to the common people.

### Docker - The Technology vs Docker - The Company
The term Docker could refer to two things,
1. Docker, Inc. - The company behind developing the product.
2. [Docker](https://www.docker.com/) - One of the the products the company offers.

#### A brief history about Docker, Inc.
Docker, Inc is an American technology company that develops tools around the containers and technologies that enable it. The company was founded in 2008 with the name **dotCloud** by Kamel Founadi, Solomon Hykes and Sebastian Pahl in Paris and later moved to the US in 2010. The company was renamed to Docker in 2013. 

Check out more about the company through [Docker, Inc. website](https://www.docker.com/company/). The above paragraph is condensed from Wikipedia, [check here for the Wikipedia article](https://en.wikipedia.org/wiki/Docker,_Inc.)

Some of the popular products of Docker, Inc. include,
- [Docker Hub](https://hub.docker.com/) - A central repository of containers.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Desktop GUI for Windows and Mac platforms.

Docker also offers several pricing tiers with varied feature set. Check out [Docker's pricing page here](https://www.docker.com/pricing/).

#### A brief history about Docker 



### From Linux to everywhere
Docker traditionally was developed to work on the Linux OS, but slowly with Microsoft's contributions and close support with Docker, Inc. the platform is also available for Windows. This gave birth to 2 types of containers namely,
1. Linux Containers - Runs on Windows, Mac and Linux
2. Windows Containers - Runs on Windows



```mdx-code-block
<Tabs groupId="Linux-and-Windows-Containers-Distinction">
<TabItem value="Linux containers">
```

```bash
docker pull ubuntu:latest
```

```mdx-code-block
</TabItem>
<TabItem value="Windows Containers">
```

```PowerShell
docker pull mcr.microsoft.com/powershell:lts-nanoserver-1903
```

```mdx-code-block
</TabItem>
</Tabs>
```


As containers share the kernel of the host operating system, Windows containers cannot run on a Mac or Linux. However, thanks to Microsoft's support for Linux, Windows containers as well as Linux containers can run on Windows.

---
## Docker Installation
[Refer the Docs](https://docs.docker.com/get-docker/) for the latest information on instructions for how to install docker for the platform of your choice. Docker is available (thanks to the contribution of countless open source contributions) on Linux, Windows and Mac. However, the way the containerization is implemented varies slightly across the platforms.

---
## Docker Architecture
Docker follows a simple client-server architecture along with a central repository to store and serve the images. Thus, there are 3 main components in a docker implementation.
1. **Client**
	- It connects to the docker engine to *send and receive commands and outputs*.
	- It could be a *GUI Application* such as Docker Desktop (available for Windows and Mac) or a *CLI Tool* available for Docker CLI (Windows, Mac and Linux).
	- Client can exist on the same machine as the Docker Engine or exist on a different machine.
2. **Server**
	- This is
	- It performs all operations related to containers throughout their lifetime.
	- Often referred to as `dockerd` (pronounced as `docker-dee`).
	- It manages several container objects such as images, containers, volumes, networks and other plugins.
3. **Repository**
	-  A storage location for container images.
	- It could be the official repository from Docker Inc., [Docker Hub](https://hub.docker.com/) or from a third-party provider such as AWS, Azure or GCP or locally maintained by a company.

Communication between docker client and docker engine happens over *REST API*. Docker engine runs on *port 2376* by default.

### Client
- The docker client provides a primary way for the users to interact with docker.
- It provides an interface to manage container objects such as images, containers, volumes, networks and other plugins.
- Docker client is available as
	1. **Docker CLI** - Available in Windows, Mac and Linux.
	2. **Docker Desktop** - Available on Windows and Mac.

### Engine
The docker engine can be considered as the software that runs, manages and terminates the containers as per the user's requirements. Docker engine (currently-2023) is modular in nature and is made up of smaller specialized tools that adhere to open standards such as the Open Container Initiative or OCI.

#### Monolithic Docker Engine from the past
When docker was initially released, the docker engine had two components.
1. **Docker Daemon or `dockerd`** - a singular daemon that contained the code for client, API, container runtime and more.
2. **LXC** (Linux Containers)- An OS-level virtualization technology that allows creation and management of multiple isolated Linux virtual environments on a single control host

The docker daemon was built as a monolith that performs several functionalities and LXC was specific to Linux, thus threatening the cross-platform ambition of docker.

LSX was soon replaced with `libcontainer` developed in-house by Docker. Inc. to provide a cross-platform functionality to docker. `libcontainer ` replaced LXC as the execution driver in docker 0.9.

The next priority was to breakdown the monolithic docker daemon into microservices. This gave rise to tools such as `runc`, `containerd` and `shim` discussed below.

#### Open Container Initiative (OCI)
The [Open Container Initiative](https://opencontainers.org/) or the OCI is an open governance standard/structure for the purpose of creating industry standards around container formats and runtimes. OCI was established in 2015 by Docker and other industry leaders in the container industry.

OCI currently contains 3 specifications
1. **Runtime Specification (`runtime-spec`)**
2. **Image specification (`image-spec`)**
3. **Distribution Specification (`distribution-spec`)**

#### Docker in its present state
Currently (2023), Docker engine is made up of the following components.
1. **docker daemon or `dockerd`**
	- The docker daemon or `dockerd` provides an interface between the docker client and the core docker functionalities.
	- The client communicates to `dockerd` via REST API and `dockerd` delegates the tasks and performs the actions as directed from the client.
	- From being a monolithic implementation to a microservices focussed tool, most of the `dockerd`'s initial functionality is stripped into their own services.
	- Currently, the daemon is responsible for image management, image builds, REST API communication, authentication, security, core network
2. **`containerd`**
	- Its main functionality is to manage container lifecycle.
	- It interfaces between the daemon and `runc`
	- Initially it set out to be a lightweight container management tool, it soon took additional functionality of managing other objects such as images, volumes and networks.
	- However, as `containerd` is very modular, most of the functionality can be added only if required, thus keeping the size small.
	- [`containerd`](https://containerd.io/) is currently a graduated CNCF project.
3. **`shim`**  
	- `shim` promotes the concept of daemon-less containers.
	- It is used to decouple the container runtimes from the `containerd` service.
	- This is advantageous as the now-decoupled environment is not dependent on `containerd` for its operation, thus allowing `containerd` and thereby the daemon to be started, stopped or upgraded without killing all the running containers.
	- Every time a new container needs to be started, a new fork of the `runc` is created.
	- `runc` then starts the container and then exists.
	- `shim` then takes over the process and manages the containers by keeping the STDIN and STDOUT streams open and reporting container's exit status back to the daemon.
4. **`runc`**
	- It is the reference implementation of the OCI `runtime-spec`. 
	- `runc` is referred to operating at the OCI layer.
	- It is a lightweight CLI wrapper for `libcontainer`  interfacing between the host kernel and the container.
	- At its core, the functionality of `runc` is to start containers and it is very efficient at doing that.
	- `runc` can be replaced with any other OCI `runtime-spec` compatible runtimes.

### Image Repository/Registry
[Docker Hub](https://hub.docker.com/) is the most popular image repository/registry to upload and manage docker images (OCI compatible images). It offers features such as image versions (tags), public and paid repositories and much more. There are several [pricing options](https://www.docker.com/pricing/) that offer varied support and feature set.

There are other image repositories as well. Some of the other popular ones include
- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) by AWS.
- [Azure Container Registry](https://azure.microsoft.com/en-in/products/container-registry/) by Azure.
- [Container Registry](https://cloud.google.com/container-registry/) by Google Cloud (GCP)

---
## Communication via REST API
Communication between the client, docker engine and the image repository occurs via REST API. This is implemented by the docker daemon.

Docker can be set up in two ways
1. Docker Client and Docker Engine on the same host - Communication over the IPC socket.
2. Docker Client and Docker Engine on different hosts - communication over the network

#### Client and Engine on Same Host
In a default installation, the docker client and the docker engine are setup in the same host. In such cases the communication is made via the local IPC socket.

:::note IPC Socket
Unix Domain Socket (UDS) or Inter-Process Communication (IPC) Socket is a data communications endpoint for exchanging data between processes running on the same host operating system. It is a standard component of the POSIX operating systems.

In an IPC Socket communication, all communication occurs entirely within the operating system kernel. 
:::

The socket can be found at `/var/run/docker.sock` on Linux and at `//./pipedocker_engine` on Windows. 

#### Client and Engine on Different Host


---
## Docker Objects
Docker comprises of several entities referred commonly as objects. These are
1. **Images** - Templates that are used when containers are created and used.
2. **Containers** - Running/operational instance of an image.
3. **Volumes** - Persistent storage for data created and stored during container runtimes.
4. **Networks** - Constructs of networking that enable containers to communicate within themselves and outside of the docker environment to the docker host and to other external networks.
5. **Plugins** - Optional functionalities across domains such as volume, networking, authentication and so on that can be added to the docker engine.

### Images
- Images are one of the core parts of a docker implementation.
- They are templates from which containers are created.
- Hence images are considered as build-time constructs.
- Once a container is created from an image, they both become dependent on each other, thus the *image cannot be destroyed unless all of the containers that use the image are stopped and removed*. 
- Images are usually small in size as they contain the barebones of what is required to run the app or service or environment and nothing else. Containers use the host's operating system for lower level tasks, hence the light weightiness of the images.
- However, Microsoft's images on windows are a little bit larger in size due to the architecture of the Windows Operating System.

#### Pulling Images
The process of downloading an image from a repository is referred to as **pulling**. Docker defaults to Docker Hub as source repository, however it is possible to change the repository when pulling the images and the process remains the same nonetheless. 

```bash title="docker pull command"
docker pull ubuntu:latest
```

If the image did not exist prior locally, it is pulled as given below.

```txt title="docker pull output - new pull"
latest: Pulling from library/ubuntu
677076032cca: Pull complete
Digest: sha256:9a0bdde4188b896a372804be2384015e90e3f84906b750c1a53539b585fbbe7f
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
```

However, if the image already exists locally, the following information is given by the docker engine back to the client.

```txt title="docker pull output - existing image"
latest: Pulling from library/ubuntu
Digest: sha256:9a0bdde4188b896a372804be2384015e90e3f84906b750c1a53539b585fbbe7f
Status: Image is up to date for ubuntu:latest
docker.io/library/ubuntu:latest
```

What happens if an image that does not exist is requested for a pull?

```bash
docker pull totally-fake-image
```

The action returns the following response.

```txt
Using default tag: latest
Error response from daemon: pull access denied for totally-fake-image, repository does not exist or may require 'docker login': denied: requested access to the resource is denied
```

To pull all images in a repository (usually not recommended) pass the `-a` flag to the docker pull command.

```bash
docker pull -a image
```

#### Listing the locally stored Images
To list the images that are currently available locally, the following commands can be used.

```bash
docker images
docker image ls
```

Docker then displays all the images that are available locally.

```txt
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
postgres     latest    680aba37fd0f   2 weeks ago   379MB
node         latest    272b8142e84e   2 weeks ago   998MB
mysql        latest    57da161f45ac   2 weeks ago   517MB
ubuntu       latest    58db3edaf2be   4 weeks ago   77.8MB
```

The `docker image ls` command allows to filter the output of the docker images returned based on certain criteria such as
- **dangling (Accepts Boolean)** - Untagged images which usually occur when newer images are built with the tag that exists prior. Docker removes the tag from the older version of the image and attaches the tag to the newer image, thus leaving the older image without tags.
- **before (Accepts image name/ID)** - Returns all the images created before the supplied image.
- **since (Accepts image name/ID)** - Returns all the images created after the supplied image.
- **label (Accepts string)** - Returns the images based on the presence of a label or value. However, the docker images ls command does not display labels in its output.

Docker also supports filtering using reference (additional functioning features) and the usage Go templates using the `--format` flag.

```bash
# List images that are devoid of tags
docker image ls --filter dangling=true

# List images that have tags
docker image ls --filter dangling=false

# List images before the curious-salamander 
docker image ls --filter before="curious-salamander"

# List images after the curious-salamander
docker image ls --filter since="curious-salamander"

# List images with Go Templates formatting
docker image ls --format "{{.Repository}}: {{.Tag}} - {{.Size}}"
```

#### Image Naming
Each and every image is labelled in a container registry to make it easier to identify the image. A standard image nomenclature is given below.

```txt
registry-link/repository-link/image-name:tag
```

- `registry-link`
	- DNS name of the image registry.
	- Instructs docker client of which registry to use.
	- This is optional, will resolve to Docker Hub registry if no input is provided.
- `repository-link`
	- Name of the repository that hosts the image of interest.
	- Official images are stored by Docker Hub in the top-level of the docker Hub namespace.
	- This is not used if the image under question resides on the top level domain in Docker Hub.
	- For third-party images, repository link is mandatory.
- `image-name`
	- Denotes the actual name of the image of interest.
	- This is a mandatory field.
- `tag`
	- Denotes a variant of the image within the repository.
	- it is just a string used for easy identification.
	- Usually, repositories would have an incrementing numeric progression.
	- The latest version, by convention is also tagged as latest to facilitate easy identification.
	- However, it might not be the case always and it entirely depends on the developer and maintainer of the image
	- The same image can have more than one tags as repositories do not restrict with content.
	- It is always best practice to refer the documentation of the respective images to better understand the naming convention of the tags used foe the particular image.

#### Searching the repository
To search for a particular image, the `docker search` command can be used. However it only searches the NAME field. By default, Docker displays only 25 hits, which can be increased to 100 with the limit flag.

```bash
docker search alpine --limit 5
```

This returns all the images with the text alpine in the NAME field.

```txt
NAME                               DESCRIPTION                STARS     OFFICIAL   AUTOMATED
alpine                             A minimal Docker image …   9724      [OK]
alpinelinux/docker-cli             Simple and lightweight …   7
alpinelinux/gitlab-runner          Alpine Linux gitlab-run…   4
alpinelinux/alpine-gitlab-ci       Build Alpine Linux pack…   3
alpinelinux/gitlab-runner-helper   Helper image container …   2
```

#### Made up of Layers
An image in Docker is made up of several layers of files that make up the final image. This is done to make the images modular. Docker finally stacks the layers and displays them as a single image. This is done to make docker efficient in operation and avoid constant re-download of existing layers from other images.

Suppose, if an ubuntu image has to be downloaded for the latest version, it might share the underlying layers from the previous versions of ubuntu. In that case, only the new layers are downloaded and the existing ones are used as such. 

Layers are represented using their SHA256 hashes. This is used by docker to identify and use the layers across images without downloading the same layer again for another image.

The number of layers is based upon what the image does, the core applications it runs and that base image was used to build the image.

These layers can be seen when trying to pull and image. To know the different layers that make up an image, use the `docker image inspect` command.

```bash
docker image inspect <container-name/container-ID>:<tag>
```

Behind the scenes, docker employs a storage driver that enables the layer stacking and presenting them as a single file system. However, the user experience remains identical in each case. The following are the storage drivers available in Linux and Windows.

- Storage Drivers available on Linux
	- `AUFS`
	- `overlay2`
	- `devicemapper`
	- `btrfs`
	- `zfs`
- Storage Drivers on Windows
	- `windowsfilter`

#### Content Hashes, Digests and Immutability
Docker 1.10 introduced the concept of content hashes, where each and every image gets a *cryptographic content hash* which is a representation of  the contents of an image. This makes it impossible to change the contents of an image 
without changing the hash. This is referred to as **digest**, which are a way to uniquely identify an image.

When an image is pulled, the docker client shows the digest associated with the image. To show all the images along with their digest, use the --digest flag to `docker images` command

```bash
docker images --digest
```

```txt
REPOSITORY   TAG       DIGEST               IMAGE ID       CREATED       SIZE
postgres     latest    sha256:901df89014…   680aba37fd0f   2 weeks ago   379MB
node         latest    sha256:33e99abf6c…   272b8142e84e   2 weeks ago   998MB
mysql        latest    sha256:8653a170e0…   57da161f45ac   2 weeks ago   517MB
ubuntu       latest    sha256:9a0bdde418…   58db3edaf2be   4 weeks ago   77.8MB

# NOTE: The digest hash is truncated for better visibility
```

Currently, there is no provision to get the digest has for images in a remote registry. To get the digest of an image, the image needs to be pulled locally.

#### Deleting Images
Deleting images can be done by using the docker `images rm` or the `docker rmi` command. Deleting an image remove the layers corresponding to the image from the host. However, if any of the layers is shared across multiple other images, the layer is not removed until all other images are also deleted.

```bash
# Delete images (command 1)
docker image rm <image-name/image-ID>

# Delete images (command 2)
docker rmi <image-name/image-ID>

# Deleting multiple images
docker rmi <image-1-name/image-1-ID> <image-2-name/image-2-ID>

# Deleting all existing images
docker rmi $(docker images -q)
```

### Containers
Docker implements containers adhering to the OCI runtime, image and specifications, thus making them compatible to be run on other containerization platforms also following the OCI standards. A container is the runtime instance of an image. It can be considered similar to a VM instance, but it is much faster and lightweight than a typical VM. Also Containers share the OS/Kernel of the host and install only the libraries and dependencies required by the application or service that the container hosts. 

#### Run Containers (basics)
Containers can be run from an image which can be either locally available or hosted in an image registry. If locally available, containers are spun up from the local copy of the image. If the images are not available locally, they are pulled from the remote registry and then the containers are spun up. Thus, containers can only be spun from a local copy of images, which makes them dependent during runtime.

```bash
docker run -it centos:latest /bin/bash
```

The following outputs results in case the image does not exist locally.

```txt
Unable to find image 'centos:latest' locally
latest: Pulling from library/centos
a1d0c7532777: Pull complete
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image for centos:latest
[root@adcd9bc897de /]#
```

In case a copy of the image is found locally, the following output can be obtained where the container is started straightaway.

```txt
[root@e5da8ec268a1 /]#
```

#### Listing Containers
The following command(s) can be used to list the containers currently managed by the docker engine.

```bash
# List running containers
docker ps

# List all containers (stopped and running)
docker ps -a
```

Upon executing the following output can be obtained

```txt
# Listing just the running containers
CONTAINER ID   IMAGE           COMMAND        CREATED         STATUS         PORTS     NAMES
b83c2173f913   centos:latest   "sleep 1000"   3 seconds ago   Up 2 seconds             wonderful_wilson

# Listing all the containers (stopped and running)
CONTAINER ID   IMAGE           COMMAND        CREATED              STATUS                          PORTS     NAMES
b83c2173f913   centos:latest   "sleep 1000"   About a minute ago   Up About a minute                         wonderful_wilson
464420bfbaba   centos:latest   "/bin/bash"    About a minute ago   Exited (0) About a minute ago             gifted_robinson
e5da8ec268a1   centos:latest   "/bin/bash"    10 minutes ago       Exited (0) 2 minutes ago                  objective_banach
adcd9bc897de   centos:latest   "/bin/bash"    11 minutes ago       Exited (0) 10 minutes ago                 gracious_borg

```

```
# Stop a Container
docker stop <container-name/container-ID>

# Remove (delete) a container (after it is stopped)
docker rm <container-name/container-ID>
```


### Volumes


### Networks


### Plugins

---
## Deployment with Docker Compose


---
## Container Orchestration with Docker Swarm


---
## Networking


---
## Overlay Networking


---
## Persisting Data with Volumes


---
## App Deployment with Stacks


---
## Focussing on Security


---
[Docker Reference Cookbook](../../Docker-Reference-Cookbook.md)

## Building Images with Dockerfile
- **Pull a container image from a repository:** `docker pull image:tag`
- **Run a container:** `docker run image:tag`
- **Docker ps command:** `docker ps <flags>` --> `docker ps -a` (all containers, running or not)
- **Docker stop command:** `docker stop <container_name/container_id>`
- **Docker rm command:** `docker rm <container_name/container_id>`
- **List local images:** `docker images` or `docker images ls`
- **Execute a command on a container:** `docker exec <container_name/container_id> <command>`
- **Running in detached mode:** `docker run -d image:tag`
- **Attach a detached container:** `docker attach <container_name/container_id>`
