# Next.js & Amplify Workshop

## Description
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pre-requisites
1. An AWS account
1. Node.js v12.x or later
1. npm v5.x or later
1. git v2.14.1 or later

## Clone repo
1. fork and clone repo locally
1. `cd amplify-blog`
> Take a look at the pages/_app.js, pages/index.js and pages/posts/[id].js files.

## Installing the CLI
1. `npm install -g @aws-amplify/cli`
1. Configure the CLI with our credentials `amplify configure`

        - Specify the AWS Region: us-east-1 || eu-west-1 || eu-central-1
        - Specify the username of the new IAM user: amplify-cli-user
        > In the AWS Console, click Next: Permissions, Next: Tags, Next: Review, & Create User to create the new IAM user. Then return to the command line & press Enter.
        - Enter the access key of the newly created user:   
        ? accessKeyId: (<YOUR_ACCESS_KEY_ID>)  
        ? secretAccessKey: (<YOUR_SECRET_ACCESS_KEY>)
        - Profile Name: amplify-cli-user

## Install dependencies and AWS Amplify 
1. Install react markdown and AWS Amplify `yarn add react-markdown aws-amplify`

## Create a backend project in AWS Amplify
1. Navigate to the AWS Amplify Console https://console.aws.amazon.com/amplify
1. New app > Create app backend
1. Give the app a name and confirm deployment. It will take a few minutes for Amplify to create the backend and Admin UI.
    
        The admin UI is a visual interface for configuring your backend. Add authentication, data, file storage, AI/ML capabilities to your app with our Admin UI and CLI.
1. After the backend and admin UI are created, it should take you to the Admin UI. If it doesn't, select the Admin UI button.
1. Click Create data model
1. Click Add model
1. On the right side, expand "Anyone authenticated with API Key..." and deselect "Update" and "Delete"
1. Name the model "Post"
1. Add a field called "title" with type "String"
1. Add another field called "content" with the same type.
1. Click "Save and deploy". Wait for the backend to deploy, it will take a couple minutes.
1. In the top right, click "Local setup instructions"
1. Copy the `amplify pull` command and paste it in your terminal and follow the instructions in the browser. Back on the CLI:

        Choose your default editor
        Choose the type of app that you're building: javascript
        What javascript framework are you using: react
        Source Directory Path: .
        Distribution Directory Path: build
        Build Command: npm run-script build
        Start Command: npm run-script start
        Do you plan on modifying this backend? N
1. This will create the models directory and aws-exports.js

## Connect the frontend to AWS Amplify
1. Navigate back to the AWS Amplify Console https://console.aws.amazon.com/amplify
1. Select the app
1. Under frontend environments, select your git repo and select, the stage and connect the branch.
1. Uncheck "Enable full-stack continuous deployments (CI/CD)" 
1. Follow what's happening under the hood by clicking on the different stages in the CI/CD pipeline

## Resources and references
- [AWS Amplify Docs](https://docs.amplify.aws/start/q/integration/next/)
- [Nader Dabit's Next.js with AWS Amplify Admin UI Crash Course](https://www.youtube.com/watch?v=bQ1Giqn5G38)
- [Deploy and host server-side rendered apps with Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/server-side-rendering-amplify.html)
- [Automatic build time generation of Amplify config](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-config-autogeneration.html)

## Tips
- If you pull the backend before generating the data model and aws-exports.js does not update, you can download the config from the [AppSync console](https://console.aws.amazon.com/appsync)