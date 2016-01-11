# Coworking Stock Photos

> Photos You Can Afford

## Install Dependencies:

Dependencies required on the operating system [http://brew.sh/] to install brew
```
brew install awscli
```

Dependencies required for the application [https://www.npmjs.com/] to install npm
```
npm install
```

## Prerequisite

Run gulp to compile sass, minify javascript, cache markup language.
- Live reload is active when gulp is watching files change. [http://livereload.com/] to install livereload
```
npm install -g gulp
gulp
```

Start a web server
```
cd public
python -m SimpleHTTPServer
```

## Deploy to S3:

```
$ aws configure
AWS Access Key ID [None]: YOUR_ACCESS_KEY
AWS Secret Access Key [None]: YOUR_SECRET_KEY
Default region name [None]: us-east-1
Default output format [None]: ENTER

$ aws s3 sync ./public s3://coworking-stock-photos
```
