tsc ./src/test.ts --outDir ./dist

Running tsc in watch mode to automatically compile the `.ts` files

```
tsc --watch
```
Now we can run `node dist/test.js` to see output of our code. 

But the problem with tsc in watch mode is it locks up the terminal hence you have to run the program in seperate terminal. 


To solve this, we will use `tsc -w` + `nodemon dist/test.js` with `concurrently`. 

- `tsc -w`: Will keep building our `.ts` file upon any changes
- `nodemon dist/test.js`: Will keep listening to any changes done on the `.js` file. 
- `concurrently`: Will process both these processes in a single terminal

```
"concurrently \"tsc --watch\" \"nodemon -q dist/test.js\""
```

