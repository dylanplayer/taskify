FROM ruby:3.0.3
RUN apt-get update -qq && apt-get install -y postgresql-client

ENV NODE_VERSION=16.15.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

COPY . /app
WORKDIR /app

RUN gem install rails bundler
RUN npm install -g yarn

RUN bundle install
RUN yarn install

EXPOSE 3000

RUN yarn build

CMD ["bin/rails", "server", "-p", "3000", "-b", "0.0.0.0", "-e", "production"]
