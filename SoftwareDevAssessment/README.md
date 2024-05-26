# Description
I used the dog api https://dog.ceo/dog-api/

However there are some limitations that I was not able to fix during the 2 hours. 
1) Number of dogs restricted to 1: Although I implemented a dropdown menu that allows you to pick up to 5 pictures of a dog breed, I didn't realize the api didn't support 5 random pictures of a specific breed. Rather it was x random pictures of random breeds
2) Dogs with 2 words (e.g. german shepherd) does not work. The documentation isn't clear on how to use the api for dog breeds with two words and I tried flipping things around but no luck


# How to run 
- in root directory, install packages:
> npm install
- Run web app (in root directory):
> npm run dev


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
