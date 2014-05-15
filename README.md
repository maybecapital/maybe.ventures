# Maybe Ventures
## Site is hosted on s3.

After adding your secret keys to the aws-key.json file, deploy using 
```
grunt deploy
```

## Dev Tools
There's a standardish bower/npm/grunt setup going on here.  You don't need to use it, but if you have a standard node setup and run

``` sh
npm install
```

you can then run 

``` sh
grunt server
```

This will give you a lightweight server available at [localhost:9000](http://localhost:9000)