**This guide will walk you through the process of setting up and running an Angular project from a GitHub repository. Angular is a powerful framework for building web applications, and this guide will help you get started with an existing project.**

# Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

# Visit the Official Website: 
Open your web browser and go to the official **Node.js** website at (https://nodejs.org/).

# Download the Installer:

On the Node.js homepage, you will see two versions to choose from: LTS (Long-Term Support) and Current. For most users, it's recommended to download the LTS version as it is more stable and widely supported.
Click the "LTS" tab or the version that suits your needs.

# Select Your Operating System:

Node.js is available for various operating systems, including Windows, macOS, and Linux. Choose the installer that matches your operating system. Click on the respective download link to start the download.

# Verify the Installation:

To confirm that Node.js and npm are successfully installed, open your terminal or command prompt and run the following commands:

**node -v**
**npm -v**
These commands should display the versions of Node.js and npm, indicating that the installation was successful.

# Angular CLI (Command Line Interface):

The Angular CLI is a powerful tool that simplifies the development and deployment of Angular applications. To install it globally on your system, open your terminal and run the following command:

**npm install -g @angular/cli**

This command will install the Angular CLI globally on your system.

# Git

You'll need Git to clone the Angular project from GitHub. If you don't have Git installed, you can download it from:

- [Git](https://git-scm.com/download/win)
  To check if Git is installed, run the following command:

**git --version**
If Git is installed, you'll see the version information.

# Installation

Now that you have the prerequisites in place, follow these steps to fetch an Angular project from GitHub:

Clone the GitHub Repository: Open your terminal and navigate to the directory where you want to store your project. Run the following command to clone the GitHub repository:

# git clone https://github.com/vijaysexena/archarya-parshant.git

Navigate to the Project Directory: Change your working directory to the cloned project folder:

**cd archarya-parshant**

# Install Dependencies:

Use npm to install the project's dependencies. Run the following command:

**npm install or npm install --force**

This command will download and install all the required packages and libraries for the Angular project.

# Serve the Application:

To start a development server and view the Angular application in your browser, run the following command:

**ng serve**

This command will compile the Angular application and serve it locally. You can access the application in your web browser at http://localhost:4200/.
