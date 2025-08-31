# Use minimal web server
FROM nginx:alpine

# Copy website code to nginx
WORKDIR /usr/share/nginx/html
COPY *.html ./
COPY *.css ./
COPY *.js ./
COPY data/ ./data/
COPY fonts/ ./fonts/
COPY nav/ ./nav/
