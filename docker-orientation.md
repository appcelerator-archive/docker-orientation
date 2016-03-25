build-lists: true

# Docker Orientation
# for
# Node.js Developers

---

# Docker Machine

---

`docker-machine` is a tool for provisioning a host with the Docker engine to run containers.

- It uses a driver model to standardize the way a host is provisioned for various providers.

- The basic format looks like this:

    $ docker-machine create -d <driver> <machine-name>

---

The host for the Docker engine must be running a 3.10 Linux kernel or later.

On your Mac or PC, that means you will need to run Linux in a virtual machine.

---

When you install the Docker Toolbox for Mac or Windows, it will set up VirtualBox (a virtual machine manager) for you if it isn't already installed.

---

`docker-machine` will then create new machines on your system as virtual machines running a lightweight Linux distribution called boot2docker.

---

Create a machine called `dev`:

    docker-machine create -d virtualbox dev

---

You can pass driver-specific options.

Enter the command without a machine name to see the latest information on supported options (more current than the online docs).

    docker-machine create -d virtualbox

---

Example:

    docker-machine create -d virtualbox \
        --virtualbox-disk-size 30000 \  # 30 MB
        --virtualbox-memory 2000 \      #  2 MB
        dev

---

Common commands:

    docker-machine ls

    docker-machine active

    docker-machine start [name]

    docker-machine stop [name]

    docker-machine ip [name]

---

`docker-machine` commands apply to hosts. `docker` commands apply to containers running on a host.

---

You must set the environment so that `docker` knows which host to communicate with when performing container commands.

    eval $(docker-machine env <name>)

---

`docker-machine env` exports environment variables that Docker uses. The `eval` command updates the current shell environment instead of a subshell that exits as soon as the `docker-machine` command finishes.

---
