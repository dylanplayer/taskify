FROM ruby:3.0.3
RUN apt-get update -qq && apt-get install -y postgresql-client curl

ENV NODE_VERSION=16.15.0
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

ARG RAILS_MASTER_KEY
ENV RAILS_MASTER_KEY=$RAILS_MASTER_KEY

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG RAILS_ENV
ENV RAILS_ENV=$RAILS_ENV

RUN bin/rails db:exists && rake db:migrate || rake db:setup

CMD bin/rails server -p 3000 -b 0.0.0.0
