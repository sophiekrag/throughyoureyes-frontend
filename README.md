# My life through your eyes

## Introduction
Welcome to the **Through your eyes app**.
For my final project at Ironhack I've decided to make an app where parents, grandparents, uncles, aunts, babysitters, etc. can write small memories about a childs day.

## Description
When a user is logged in they can see all the child profiles they're connected to. For each of those children they can write stories and add images. 
To connect with a child profile you need an unique id code. This the users can get from the person who has created a child profile. Ofcourse each user can also create an own child profile for their kids. Whenever you have created a child profile you will be able to read all the stories people wrote for your child. Don't think the story is appropriate? As an admin of that child you can also delete any story.
Finally all the stories you have written will be visable on the my stories page, here you can edit the stories, see the details and delete stories.

**Let start creating memories!**

## What is it build with
The frontend is built with:
*React
*Styled components 
Image upload:
*Cloudinary

## How to run the app
Create a cloudinary account for the upload of the images.
Create the backend with https://github.com/sophiekrag/throughyoureyes-backend

Add your `REACT_APP_CLOUDINARY_URL` and `REACT_APP_AXIOS_URL` credentials to the .env file

```
# Install dependencies
npm install

# Run the app
npm run start

```

## Suggestions
I would love to hear suggestions and improvements for the code, that way I can learn even more.

### Information
```
{
    author: 'Sophie Krag',
    github: 'https://github.com/sophiekrag'
}
```