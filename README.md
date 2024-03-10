# My test-website React App

This is a simple guide to set up and run the React app using Docker.

## Prerequisites

Make sure you have the following installed on your machine:
- Docker

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/madushiranasooriya/weathertest.git
    ```

2. Change into the project directory:

    ```bash
    cd weathertest
    ```

3. Build the Docker image:

    ```bash
    docker build -t <docker image name> .
    ```

4. Run the Docker container:

    ```bash
    docker run -p <port number>:3000 -d <docker image name>
    ```

5. If you have another application running on the above port number, you can check the ports of running docker   images from following code:

    ```bash
    docker ps
    ```

Now, you should be able to access your React app at [http://localhost:3000/](http://localhost:3000/).

## Additional Information

- To stop the running Docker container:

    ```bash
    docker stop <container_id>
    ```

- To remove Docker images:

    ```bash
    docker rmi -f <docker_image_name>
    ```

 - Check created Docker images:

    ```bash
    docker images
    ```   

- For HTTPS support, update the Dockerfile to include SSL configurations.

## Contributing

Feel free to contribute by submitting issues or pull requests.

Happy coding!