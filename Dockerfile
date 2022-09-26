FROM ruby:3.0.3
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client npm
RUN npm install -g yarn

WORKDIR /app/
COPY Gemfile /app/Gemfile
RUN bundle install

COPY bin/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 5000

RUN yarn install

CMD ["rails", "server", "-p", "5000", "-b", "0.0.0.0"]
