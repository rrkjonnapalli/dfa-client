FROM node:18.12.1
RUN git clone https://github.com/rrkjonnapalli/dfa-client.git /data
RUN cd /data/server &&  npm install
RUN cd /data && npm install
WORKDIR /data
RUN npm run build
CMD ["npm", "start"]
